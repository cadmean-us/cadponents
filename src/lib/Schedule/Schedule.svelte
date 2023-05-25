<script>
	import { writable, derived } from 'svelte/store';
	import { fade } from 'svelte/transition';
	let currentWeek = writable(0);
	let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let startTime = 8; // starting time
	let endTime = 20; // ending time

	// Store for appointments
	let appointments = writable([
		{
			id: '1',
			startdate: new Date().setHours(9, 0, 0, 0),
			enddate: new Date().setHours(12, 0, 0, 0),
		},
		{
			id: '2',
			startdate: new Date().setHours(13, 0, 0, 0),
			enddate: new Date().setHours(15, 0, 0, 0),
		},
		{
			id: '3',
			startdate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(11, 0, 0, 0),
			enddate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12, 0, 0, 0),
		},
		{
			id: '4',
			startdate: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(16, 0, 0, 0),
			enddate: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(18, 0, 0, 0),
		},
	]);

	// Derived store for the start of the current week
	let startOfWeek = derived(currentWeek, ($currentWeek) => {
		let now = new Date();
		let dayOfWeek = now.getDay();
		let diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // adjust when day is Sunday
		let start = new Date(now.setDate(diff));
		start.setDate(start.getDate() + 7 * $currentWeek); // go to the correct week
		return start;
	});

	function nextWeek() {
		currentWeek.update((n) => n + 1);
	}

	function prevWeek() {
		currentWeek.update((n) => n - 1);
	}

	function getDayString(startOfWeek, i) {
		let date = new Date(startOfWeek.getTime());
		date.setDate(date.getDate() + i);
		return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
	}

	// Add function to show week range
	function showWeekRange(startOfWeek) {
		let endOfWeek = new Date(startOfWeek.getTime());
		endOfWeek.setDate(endOfWeek.getDate() + 6);
		return `${startOfWeek.getDate()}-${endOfWeek.getDate()} ${startOfWeek.toLocaleString(
			'en-US',
			{ month: 'long' },
		)} ${startOfWeek.getFullYear()}`;
	}

	// Derived store for week range
	let weekRange = derived(startOfWeek, ($startOfWeek) => showWeekRange($startOfWeek));

	// Function to filter appointments in the current week
	let appointmentsInWeek = derived(
		[startOfWeek, appointments],
		([$startOfWeek, $appointments]) => {
			let endOfWeek = new Date($startOfWeek.getTime());
			endOfWeek.setDate(endOfWeek.getDate() + 6);

			return $appointments.filter((appointment) => {
				let startdate = new Date(appointment.startdate);
				let enddate = new Date(appointment.enddate);
				return startdate >= $startOfWeek && enddate <= endOfWeek;
			});
		},
	);

	function appointmentInHour(appointments, hour, day) {
		let appointment = appointments.find((appointment) => {
			let startHour = new Date(appointment.startdate).getHours();
			let startDay = new Date(appointment.startdate).getDay();
			return startHour === hour && startDay === day;
		});

		if (appointment) {
			let startdate = new Date(appointment.startdate);
			let enddate = new Date(appointment.enddate);
			let duration = (enddate - startdate) / (1000 * 60 * 60); // Calculate the duration in hours
			return { ...appointment, duration };
		}

		return null;
	}

	let shouldDisplayAddLessonMatrix = writable(
		Array(7)
			.fill()
			.map(() => Array(endTime - startTime).fill(false)),
	);

	export let amount = 2;

	function selectDate(dayIndex, hour) {
		let date = new Date($startOfWeek.getTime());
		date.setDate(date.getDate() + dayIndex);
		date.setHours(hour, 0, 0); //
		selectedDate = date;
		// set minutes and seconds to zero
		shouldDisplayAddLessonMatrix.update((matrix) => {
			matrix = matrix.map((day, i) =>
				day.map((cell, j) => i === dayIndex && j === hour - startTime),
			);
			return matrix;
		});
	}

	export let selectedDate = null;
</script>

<h2>{$weekRange}</h2>
<button on:click={prevWeek}>Previous week</button>
<button on:click={nextWeek}>Next week</button>

<table class="border-separate border-spacing-0">
	<thead>
		<tr>
			<th class="!h-0 !w-0" />
			{#each weekDays as day, i}
				<th class="w-[201px] h-[52px]">{day} {getDayString($startOfWeek, i)}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Array(endTime - startTime) as _, i (i)}
			<tr>
				<td class="h-[52px] w-[63px] flex items-center justify-start"
					>{startTime + i}:00
				</td>
				{#each weekDays as day, j}
					<td class="h-[52px] border-t border-x bg-white">
						<div
							class="z-10 relative h-full w-full !h-[52px]"
							on:click|stopPropagation|self={() => {
								selectDate(j, startTime + i);
							}}
						>
							{#if appointmentInHour($appointmentsInWeek, startTime + i, j)}
								<div
									class="z-10 absolute flex items-center justify-center top-[-1px] left-[-1px] truncate bg-white w-[199px]"
									style="
									height: {55 * appointmentInHour($appointmentsInWeek, startTime + i, j).duration - 1}px;
									"
									on:click|stopPropagation
								>
									<slot name="lesson">Lesson</slot>
								</div>
							{:else if $shouldDisplayAddLessonMatrix[j][i]}
								<div
									class="z-50 absolute flex pt-[16px] justify-center top-[-1px] left-[-1px] truncate bg-[#3B185F] w-[199px] text-white"
									style="
									height: {55 * (amount > 0 ? amount : 1) - 1}px;
									"
									in:fade
									out:fade={{ duration: 200 }}
									on:click|stopPropagation|self={() => {
										selectDate(j, startTime + i);
									}}
								>
									<slot name="addLesson">Add lesson</slot>
								</div>
							{/if}
						</div>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	tr:first-child td:nth-child(2) {
		border-radius: 12px 0 0 0;
	}
	tr:first-child td:last-child {
		border-radius: 0 12px 0 0;
	}
	tr:last-child td:last-child {
		border-radius: 0 0 12px 0;
	}
	tr:last-child td:nth-child(2) {
		border-radius: 0 0 0 12px;
	}

	tr:last-child td:first-child {
		border-bottom: 0;
	}
	tr:last-child td {
		border-bottom: 1px solid #e7e7e7;
	}
</style>
