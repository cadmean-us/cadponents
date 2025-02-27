<script lang="ts">
	import InputLoading from './icons/InputLoading.svelte';
	import InputComplete from './icons/InputComplete.svelte';
	import InputIncomplete from './icons/InputIncomplete.svelte';
	import InputClear from './icons/InputClear.svelte';

	export let label: String = '';
	export let placeholder: String = '';
	export let hint: String = '';
	export let value: String = '';
	export let disabled = false;
	export let status: 'enabled' | 'error' | 'success' | 'loading' | 'disabled' = 'enabled';
	export let maxlength: number = 100;
	
	const establishedStatus = status
	
	const handleInput = (e) => {
		value = e.target.value
		if(value.length > maxlength) {
			status = 'error'
		} else {
			status = establishedStatus
		}
	}
</script>

<label class="input input--{status} {disabled ? 'disabled' : ''} {$$props.class}">
	<p class="input__label">
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			{label}
		{/if}
		<span class="input__max">{value.length}/{maxlength}</span>
	</p>
	<div class="input__wrapper">
		<textarea class="input__input" {value} on:input={handleInput} {disabled} {placeholder} ></textarea>
		<div class="input__controls">
			{#if status === 'loading'}
				<InputLoading/>
			{:else if value.length > 0}
				<button on:click={() => value = ''}><InputClear/></button>
			{/if}
		</div>
	</div>
	<p class="input__hint input__hint--{status}">
		{#if status === 'error'}
			{#if $$slots.error}
				<slot name="error" />
			{:else}
				<InputIncomplete size="16"/> You're doing it wrong!
			{/if}
		{:else if status === 'success'}
			{#if $$slots.success}
				<slot name="success" />
			{:else}
				<InputComplete size="16"/> Success!
			{/if}
		{:else if $$slots.hint}
			<slot name="hint" />
		{:else}
			{hint}
		{/if}
	</p>
</label>

<style lang="scss">
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
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__input {
			width: 100%;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			letter-spacing: -0.1px;
			resize: none;
			height: 100%;
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
			&--error {
				color: var(--support-error);
			}
			&--success {
				color: var(--support-success);
			}
		}
		&__wrapper {
			display: flex;
			padding: 10px 10px 5px 16px;
			resize: both;
			min-height: 55px;
			min-width: 250px;
			overflow: auto;
			gap: 15px;
			transition: var(--transition-duration) var(--transition-timing-function), width 0s, height 0s;
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
		&.disabled {
			.input {
				&__label, &__hint {
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
				&__lead, &__trail {
					color: var(--text-on-color-disabled);
				}
				&__icon {
					color: var(--icon-on-color-disabled);
				}
			}
		}
		&:focus-within {
			.input__wrapper {
				border-color: var(--border-selected);
			}
		}
		&--error:focus-within {
			.input__wrapper {
				border-color: var(--support-error);
			}
		}
		&--success:focus-within {
			.input__wrapper {
				border-color: var(--support-success);
			}
		}
	}
</style>