<script lang="ts">
	import { teleport } from './utils/teleport.js';
	import { onMount } from 'svelte';
	import { Svroller } from 'svrollbar'
	import { clickOutside } from './scripts/clickOutside';

	import InputLoading from './icons/InputLoading.svelte';
	import InputComplete from './icons/InputComplete.svelte';
	import InputIncomplete from './icons/InputIncomplete.svelte';
	import InputWarning from './icons/InputWarning.svelte';
	import InputChevron from './icons/InputChevron.svelte';
	import Check from './icons/Check.svelte';

	export let label: String = '';
	export let placeholder: String = '';
	export let type: String = 'text';
	export let hint: String = '';
	export let lead: String | Object | Function | undefined = undefined;
	export let trail: String | Object | Function | undefined = undefined;
	export let value: String = '';
	export let disabled = false;
	export let status: 'enabled' | 'error' | 'success' | 'loading' | 'complete' | 'incomplete' | 'warning' | 'disabled' = 'enabled';
	export let options: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const MAX_HEIGHT_OPTIONS = 210
	const GAP_BETWEEN_OPTIONS_AND_INPUT = 5

	let isOpen = false 
	let input: any = null
	let optionsFiltered = options
	let lastSelect = ''

	function handleInput(e) {
		value = e.target.value
		filterOptions(e)
	}

	function handleClick(e) {
		isOpen = false
		if(lastSelect === e) {
			value = ''
			lastSelect = ''
		} else {
			value = e
			lastSelect = e
		}
	}

	function handleOpen(e) {
		isOpen = true
		filterOptions(e)
	}

	function filterOptions(e) {
		optionsFiltered = options.filter((option) => String(option)?.toLowerCase().includes(e.target.value?.toLowerCase()))
	}

	const getStyle = () => {
		const rect = input.getBoundingClientRect();
		let body = document.body,
				html = document.documentElement;
		let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		
		console.log(height)
		if (rect.y + rect.height + window.scrollY + MAX_HEIGHT_OPTIONS + GAP_BETWEEN_OPTIONS_AND_INPUT > height) {
			return `
				bottom: ${height - rect.y - window.scrollY + GAP_BETWEEN_OPTIONS_AND_INPUT}px;
				left: ${rect.x}px;
				width: ${rect.width}px;
				max-height: ${MAX_HEIGHT_OPTIONS}px;
			`
		}
		return `
			top: ${rect.y + rect.height + window.scrollY + GAP_BETWEEN_OPTIONS_AND_INPUT}px; 
			left: ${rect.x}px; 
			width: ${rect.width}px; 
			max-height: ${MAX_HEIGHT_OPTIONS}px;
		`
	}
</script>

<label class='input input--{status} {disabled ? 'disabled' : ''}' on:click={handleOpen}>
	<p class="input__label">
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			{label}
		{/if}
	</p>
	<div class="input__wrapper" bind:this={input}>
		{#if $$slots.lead}
			<slot name="lead" />
		{:else if typeof lead === 'function' || typeof lead === 'object'}
			<span class="input__icon"><svelte:component this={lead} /></span>
		{:else if typeof lead === 'string'}
			<span class="input__lead">{lead}</span>
		{/if}

		<input class="input__input" {value} {type} {disabled} {placeholder} on:input={handleInput} on:focus={handleOpen}/>
		
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
		
		<span class="input__chevron">
			<InputChevron />
		</span>
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

<div use:teleport={'body'} use:clickOutside on:click_outside={() => isOpen = false} class="input-options" class:input-options--open={isOpen && optionsFiltered.length > 0} style={isOpen ? getStyle() : 'width: 0; height: 0; opacity: 0'}>
	<div class="input-options__wrapper">
		<Svroller width="100%" height="100%">
		{#each optionsFiltered as item}
				<button class="input-options__item" type="button" class:input-options__item--active={item === lastSelect} on:click={() => handleClick(item)}>
					{item}
					<span>
						<Check />
					</span>
				</button>
			{/each}
		</Svroller>
	</div>
</div>

<style lang="scss">
	.input-options {
		--svrollbar-track-width: 4px;
		--svrollbar-thumb-width: 4px;
		--svrollbar-thumb-radius: 4px;
		--svrollbar-thumb-opacity: 1;
		--svrollbar-thumb-background: var(--icon-secondary);

		position: absolute;
		display: grid;
		overflow: auto;
		background: #000;
		border-radius: 8px;
		background: var(--Layer-01, #FFF);
		grid-template-rows: 0fr;
		pointer-events: none;
		transition: var(--transition-duration) var(--transition-timing-function), width 0s, top 0s, left 0s, bottom 0s, right 0s;
		&__wrapper {
			overflow: hidden;
			display: flex;
			height: 100%;
			flex-direction: column;
			&::-webkit-scrollbar {
				width: 0;
			}
		}
		&__item {
			display: flex;
			align-items: flex-start;
			padding: 10px 16px;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			width: 100%;
			letter-spacing: -0.1px;
			justify-content: space-between;
			gap: 15px;
			color: var(--text-secondary);
			background: var(--Layer-01);
			transition: var(--transition-duration) var(--transition-timing-function);
			span {
				display: none;
			}
			@media (hover: hover) {
				&:hover {
					background: var(--layer-01-hover);
				}
			}
			&--active {
				color: var(--text-primary);
				span {
					display: block;
					color: var(--icon-secondary);
				}
			}
		}
		&--open {
			pointer-events: all;
			box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.12);
			padding: 5px 0px;
			grid-template-rows: 1fr;
			.input-options__wrapper {
				overflow: auto;
			}
		}
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
		&__chevron {
			transition: var(--transition-duration) var(--transition-timing-function);
			color: var(--icon-secondary);
			pointer-events: none;
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
			.input__chevron {
				transform: rotate(-180deg);
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