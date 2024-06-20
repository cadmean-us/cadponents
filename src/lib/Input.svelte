<script lang="ts">
	import InputLoading from './icons/InputLoading.svelte';
	import InputComplete from './icons/InputComplete.svelte';
	import InputIncomplete from './icons/InputIncomplete.svelte';
	import InputWarning from './icons/InputWarning.svelte';

	export let label: String = '';
	export let placeholder: String = '';
	export let type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';
	export let hint: String = '';
	export let lead: String | Object | Function | undefined = undefined;
	export let trail: String | Object | Function | undefined = undefined;
	export let value: String = '';
	export let disabled = false;
	export let status: 'enabled' | 'error' | 'success' | 'loading' | 'complete' | 'incomplete' | 'warning' | 'disabled' = 'enabled';

	const handleInput = (e) => {
		value = e.target.value
	}
</script>

<label class='input input--{status} {disabled ? 'disabled' : ''}'>
	<p class="input__label">
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			{label}
		{/if}
	</p>
	<div class="input__wrapper">
		{#if $$slots.lead}
			<slot name="lead" />
		{:else if typeof lead === 'function' || typeof lead === 'object'}
			<span class="input__icon"><svelte:component this={lead} /></span>
		{:else if typeof lead === 'string'}
			<span class="input__lead">{lead}</span>
		{/if}
		<input class="input__input" {value} {type} {disabled} {placeholder} on:input={handleInput} />
		{#if status === 'complete'}
			<InputComplete/>
		{:else if status === 'warning'}
			<InputWarning/>
		{:else if status === 'loading'}
			<InputLoading/>
		{:else if status === 'incomplete'}
			<InputIncomplete/>
		{:else if $$slots.trail}
			<slot name="trail" />
		{:else if typeof trail === 'function' || typeof trail === 'object'}
			<span class="input__icon"><svelte:component this={trail} /></span>
		{:else if typeof trail === 'string'}
			<span class="input__trail">{trail}</span>
		{/if}
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
			&--error {
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
			border: 1px solid var(--border-default);
			border-radius: 8px;
			:global(svg) {
				min-width: 20px;
				min-height: 20px;
			}
		}
		&__icon {
			color: var(--icon-secondary);
		}
		&__lead, &__trail {
			font-size: 14px;
			font-weight: 600;
			line-height: 20px;
			letter-spacing: -0.1px;
			color: var(--text-secondary);
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