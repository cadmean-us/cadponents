<script>
	import Button from '$lib/Button.svelte';

	// @ts-nocheck

	import Select from '$lib/Select.svelte';
	import { onMount } from 'svelte';
	const selectValue = {
		select1: '',
		select2: [0],
		select3: {value: 0, label: 'apple'},
		select4: [{value: 0, label: 'apple'}],
		select12: '',
		select22: '',
	}
	const selectOptions = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]

	const getContactsByName = async (name) => {
		console.log(name)
		const contacts = await fetch('../selectTest.json').then(res => res.json()).then(data => data.filter(contact => contact.first_name.toLowerCase().includes(name.toLowerCase()) || contact.id === name))
		return contacts
	}
	let loading = true
	onMount(() => {
		loading = false
	})
</script>

<h1 class="my-8">Select</h1>
{#if !loading}
<div class="ui-group">
	<Button onclick={() => console.log(selectValue)}> view values </Button>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Select 
				fetchOptions={getContactsByName}
				transformFetchedOptionLabel={contact => `${contact.first_name} ${contact.last_name} (${contact.company_name})`}
				transformFetchedOptionValue={contact => `${contact.first_name} (${contact.company_name})`}
				bind:value={selectValue.select1}
				label="Label" 
				placeholder="Text field" 
				hint="Hint" 
				status="enabled"
			/>
			<Select 
				value={selectValue.select2} 
				options={selectOptions} 
				label="Label" 
				placeholder="Text field" 
				hint="Hint" 
				status="enabled"
			/>
			<Select 
				value={selectValue.select3} 
				options={selectOptions} 
				label="Label" 
				placeholder="Text field" 
				hint="Hint" 
				status="enabled"
			/>
			<Select 
				value={selectValue.select4} 
				options={selectOptions} 
				label="Label" 
				placeholder="Text field" 
				hint="Hint" 
				status="enabled"
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Select bind:value={selectValue.textarea12} options={selectOptions} label="Label" placeholder="Text field" hint="Hint" status="enabled" disabled/>
			<Select bind:value={selectValue.textarea22} options={selectOptions} label="Label" placeholder="Text field" hint="Hint" status="enabled" disabled/>
		</div>
	</div>
</div>
{/if}
