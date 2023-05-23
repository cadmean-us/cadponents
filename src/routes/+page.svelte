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
	import Checkbox from '$lib/Checkbox.svelte';
	import Combobox from '$lib/Combobox.svelte';
	import Radio from '$lib/Radio.svelte';
	import Toggle from '$lib/Toggle.svelte';

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

	let chipsData = ['test1', 'test8', 'test7', 'test2', 'test6', 'test4', 'test9'];

	let visible = false;
	let sheet;

	let dropValues = [
		'George',
		'EmmaEmmaEmmaEmmaEmmaEmmaEmmaEmma',
		'Olivia',
		'Noah',
		'Liam',
		'Sophia',
		'Mia',
		'Charlotte',
		'Amelia',
		'Harper',
		'Evelyn',
		'Abigail',
	];
	let groupChecked = ['George', 'Sophia'];

	let checked;
	let selectedDropdown = dropValues[0];
	let selectedCombobox = 'Sophia';
	let selectedRadio = 'George';

	let inputValue = '';
</script>

<Sheet bind:this={sheet} />

<div class="p-10 flex flex-col gap-10">
	<Cadmean class="underline" />

	<Toggle />

	<Input bind:value={inputValue} />

	Grouped Checkbox
	{#each dropValues as v}
		<Checkbox bind:group={groupChecked} value={v} />
	{/each}

	<div class="h-80" />

	{#each dropValues as v}
		<Radio bind:group={selectedRadio} value={v} />
	{/each}
	<div>
		{selectedRadio}
	</div>

	<div>Single Checkbox</div>
	<div>
		<Checkbox bind:checked class="w-20">Something</Checkbox>
		{checked}
	</div>

	<Combobox
		values={dropValues}
		label="Multiselect Combobox"
		multiselect
		selected={['George', 'Sophia']}
	/>

	<Combobox values={dropValues} selected={selectedCombobox} label="Combobox" />

	<Dropdown values={dropValues} bind:selected={selectedDropdown} />
	{selectedDropdown}

	<Chips bind:data={chipsData} class="w-[300px] " />

	<Button
		on:click={() => {
			sheet.toggleVisibility();
		}}
		prefix="/icons/Plus.svg">test</Button
	>

	<div class="h-[1200px]">long content</div>
</div>
