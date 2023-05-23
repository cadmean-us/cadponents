<script>
	import Timeline from '$lib/Timeline.svelte';
	import File from '$lib/icons/File.svelte';
	import Check from '$lib/icons/Check.svelte';

	let rows = [
		{
			id: 'a',
			name: 'Cessna',
			type: 'plane',
			schedule: [
				{ id: '0', description: 'lesson', start: 9, amount: 2 },
				{ id: '2', description: 'maintenance', start: 11, amount: 2 },
			],
		},
		{
			id: 'b',
			name: 'George',
			type: 'instructor',
			schedule: [
				{ id: '0', description: 'lesson', start: 9, amount: 2 },
				{ id: '0', description: 'lesson', start: 12, amount: 1 },
				{ id: '0', description: 'big lesson', start: 15, amount: 3 },
			],
		},
	];

	let start = 9;
	let end = 22;
</script>

<div class="h-full" style="height: calc(100vh - 80px)">
	<Timeline {start} {end} {rows}>
		<div class="flex items-center" slot="mainRow" let:row>
			{#if row?.type === 'plane'}
				<File />
			{:else}
				<Check />
			{/if}
			{row?.name ?? ''}
		</div>
	</Timeline>
</div>
