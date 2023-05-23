<script>
	import { onMount } from 'svelte';

	export let headers = [];
	export let rows = [];
	export let start = 0;
	export let end = 23;

	for (let i = start; i <= end; i++) {
		headers.push({ key: `${i}`, value: i });
	}
	function fillArray(start, end) {
		let arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	}
	let timeArray = fillArray(start, end);

	function findScheduleItem(schedule, start) {
		return schedule.find((item) => item.start === start);
	}

	// Function to create an empty schedule item
	function createEmptyScheduleItem(start) {
		return { id: '', description: '', start: start, amount: 0 };
	}

	// Iterate over each item in rows
	rows.forEach((row) => {
		let newSchedule = {};

		// Iterate from start to end
		for (let i = start; i <= end; i++) {
			// Find the schedule item for this hour
			let scheduleItem = findScheduleItem(row.schedule, i);

			// If an item exists, add it to the new schedule
			if (scheduleItem) {
				newSchedule[i] = scheduleItem;
			}
			// If no item exists, add an empty item to the new schedule
			else {
				newSchedule[i] = createEmptyScheduleItem(i);
			}
		}

		// Replace the existing schedule with the new one
		row.schedule = newSchedule;
	});

	console.log(rows);

	// function getResource(time, resource) {
	// 	for (let i = 0; i < resource.length; i++) {
	// 		if (resource[i].start === time) return resource[i];
	// 	}
	// 	return null;
	// }
</script>

<div class="h-full overflow-auto">
	<table class="rounded-[12px]">
		<thead>
			<tr>
				<th>Search</th>
				{#each headers as header}
					<th>{header.value}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row, i}
				<tr>
					<td class="mainRow p-[12px_20px]">
						<slot name="mainRow" {row}>
							{row?.name ?? ''}
						</slot>
					</td>
					{#each timeArray as time}
						<td class="">
							<div class="relative h-[50px]">
								<div
									class="absolute top-[-1px] left-[-1px] !h-[52px] p-[12px_20px] truncate bg-white"
									style="
								display: {row.schedule[time]?.amount > 0 ? 'static' : 'none'} ;
									width: {107 * row.schedule[time]?.amount - 1}px;
									height: 50px;
									"
									title={row.schedule[time]?.description ?? ''}
								>
									{row.schedule[time]?.description ?? ''}
								</div>
							</div>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		border-collapse: separate;
		border-spacing: 0;
		border: 1px solid #e7e7e7;
		border-radius: 12px;
	}

	th:first-child {
		border-radius: 12px 0 0 0;
	}
	th:last-child {
		border-radius: 0 12px 0 0;
		border-right: 0;
	}
	tr:last-child td:last-child {
		border-radius: 0 0 12px 0;
	}
	tr:last-child td:first-child {
		border-radius: 0 0 0 12px;
	}

	tr td:last-child {
		border-right: 0;
	}
	tr td:first-child {
		border-left: 0;
	}
	tr:last-child td {
		border-bottom: 0;
	}

	th:first-child {
		/* Background color */
		/*border-right: 1px solid #e7e7e7;*/
		min-width: 280px;
		max-width: 280px;
		/* Stick to the left */
		left: 0;
		top: 0;
		position: sticky;

		/* Displayed on top of other rows when scrolling */
		z-index: 9999;
	}

	th {
		background-color: #f8f8f8;
		border-bottom: 1px solid;
		border-right: 1px solid;
		border-color: #e7e7e7;
		min-width: 107px;
		min-height: 54px;
		padding: 16px 20px;
		/* Stick to the left */
		top: 0;
		position: sticky;
		/* Displayed on top of other rows when scrolling */
		z-index: 9998;
	}

	td {
		max-width: 107px;
		height: 50px;
		background-color: white;
		border-right: 1px solid #e7e7e7;
		border-bottom: 1px solid #e7e7e7;
	}

	.mainRow {
		width: 280px !important;
		background-color: white;
		position: sticky;
		z-index: 9998;
		left: 0;
	}
</style>
