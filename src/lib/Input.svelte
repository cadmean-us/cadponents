<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = '';
	export let id = '';
	export let placeholder = '';
	export let type = 'text';
	export let label = '';
	export let labelStyle = '';
	export let disabled = false;
	export let width = '100%';
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
	class={disabled ? 'disabled' : ''}
	style="width: {width}; max-width:{maxWidth}; height: {height};"
>
	{#if label !== ''}
		<label style={labelStyle} for={id}>{label}</label>
		<div class="h-[4px]" />
	{/if}
	{#if prefixText !== ''}
		<span style="margin-left: {iconLeftMargin};" class="prefix">{prefixText}</span>
	{:else if prefixSrc !== ''}
		<span style="margin-left: {iconLeftMargin};" class="prefix">
			<img src={prefixSrc} width={prefixSize} alt="prefix" />
		</span>
	{/if}
	{#if type === 'text'}
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
	{:else if type === 'email'}
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
	{:else if type === 'password'}
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

<style>
	input[type='text'],
	input[type='email'],
	input[type='password'] {
		font-family: 'Inter';
		flex-grow: 1;
		color: #000000;
		background-color: #ffffff;
		outline: none;
		padding: 14px 20px;
		border: 1px solid #f0f0f0;
		border-radius: 8px;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: -0.6px;
		width: 100%;
		height: 52px;
		box-sizing: border-box;
		transition: 0.3s;
	}

	input:focus-within,
	input:hover {
		border: 1px solid #ababab;
	}

	label {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.3px;
		color: #717171;
	}

	.disabled > input {
		color: #e3e3e3;
		border: 1px solid #f2f2f2;
	}

	input::placeholder {
		color: #dadada;
	}

	.disabled > label {
		color: #e3e3e3;
	}

	.prefix,
	.suffix {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		color: #717171;
	}
</style>
