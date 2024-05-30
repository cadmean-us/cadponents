<script>
	import Checkbox from '$lib/Checkbox.svelte';
	import Radio from '$lib/Radio.svelte';
	import Toggle from '$lib/Toggle.svelte';

	let selectedRadio1;

	const checkboxes = {
		checkbox1: false,
		checkbox2: true,
		checkbox3: false,
		checkboxDisabled1: false,
		checkboxDisabled2: true,
		checkboxDisabled3: false,
	}

	const togglers = {
		toggler1: false,
		toggler2: true,
		toggler3: false,
		toggler4: true,
	}

	const radioOption = [
		{
			value: 'radio1',
			disabled: false,
			text: 'Radio 1',
			description: 'value: radio1',
		},
		{
			value: 'radio2',
			disabled: false,
			text: 'Radio 2',
			description: 'value: radio2',
		},
		{
			value: 'radio3',
			disabled: true,
			text: 'Radio 3',
			description: 'value: radio3',
		} 
	]

</script>

<h1 class="ui-group__title">Control</h1>

<div class="ui-group">
	<div class="ui-group__row">
		<Checkbox bind:checked={checkboxes.checkbox1}>
			Checkbox
		</Checkbox>
		<Checkbox bind:checked={checkboxes.checkbox2}>
			Checkbox
		</Checkbox>
		<Checkbox bind:checked={checkboxes.checkbox3}>
			Checkbox
			<slot slot="description">Description</slot>
		</Checkbox>
	</div>
	<div class="ui-group__row">
		<Checkbox disabled bind:checked={checkboxes.checkboxDisabled1}>
			Checkbox
		</Checkbox>
		<Checkbox disabled bind:checked={checkboxes.checkboxDisabled2}>
			Checkbox
		</Checkbox>
		<Checkbox disabled bind:checked={checkboxes.checkboxDisabled3}>
			Checkbox
			<slot slot="description">Description</slot>
		</Checkbox>
	</div>
	<div class="ui-group">
		<p>Selected: {selectedRadio1}</p>
		<Radio options={radioOption} bind:selected={selectedRadio1}/>
	</div>
	<div class="ui-group">
		<Toggle bind:checked={togglers.toggler1}/>
		<Toggle bind:checked={togglers.toggler2}/>
	</div>
	<div class="ui-group">
		<Toggle bind:checked={togglers.toggler3} disabled/>
		<Toggle bind:checked={togglers.toggler4} disabled/>
	</div>
</div>
