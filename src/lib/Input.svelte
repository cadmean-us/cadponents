<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = '';
	export let id = '';
	export let placeholder = '';
	export let type = 'text';
	export let label = '';
	export let disabled = false;
	export let width = '';
	export let height = '';
	export let style = '';
	export let suffixSrc = '';
	export let suffixSize = '';
	export let suffixText = '';
	export let prefixSrc = '';
	export let prefixSize = '';
	export let prefixText = '';
	export let inputStyle = '';
	export let iconLeftMargin = '22px';
	export let iconRightMargin = '20px';
	export let maxWidth = '100%';

	let dispatch = createEventDispatcher();

	function handleKeyDown(e: any) {
		dispatch('keydown', e);
		if (e.code == 'Enter') {
			dispatch('enter', e);
		}
	}
</script>

<div
	class="text-field-container {disabled ? 'disabled' : ''}"
	style="width: {width};
			max-width:{maxWidth}; height: {height};"
>
	{#if label !== ''}
		<div style="margin-bottom: 4px"><label for={id}>{label}</label></div>
	{/if}
	<div class="text-field" style="width: {width}; max-width:{maxWidth}; height: {height}; {style}">
		{#if prefixText !== ''}
			<span style="margin-left: {iconLeftMargin};" class="prefix">{prefixText}</span>
		{:else if prefixSrc !== ''}
			<span style="margin-left: {iconLeftMargin};" class="prefix">
				<img src={prefixSrc} width={prefixSize} alt="prefix" />
			</span>
		{/if}
		{#if type == 'text'}
			<input
				bind:value
				{disabled}
				{id}
				on:blur
				on:click
				on:copy
				on:focus
				on:input
				on:keydown={(e) => {
					handleKeyDown(e);
				}}
				on:paste
				on:select
				on:submit
				{placeholder}
				type="text"
				style="padding: 14px 20px; {inputStyle}"
			/>
		{:else if type == 'email'}
			<input
				bind:value
				{disabled}
				{id}
				on:blur
				on:click
				on:copy
				on:focus
				on:input
				on:keydown={(e) => {
					handleKeyDown(e);
				}}
				on:paste
				on:select
				on:submit
				{placeholder}
				type="email"
				style="padding: 14px 20px; {inputStyle}"
			/>
		{:else if type == 'password'}
			<input
				bind:value
				{disabled}
				{id}
				on:blur
				on:click
				on:copy
				on:focus
				on:input
				on:keydown={(e) => {
					handleKeyDown(e);
				}}
				on:paste
				on:select
				on:submit
				{placeholder}
				type="password"
				style="padding: 14px 20px; {inputStyle}"
			/>
		{/if}
		{#if suffixText !== ''}
			<span style="margin-right: {iconRightMargin};" class="suffix">{suffixText}</span>
		{:else if suffixSrc !== ''}
			<span style="margin-right: {iconRightMargin};" class="suffix">
				<img src={suffixSrc} width={suffixSize} alt="suffix" />
			</span>
		{/if}
	</div>
</div>

<style>
	.text-field {
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: hidden;
		width: 213px;
		height: 40px;
		border: 1px solid #000000;
		border-radius: 10px;
		background-color: #ffffff;
		color: #000000;
		outline: none;
		box-shadow: 0px 1px 2px rgba(2, 0, 82, 0.05);
	}

	input[type='text'],
	input[type='email'],
	input[type='password'] {
		flex-grow: 1;
		width: 0;
		border: none;
		/*padding: 14px 20px;*/
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		background-color: #ffffff;
		outline: none;
	}

	.text-field:focus-within,
	.text-field:hover {
		border: 1px solid #ababab;
	}

	.disabled > .text-field {
		border: none;
	}

	input::placeholder {
		color: #dadada;
	}

	.disabled > label {
		color: #e3e3e3;
	}

	label {
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		color: #717171;
	}

	.prefix,
	.suffix {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		color: #717171;
	}
</style>
