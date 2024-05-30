<script>
// @ts-nocheck

	// import Sort from '$lib/table/Sort.svelte';
	import TableSort from '$lib/icons/TableSort.svelte';

	export let headers;
	export let rows;
	export let sortable = false;
	export let maxRows = 0;

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

	let activeSortingKey = null;
	let isAscending = true;

	function sorting(index) {
		isAscending = headerKeys[index] === activeSortingKey ? !isAscending : true;
		activeSortingKey = headers[index].key;
		rows = rows.sort((a, b) => {
			return isAscending ? a[headers[index].key] > b[headers[index].key] ? 1 : -1 : a[headers[index].key] < b[headers[index].key] ? 1 : -1;
		})
	}
</script>

<div
	{...$$restProps}
	class="table-container {$$props.class}"
>
	<slot name="panel" />

	<table class="table {maxRows > 0 ? 'table--scrollable' : ''}">
		<!--    header-->
		<thead class="table__header">
			<tr class="table__row">
				{#each headers as header, i}
					<th class="table__cell table__cell--header" style="width: {100 / headers.length}%">
						<div class="table__cell-inner table__cell-inner--header">
							<slot name="header" {header}>
								{header.value}
							</slot>
							{#if sortable && (header.sort || header.sort === undefined)}
								<button class="table__sort {activeSortingKey === header.key ? 'table__sort--active' : ''} {isAscending ? 'isAscending' : ''}" on:click={() => sorting(i)}>
									<TableSort />
								</button>
								<!-- <Sort bind:this={sort[i]} /> -->
							{/if}
						</div>
					</th>
				{/each}
			</tr>
		</thead>

		<!--    body-->
		<tbody class="table__body" style={maxRows > 0 ? `max-height: ${maxRows * 71}px` : ''}>
			{#each rows as row, i (row.id)}
				<tr class="table__row">
					{#each tableCellsByRowId[row.id] as cell, j (cell.key)}
						<td class="table__cell table__cell--body" style="width: {100 / headers.length}%">
							<div class="table__cell-inner">
								<slot name="cell" {row} {cell} rowIndex={i} cellIndex={j}>
									{cell.value}
								</slot>
							</div>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<slot name="body" />

<style lang="scss">
	.table-container {
		width: 100%;
	}
	.table {
		width: 100%;
		&__row {
			border-bottom: 1px solid var(--border-default);
			display: table;
			width: 100%;
		}
		&__body > &__row:last-child {
			border-bottom: 0;
		}
		&__cell {
			padding: 15px;
			&:first-child {
				padding-left: 0;
			}
			&:last-child {
				padding-right: 0;
			}
		}
		&__cell-inner {
			padding: 10px 0px;
			display: flex;
			gap: 12px;
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: -0.10px;
			text-align: left;
			color: var(--text-primary);
			&--header {
				align-items: center;
				color: var(--text-secondary);
			}
		}
		&__sort {
			color: var(--icon-primary);
			:global(path) {
				transition: var(--transition-duration) var(--transition-timing-function);
			}
			&--active:not(.isAscending) {
				:global(path:last-child) {
					opacity: 0;
				}
			}
			&--active.isAscending {
				:global(path:first-child) {
					opacity: 0;
				}
			}
		}
		&__header {
			display: table;
		}
		&__body {
			width: 100%;
		}
		&--scrollable > &__header {
			width: calc(100% - 4px);
		}
		&--scrollable > &__body {
			overflow-y: scroll;
			display: block;
			&::-webkit-scrollbar {
				width: 4px;
			}
			&::-webkit-scrollbar-thumb {
				width: 4px;
				border-radius: 4px;
				background: var(--icon-secondary);
			}
		}
	}
</style>