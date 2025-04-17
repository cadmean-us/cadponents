<script>
	import Button from '$lib/Button.svelte';
	import Select from '$lib/RichSelect.svelte';
	import { onMount } from 'svelte';
	const selectOptions = [
		'apple',
		'banana',
		'cherry',
		'date',
		'elderberry',
		'fig',
		'grape',
		'honeydew',
		'kiwi',
		'lemon'
	];
	const selectValue = {
		select1: selectOptions,
		select2: [0, 1, 2, 3],
		select3: [
			{ value: 0, label: 'apple' },
			{ value: 1, label: 'apples' }
		]
	};

	const getContactsByName = async (name) => {
		console.log(name);
		const contacts = await fetch('../selectTest.json')
			.then((res) => res.json())
			.then((data) =>
				data.filter(
					(contact) =>
						contact.first_name.toLowerCase().includes(name.toLowerCase()) || contact.id === name
				)
			);
		return contacts;
	};
	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

<h1 class="my-8">Select</h1>
{#if !loading}
	<div class="ui-group">
		<Button onclick={() => console.log(selectValue)}>view values</Button>
		<div class="ui-group__row">
			<div class="ui-group__row-inner">
				<Select
					options={selectValue.select1}
					label="Label"
					placeholder="Text field"
					hint="Hint"
					status="enabled"
				/>
				<Select
					options={selectValue.select2}
					label="Label"
					placeholder="Text field"
					hint="Hint"
					status="enabled"
				/>
				<Select
					options={selectValue.select3}
					label="Label"
					placeholder="Text field"
					hint="Hint"
					status="enabled"
				/>
			</div>
		</div>
		<div class="ui-group__row">
			Multiple
			<div class="ui-group__row-inner">
				<Select
					multiple
					options={selectValue.select1}
					label="Label"
					placeholder="Text field"
					hint="Hint"
					status="enabled"
				/>
				<Select
					multiple
					options={selectValue.select2}
					label="Label"
					placeholder="Text field"
					hint="Hint"
					status="enabled"
				/>
				<Select
					multiple
					options={selectValue.select3}
					label="Label"
					placeholder="Text field"
					hint="Hint"
					status="enabled"
				/>
			</div>
		</div>
	</div>
{/if}
