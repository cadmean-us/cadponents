<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = '';
	export let placeholder = '';
	export let label = '';
	export let helperText = '';
	export let labelStyle = '';
	export let helperStyle = '';
	export let disabled = false;

	let dispatch = createEventDispatcher();

	let defaultClass = 'flex w-fit flex-col ';
	let defaultInputClass = 'flex w-fit items-center input-box px-[20px] py-[14px] ';

	function handleKeyDown(e: any) {
		dispatch('keydown', e);
		if (e.code == 'Enter') {
			dispatch('enter', e);
		}
	}
</script>

<div class={defaultClass + (disabled ? 'disabled' : '') + ($$props.class ?? '')}>
	{#if label !== ''}
		<label class="input-label text-secondary mb-1" style={labelStyle}>{label}</label>
	{/if}

	<div class={defaultInputClass + ($$props.class ?? '')}>
		{#if $$slots['prefix']}
			<div class="mr-3">
				<slot name="prefix" />
			</div>
		{/if}
		<input
			bind:value
			{disabled}
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
		/>
		{#if $$slots['suffix']}
			<div class="ml-3">
				<slot name="suffix" />
			</div>
		{/if}
	</div>
	{#if helperText !== ''}
		<label class="input-helper text-secondary mt-1" style={helperStyle}>{helperText}</label>
	{/if}
</div>

<style>
	.input-box {
		display: flex;
		align-items: center;
		background: #fff;
		outline: 1px solid #d7d7d7;
		border-radius: 8px;
		overflow: hidden;
	}

	.input-box input {
		flex-grow: 1;
		background: transparent;
		border: none;
		outline: none;
	}

	.input-box:focus-within {
		border-color: #192c6a;
	}

	.input-label {
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.3px;
	}

	.input-helper {
		font-style: normal;
		font-weight: 400;
		font-size: 10px;
		line-height: 12px;
		letter-spacing: 0.3px;
	}
</style>
