<script lang="ts">
	import InputComplete from '$lib/icons/InputComplete.svelte';
	import InputWarning from '$lib/icons/InputWarning.svelte';
	import LoadingDots from '$lib/icons/LoadingDots.svelte';
	import InputIncomplete from '$lib/icons/InputIncomplete.svelte';
	import { validator } from '@exodus/schemasafe';

	export let label: string = '';
	export let placeholder: string = '';
	export let type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';
	export let hint: string = '';
	export let lead: string | object | undefined = undefined;
	export let trail: string | object | undefined = undefined;
	export let value: string = '';
	export let disabled = false;
	export let status:
		| 'enabled'
		| 'invalid'
		| 'success'
		| 'loading'
		| 'complete'
		| 'incomplete'
		| 'warning'
		| 'disabled' = 'enabled';
	export let required = false;
	export let autocomplete = '';
	export let validationSchema: object | undefined;
	export let hasValidationError;

	let validateFn;
	$: if (validationSchema) {
		validateFn = validator(validationSchema);
	}

	export function handleValidate() {
		console.log('validate', hint);
		// Run validation on blur.
		console.log(value, validateFn(value));
		hasValidationError = !validateFn(value);
		return !hasValidationError; // Returns true if validation passes, false otherwise
	}
</script>

<label
	on:blur={handleValidate}
	class="input input--{status} {disabled ? 'disabled' : ''} {$$props.class}"
>
	{#if $$slots.label}
		<p class="input__label">
			<slot name="label" />
		</p>
	{:else}
		<p class="input__label">
			{label}
		</p>
	{/if}

	<div class="input__wrapper {status}">
		{#if $$slots.lead}
			<slot name="lead" />
		{:else if typeof lead === 'function' || typeof lead === 'object'}
			<span class="input__icon"><svelte:component this={lead} /></span>
		{:else if typeof lead === 'string'}
			<span class="input__lead">{lead}</span>
		{/if}
		<input
			class="input__input"
			{value}
			{disabled}
			{placeholder}
			{autocomplete}
			{type}
			{required}
			id={$$props.id}
			name={$$props.name}
			on:focus
			on:click
			on:input
			on:invalid
		/>
		{#if status === 'complete'}
			<InputComplete />
		{:else if status === 'warning'}
			<InputWarning />
		{:else if status === 'loading'}
			<LoadingDots />
		{:else if status === 'incomplete'}
			<InputIncomplete />
		{:else if $$slots.trail}
			<slot name="trail" />
		{:else if typeof trail === 'function' || typeof trail === 'object'}
			<span class="input__icon"><svelte:component this={trail} /></span>
		{:else if typeof trail === 'string'}
			<span class="input__trail">{trail}</span>
		{/if}
	</div>
	<p class="input__hint input__hint--{status}">
		{#if status === 'invalid'}
			{#if $$slots.invalid}
				<slot name="invalid" />
			{:else}
				<InputIncomplete size={16} /> You're doing it wrong!
			{/if}
		{:else if status === 'success'}
			{#if $$slots.success}
				<slot name="success" />
			{:else}
				<InputComplete size={16} /> Success!
			{/if}
		{:else if $$slots.hint}
			<slot name="hint" />
		{:else}
			{hint}
		{/if}
	</p>
</label>

<style lang="scss">
	input[data-autocompleted] {
		background-color: transparent !important;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:focus {
		transition:
			background-color 0s 0s,
			color 0s 0s;
		transition-delay: calc(infinity * 1s);
	}

	.input {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 100%;
		&__label {
			font-size: 12px;
			font-weight: 500;
			line-height: 16px;
			letter-spacing: 0.3px;
			color: var(--text-secondary);
		}
		&__input {
			width: 100%;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			letter-spacing: -0.1px;
			color: var(--text-primary);
			&:focus {
				outline: none;
			}
			&::placeholder {
				color: var(--text-placeholder);
			}
		}
		&__hint {
			font-size: 12px;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: 0.3px;
			color: var(--text-secondary);
			display: flex;
			gap: 5px;
			align-items: center;
			&--invalid {
				color: var(--support-error);
			}
			&--success {
				color: var(--support-success);
			}
		}
		&__wrapper {
			display: flex;
			padding: 10px 16px;
			gap: 15px;
			transition: var(--transition-duration) var(--transition-timing-function);
			outline: 1px solid var(--border-default);
			border-radius: 8px;
			:global(svg) {
				min-width: 20px;
				min-height: 20px;
			}
		}
		&__icon {
			color: var(--icon-secondary);
		}
		&__lead,
		&__trail {
			font-size: 14px;
			font-weight: 600;
			line-height: 20px;
			letter-spacing: -0.1px;
			color: var(--text-secondary);
		}
		&.disabled {
			&__label,
			&__hint {
				color: var(--text-disabled);
			}
			&__wrapper {
				border-color: var(--border-disabled);
				background-color: var(--layer-disabled);
			}
			&__input {
				background-color: transparent;
				color: var(--text-on-color-disabled);
			}
			&__lead,
			&__trail {
				color: var(--text-on-color-disabled);
			}
			&__icon {
				color: var(--icon-on-color-disabled);
			}
		}
		&:focus-within {
			.input__wrapper {
				outline-color: var(--border-selected);
			}
			.input__chevron {
				transform: rotate(-180deg);
			}
		}
		&--invalid .input__wrapper {
			outline-color: var(--support-error);
		}
		&--success .input__wrapper {
			outline-color: var(--support-success);
		}
	}
</style>
