<script>
	import Sort from '$lib/table/Sort.svelte';
	import { createEventDispatcher } from 'svelte';

	export let headers;
	export let rows;
	export let sortable = false;
	export let backgroundColor = '#FFFFFF';

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

<div
	{...$$restProps}
	class="px-[40px] py-[30px] shadow rounded-2xl {$$props.class}"
	style="background-color: {backgroundColor}"
>
	<slot name="panel" />

	<table class="w-full">
		<!--    header-->
		<tr>
			<th />
			{#each headers as header, i}
				<th class="text-start py-[23px] cursor-pointer select-none">
					<div
						class="flex items-center gap-[5px] justify-start"
						style="justify-content: {header.align ?? 'start'}"
						on:click={() => {
							if (sortable && (header.sort || header.sort === undefined)) {
								sort[i].sort();
							}
						}}
					>
						<slot name="header" {header}>
							{header.value}
						</slot>
						{#if sortable && (header.sort || header.sort === undefined)}
							<Sort bind:this={sort[i]} />
						{/if}
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
					<td class="py-[16px]">
						<div class="flex justify-start" style="justify-content: {headers[j].align}">
							{#if headers[j].key === 'actions'}
								<div on:click={() => onActionsClick(row)}>
									<slot name="cell" {row} {cell} rowIndex={i} cellIndex={j}>
										{cell.value}
									</slot>
								</div>
							{:else}
								<slot name="cell" {row} {cell} rowIndex={i} cellIndex={j}>
									{cell.value}
								</slot>
							{/if}
						</div>
					</td>
				{/each}
				<td />
			</tr>
		{/each}
	</table>
</div>

<slot name="body" />
