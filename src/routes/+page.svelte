<script lang="ts">
	import Table from '$lib/table/Table.svelte';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Sheet from '$lib/Sheet.svelte';
	import SideMenu from '$lib/menu/SideMenu.svelte';
	import Student from '$lib/Student.svelte';
	import Cadmean from '$lib/Cadmean.svelte';
	import Chips from '$lib/chips/Chips.svelte';
	import Popover from '$lib/Popover.svelte';
	import { onMount } from 'svelte';
	import Dropdown from '$lib/Dropdown.svelte';

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

	let data = [
		{ id: 1, value: 'test1' },
		{ id: 2, value: 'test2' },
		{ id: 3, value: 'test3' },
		{ id: 4, value: 'test3' },
		{ id: 5, value: 'test3' },
		{ id: 6, value: 'test3' },
		{ id: 7, value: 'test3' },
	];

	let title = 'Instructors';
	let totalAmount = '100';
	let visible = false;
	let sheet;

	const onActionsClick = (row) => {};

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

	let dropValues = [
		{
			key: '1',
			value: 'George',
		},
		{
			key: '2',
			value: 'Emma',
		},
		{
			key: '3',
			value: 'Olivia',
		},
		{
			key: '4',
			value: 'Noah',
		},
		{
			key: '5',
			value: 'Liam',
		},
		{
			key: '6',
			value: 'Sophia',
		},
		{
			key: '7',
			value: 'Mia',
		},
		{
			key: '8',
			value: 'Charlotte',
		},
		{
			key: '9',
			value: 'Amelia',
		},
		{
			key: '10',
			value: 'Harper',
		},
		{
			key: '11',
			value: 'Evelyn',
		},
		{
			key: '12',
			value: 'Abigail',
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

	<div class="p-10 flex flex-col gap-10">
		<Cadmean class="underline" />

		<Dropdown values={dropValues} />

		<Chips bind:data class="w-[300px] " />

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
