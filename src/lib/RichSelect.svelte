<script lang="ts">
	import Input from '$lib/Input.svelte';
	import InputChevron from '$lib/icons/InputChevron.svelte';
	import { teleport } from './utils/teleport.js';
	import { clickOutside } from './scripts/clickOutside.js';
	import { Svroller } from 'svrollbar';
	import Check from './icons/Check.svelte';

	export let label: string = '';
	export let placeholder: string = '';
	export let hint: string = '';
	export let value: any = '';
	export let disabled = false;
	export let required: boolean = false;
	export let status:
		| 'enabled'
		| 'invalid'
		| 'success'
		| 'loading'
		| 'complete'
		| 'incomplete'
		| 'warning'
		| 'disabled' = 'enabled';

	type Option = { value: number | string; label: number | string };
	export let options: Option[] = [];

	let isOpen = false;
	let userInput = '';

	// Bind the wrapper element of the Input (which includes the padding)
	let wrapperElement: HTMLElement;

	let optionsFiltered: Option[] = [...options];

	function handleOpen() {
		isOpen = true;
		optionsFiltered = [...options];
	}

	function handleInput(e: Event) {
		console.log(userInput, value, 'sd');

		const target = e.target as HTMLInputElement;
		userInput = target.value;
		value = userInput;
		if (!userInput) {
			optionsFiltered = [...options];
		} else {
			optionsFiltered = options.filter((opt) =>
				String(opt.label).toLowerCase().includes(userInput.toLowerCase())
			);
		}
	}

	function selectOption(opt: Option) {
		value = opt.label;
		isOpen = false;
		userInput = '';
	}

	function getStyle() {
		if (!wrapperElement) return '';
		const rect = wrapperElement.getBoundingClientRect();
		const MAX_HEIGHT_OPTIONS = 210;
		const GAP = 5;
		return `
      position: fixed;
      top: ${rect.bottom + GAP}px;
      left: ${rect.left}px;
      width: ${rect.width}px;
      max-height: ${MAX_HEIGHT_OPTIONS}px;
    `;
	}
</script>

<!-- Wrap the Input component in a container we can reference -->
<div bind:this={wrapperElement}>
	<Input
		bind:value
		{label}
		{placeholder}
		{hint}
		{disabled}
		{required}
		{status}
		on:input={handleInput}
		on:focus={handleOpen}
		on:click={handleOpen}
	>
		<span slot="trail">
			<InputChevron />
		</span>
	</Input>
</div>

{#if isOpen && optionsFiltered.length > 0}
	<div
		use:teleport={'body'}
		use:clickOutside
		on:click_outside={() => (isOpen = false)}
		class="select-options"
		style={getStyle()}
	>
		<div class="select-options__wrapper">
			<Svroller width="100%" height="100%">
				{#each optionsFiltered as opt}
					<button class="select-options__item" type="button" on:click={() => selectOption(opt)}>
						{opt.label}
						<span>
							<Check />
						</span>
					</button>
				{/each}
			</Svroller>
		</div>
	</div>
{/if}

<style lang="scss">
	.select-options {
		background: var(--Layer-01, #fff);
		border-radius: 8px;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
		z-index: 1000;
		padding: 5px 0;
		transition: var(--transition-duration) var(--transition-timing-function);
		&__wrapper {
			max-height: 210px;
			overflow: auto;
		}
		&__item {
			width: 100%;
			padding: 10px 16px;
			font-size: 14px;
			text-align: left;
			background: var(--Layer-01);
			border: none;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;
			transition: background 0.2s;
			&:hover {
				background: var(--layer-01-hover);
			}
			span {
				display: none;
			}
			&.active {
				span {
					display: block;
				}
			}
		}
	}

	.input__chevron {
		transition: transform 0.2s;
	}
	/* Optionally, add a class to rotate the chevron when open */
	.open .input__chevron {
		transform: rotate(-180deg);
	}
</style>
