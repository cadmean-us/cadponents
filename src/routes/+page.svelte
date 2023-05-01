<script lang="ts">
	import Table from '$lib/table/Table.svelte';
	import { fly, fade } from 'svelte/transition';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Sheet from '$lib/Sheet.svelte';

	let headers = [
		{ key: 'big', sort: false, value: 'Find by name' },
		{ value: 'Phone' },
		{ value: 'Email' },
		{ key: 'actions', sort: false, value: 'Actions' }
	];

	let rows = [
		[{ value: 'test' }, { key: 'big', value: '3test' }],
		[{ value: 'test' }, { type: 'big', value: '3test' }]
	];

	// console.log(Array.from({ length: 6 }).map((_, i) => ({
	//     id: i,
	//     name: "Load Balancer " + (i + 1),
	//     protocol: "HTTP",
	//     port: i % 3 ? (i % 2 ? 3000 : 80) : 443,
	//     rule: i % 3 ? "Round robin" : "DNS delegation",
	// })))

	let title = 'Instructors';
	let totalAmount = '100';
	let visible = false;
	let sheet;
	$: console.log(sheet);
</script>

<Button
	prefix="/icons/Plus.svg"
	on:click={() => {
		sheet.toggleVisibility();
	}}>test</Button
>
<Input />

<Sheet bind:this={sheet} />

<div class="p-10">
	<Table {headers} {rows} sortable>
		<svelte:fragment slot="panel">
			<div class="flex">
				<div class="flex">
					<div class="mr-4">{title}</div>
					<div class="">{totalAmount}</div>
				</div>
				<div class="flex-1" />
			</div>
		</svelte:fragment>

		<svelte:fragment slot="header" let:header>
			{#if header.key === 'big'}
				<h2>{header.value} test</h2>
			{:else}
				{header.value}
			{/if}
		</svelte:fragment>
	</Table>
</div>
