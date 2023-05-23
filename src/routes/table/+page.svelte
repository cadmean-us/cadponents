<script>
	import Table from '$lib/table/Table.svelte';

	let headers = [
		{ key: 'name', sort: false, value: 'Name' },
		{ key: 'email', value: 'Email' },
		{ key: 'phone', value: 'Phone' },
		{ key: 'actions', sort: false, value: 'Actions' },
	];

	let rows = [
		{ id: 0, name: 'name', email: '@', phone: '+111' },
		{ id: 1, name: 'name2', phone: '+112', email: '@2' },
	];

	const onActionsClick = (row) => {};

	let title = 'Instructors';
	let totalAmount = '100';
</script>

<Table {headers} on:onActionsClick={(e) => onActionsClick(e.detail)} {rows} sortable>
	<svelte:fragment slot="panel">
		<div class="flex">
			<div class="flex">
				<div class="mr-4">{title}</div>
				<div class="">{totalAmount}</div>
			</div>
		</div>
	</svelte:fragment>

	<svelte:fragment let:header slot="header">
		{#if header.key === 'big'}
			<h2>{header.value} test</h2>
		{:else}
			{header.value}
		{/if}
	</svelte:fragment>
</Table>
