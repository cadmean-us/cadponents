<script lang="ts">
	import Table from '$lib/table/Table.svelte';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Sheet from '$lib/Sheet.svelte';
	import SideMenu from '$lib/menu/SideMenu.svelte';
	import Student from '$lib/Student.svelte';
	import Cadmean from '$lib/Cadmean.svelte';
	import Chips from '$lib/chips/Chips.svelte';

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

	// console.log(Array.from({ length: 6 }).map((_, i) => ({
	//     id: i,
	//     name: "Load Balancer " + (i + 1),
	//     protocol: "HTTP",
	//     port: i % 3 ? (i % 2 ? 3000 : 80) : 443,
	//     rule: i % 3 ? "Round robin" : "DNS delegation",
	// })))

	let data = [
		{ id: 1, value: 'test1' },
		{ id: 2, value: 'test2' },
		{ id: 3, value: 'test3' },
	];

	let title = 'Instructors';
	let totalAmount = '100';
	let visible = false;
	let sheet;
	$: console.log(sheet);

	const onActionsClick = (row) => {
		console.log(row);
	};

	let tabs = [
		{
			name: 'Schedule',
			href: '/dashboard/schedule',
			icon: Student,
		},
		{
			name: 'Lessons',
			href: '/dashboard/lessons',
			icon: Student,
		},
		{
			name: 'Students',
			href: '/dashboard/students',
			icon: Student,
		},
	];
</script>

<Sheet bind:this={sheet} />

<div class="flex">
	<SideMenu {tabs}>
		<svelte:fragment slot="title">
			<div class="text-white mb-3">Cadponents</div>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<div class="text-white mb-3">Need help?</div>
		</svelte:fragment>
	</SideMenu>
	<div class="p-10">
		<Cadmean class="underline" />

		<Chips bind:data />
		<Button
			on:click={() => {
				sheet.toggleVisibility();
			}}
			prefix="/icons/Plus.svg">test</Button
		>
		<Input />
		<Table {headers} on:onActionsClick={(e) => onActionsClick(e.detail)} {rows} sortable>
			<svelte:fragment slot="panel">
				<div class="flex">
					<div class="flex">
						<div class="mr-4">{title}</div>
						<div class="">{totalAmount}</div>
					</div>
					<div class="flex-1" />
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
		<div class="h-[1200px]">long content</div>
	</div>
</div>
