<script>
	import Input from '$lib/Input.svelte';
	import Textarea from '$lib/Textarea.svelte';
	import Placeholder from '$lib/icons/Placeholder.svelte';
	const textareaValue = {
		textarea1: '',
		textarea2: '',
		textarea12: '',
		textarea22а: ''
	};
	const inputsValue = {
		input1: '',
		input2: '',
		input3: '',
		input4: '',
		input5: '',
		input12: '',
		input22: '',
		input32: '',
		input42: '',
		input52: '',
		input13: '',
		input23: '',
		input33: '',
		input43: '',
		input53: '',
		input14: '',
		input24: '',
		input34: '',
		input44: '',
		input54: '',
		input15: '',
		input25: '',
		input35: '',
		input45: '',
		input55: '',
		input16: '',
		input26: '',
		input36: '',
		input46: '',
		input56: '',
		input17: '',
		input27: '',
		input37: '',
		input47: '',
		input57: ''
	};
</script>

<h1 class="ui-group__title">Input</h1>

<div class="ui-group">
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				autocomplete="email"
				bind:value={inputsValue.input1}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
			/>
			<Input
				bind:value={inputsValue.input2}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input3}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input4}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input5}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input11}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="invalid"
			/>
			<Input
				bind:value={inputsValue.input21}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="invalid"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input31}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="invalid"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input41}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="invalid"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input51}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="invalid"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input12}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="success"
			/>
			<Input
				bind:value={inputsValue.input22}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="success"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input32}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="success"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input42}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="success"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input52}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="success"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input13}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="loading"
			/>
			<Input
				bind:value={inputsValue.input23}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="loading"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input33}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="loading"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input43}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="loading"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input53}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="loading"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input14}
				label="Label"
				placeholder="Complete"
				hint="Hint"
				status="complete"
			/>
			<Input
				bind:value={inputsValue.input24}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="complete"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input34}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="complete"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input44}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="complete"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input54}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="complete"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input15}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="incomplete"
			/>
			<Input
				bind:value={inputsValue.input25}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="incomplete"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input35}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="incomplete"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input45}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="incomplete"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input55}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="incomplete"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input16}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="warning"
			/>
			<Input
				bind:value={inputsValue.input26}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="warning"
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input36}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="warning"
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input46}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="warning"
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input56}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="warning"
				trail={Placeholder}
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Input
				bind:value={inputsValue.input17}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enable"
				disabled
			/>
			<Input
				bind:value={inputsValue.input27}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enable"
				disabled
				lead="$"
			/>
			<Input
				bind:value={inputsValue.input37}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enable"
				disabled
				lead={Placeholder}
			/>
			<Input
				bind:value={inputsValue.input47}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enable"
				disabled
				trail="USD"
			/>
			<Input
				bind:value={inputsValue.input57}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enable"
				disabled
				trail={Placeholder}
			/>
		</div>
	</div>
</div>

<h1 class="my-8">Textarea</h1>

<div class="ui-group">
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Textarea
				bind:value={textareaValue.textarea1}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
			/>
			<Textarea
				bind:value={textareaValue.textarea2}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
			/>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Textarea
				bind:value={textareaValue.textarea12}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
				disabled
			/>
			<Textarea
				bind:value={textareaValue.textarea22}
				label="Label"
				placeholder="Text field"
				hint="Hint"
				status="enabled"
				disabled
			/>
		</div>
	</div>
</div>

<style>
</style>
