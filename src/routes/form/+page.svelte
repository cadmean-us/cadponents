<script lang="ts">
	import Select from '$lib/RichSelect.svelte';
	import Input from '$lib/Input.svelte';
	import Toggle from '$lib/Toggle.svelte';
	import CheckboxGroup from '$lib/CheckboxGroup.svelte';
	import RadioGroup from '$lib/RadioGroup.svelte';
	import FileUploader from '$lib/FileUploader.svelte';

	let formValues = {
		name: '',
		color: '',
		subscribe: false,
		interests: [],
		gender: '',
		file: null
	};

	const radioOptions = [
		{
			value: 'radio1',
			disabled: false,
			text: 'Radio 1',
			description: 'value: radio1'
		},
		{
			value: 'radio2',
			disabled: false,
			text: 'Radio 2',
			description: 'value: radio2'
		},
		{
			value: 'radio3',
			disabled: true,
			text: 'Radio 3',
			description: 'value: radio3'
		}
	];
	const checkboxOptions = [
		{
			value: 'radio1',
			disabled: false,
			text: 'Radio 1',
			description: 'value: radio1'
		},
		{
			value: 'radio2',
			disabled: false,
			text: 'Radio 2',
			description: 'value: radio2'
		},
		{
			value: 'radio3',
			disabled: true,
			text: 'Radio 3',
			description: 'value: radio3'
		}
	];

	// Submit handler triggers native validation and logs data if valid
	function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		// reportValidity() will show the browser's validation UI if needed
		if (form.reportValidity()) {
			console.log('Form submitted successfully!', formValues);
			// Do further submission tasks (e.g., API calls) here
		} else {
			console.log('Form is invalid!');
		}
	}
</script>

<form on:submit={handleSubmit}>
	<Input label="Name" placeholder="Enter your name" bind:value={formValues.name} required />
	<Select
		label="Favorite Color"
		placeholder="Select color"
		options={[
			{ value: '0', label: 'Red' },
			{ value: '1', label: 'Green' },
			{ value: '2', label: 'Blue' }
		]}
		bind:value={formValues.color}
		required
	/>
	<Toggle label="Subscribe" on="Yes" off="No" bind:value={formValues.subscribe} required />
	<CheckboxGroup
		label="Select Interests"
		options={checkboxOptions}
		bind:value={formValues.interests}
		required
	/>
	<RadioGroup label="Gender" options={radioOptions} bind:value={formValues.gender} required />
	<FileUploader label="Upload File" accept="image/*" bind:value={formValues.file} required />
	<button type="submit">Submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
