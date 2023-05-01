<script>
	import Sort from '$lib/table/Sort.svelte';
	import Button from '$lib/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let headers;
	export let rows;
	export let sortable = false;

	let dispatch = createEventDispatcher();
	let sort = [];

	$: headerKeys = headers.map(({ key }) => key);
	$: tableCellsByRowId = rows.reduce((rows, row) => {
		rows[row.id] = headerKeys.map((key, index) => ({
			key,
			value: resolvePath(row, key),
			display: headers[index].display,
		}));
		return rows;
	}, {});

	const resolvePath = (object, path) => {
		if (path in object) return object[path];
		return path
			.split(/[\.\[\]\'\"]/)
			.filter((p) => p)
			.reduce((o, p) => (o && typeof o === 'object' ? o[p] : o), object);
	};

	const onActionsClick = (row) => {
		dispatch('onActionsClick', row);
	};
</script>

<div class="px-[40px] py-[30px] shadow rounded-2xl">
	<slot name="panel" />

	<table class="w-full">
		<!--    header-->
		<tr>
			<th />
			{#each headers as header, i}
				<th class="text-start py-4">
					<div
						class="flex items-center gap-[5px]"
						on:click={() => {
							if (sortable && header.sort === undefined) {
								sort[i].sort();
							}
							console.log(sortable && header.sort);
						}}
					>
						<slot name="header" {header}>
							{header.value}
						</slot>
						<Sort bind:this={sort[i]} />
					</div>
				</th>
			{/each}
			<th />
		</tr>

		<!--    body-->
		{#each rows as row, i (row.id)}
			<tr class="border-t-[1px] border-[#F9F9F9]">
				<td />
				{#each tableCellsByRowId[row.id] as cell, j (cell.key)}
					<td class="py-4">
						{#if headers[j].key === 'actions'}
							<Button on:click={() => onActionsClick(row)} class="text-zinc-700"
								>︙</Button
							>
						{:else}
							<slot name="cell" {row} {cell} rowIndex={i} cellIndex={j}>
								{cell.value}
							</slot>
						{/if}
					</td>
				{/each}
				<td />
			</tr>
		{/each}
	</table>
</div>

<slot name="body" />
