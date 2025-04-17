<script lang="ts">
	import Input from '$lib/Input.svelte';
	import InputChevron from '$lib/icons/InputChevron.svelte';
	import { clickOutside } from './scripts/clickOutside.js';
	import Check from './icons/Check.svelte';
	import createPopperAction from '$lib/utils/usePopper.js';
	import SimpleBar from '@woden/svelte-simplebar';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	// Define a common Option type. When options are simple (strings/numbers)
	// they are converted into this shape.
	type Option = { value: number | string; label: number | string; originalIndex?: number };

	// Props
	export let label: string = '';
	export let allOptionText: string = 'All';
	// Accept either Option objects or a simple array of strings/numbers.
	export let options: Option[] | (string | number)[] = [];
	export let placeholder: string = '';
	// This value represents what is currently displayed (the input value).
	export let inputValue: any = '';
	export let disabled = false;
	// For single selection, this is a value/object; for multiple, this should be an array.
	export let selected: Option | string | number | (Option | string | number)[] | undefined =
		undefined;
	export let status:
		| 'enabled'
		| 'invalid'
		| 'success'
		| 'loading'
		| 'complete'
		| 'incomplete'
		| 'warning'
		| 'disabled' = 'enabled';
	export let hint: string = '';
	export let validate: boolean = false;
	export let fontSize: string = '12px';
	// multiple selection mode; for single selection leave false.
	export let multiple: boolean = false;
	// Additional custom class(es) for the input element.
	export let inputClass = '';

	const dispatch = createEventDispatcher();

	// Convert the passed options into a unified Option[] array.
	const parsedOptions: Option[] =
		Array.isArray(options) &&
		options.length > 0 &&
		(typeof options[0] === 'string' || typeof options[0] === 'number')
			? (options as (string | number)[]).map((opt, i) => ({
					value: opt,
					label: opt,
					originalIndex: i
				}))
			: (options as Option[]).map((opt, i) => ({ ...opt, originalIndex: i }));

	// Determine if our options are simple (string/number) types.
	const isSimpleOptions =
		parsedOptions.length > 0 &&
		parsedOptions.every((opt) => typeof opt.label === 'string' || typeof opt.label === 'number');

	// Local state
	let isOpen = false;
	let userInput = '';
	// When the dropdown first opens or when filtering, start with all parsed options.
	let optionsFiltered: Option[] = [...parsedOptions];

	// When multiple is enabled, sort options so that those that are currently selected appear on top.
	$: sortedOptions = multiple
		? optionsFiltered.slice().sort((a, b) => {
				const aSelected =
					Array.isArray(selected) &&
					(selected as (Option | string | number)[]).some((item) =>
						typeof item === 'object' ? item.value === a.value : item === a.label
					);
				const bSelected =
					Array.isArray(selected) &&
					(selected as (Option | string | number)[]).some((item) =>
						typeof item === 'object' ? item.value === b.value : item === b.label
					);
				if (aSelected === bSelected) {
					// Preserve original order.
					return (a.originalIndex ?? 0) - (b.originalIndex ?? 0);
				}
				return aSelected ? -1 : 1;
			})
		: optionsFiltered;

	// When not actively typing, update the displayed input value from the selected value.
	$: if (!userInput) {
		if (multiple) {
			const count = Array.isArray(selected) ? selected.length : 0;
			inputValue = count > 0 ? `${placeholder} (${count})` : '';
		} else {
			if (selected !== undefined && selected !== null) {
				inputValue = typeof selected === 'object' ? String(selected.label) : String(selected);
			}
		}
	}

	// For multiple selection, compute an array of booleans for each option in sortedOptions.
	$: selectedStates = sortedOptions.map((opt) => {
		if (multiple) {
			return (
				Array.isArray(selected) &&
				(selected as (Option | string | number)[]).some((item) =>
					typeof item === 'object' ? item.value === opt.value : item === opt.label
				)
			);
		} else {
			return (
				selected !== undefined &&
				selected !== null &&
				(typeof selected === 'object' ? selected.value === opt.value : selected === opt.label)
			);
		}
	});

	// Open the dropdown and reset the filtered list.
	function handleOpen() {
		isOpen = true;
		optionsFiltered = [...parsedOptions];
	}

	// Filter options based on user input.
	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		userInput = target.value;
		inputValue = userInput;
		if (!userInput) {
			optionsFiltered = [...parsedOptions];
		} else {
			optionsFiltered = parsedOptions.filter((opt) =>
				String(opt.label).toLowerCase().includes(userInput.toLowerCase())
			);
		}
	}

	// When an option is selected.
	function selectOption(opt: Option) {
		if (multiple) {
			if (!Array.isArray(selected)) {
				selected = [];
			}
			const index = (selected as (Option | string | number)[]).findIndex((item) =>
				typeof item === 'object' ? item.value === opt.value : item === opt.label
			);
			if (index > -1) {
				// If already selected, remove it.
				(selected as (Option | string | number)[]).splice(index, 1);
			} else {
				// Otherwise, add it.
				(selected as (Option | string | number)[]).push(isSimpleOptions ? opt.label : opt);
			}
			const count = (selected as (Option | string | number)[]).length;
			if (count === 0) {
				selected = undefined;
				inputValue = '';
			} else {
				// Force reactivity.
				selected = [...(selected as (Option | string | number)[])];
				inputValue = `${placeholder} (${count})`;
			}
			handleValidate();
			// For multiple selection, leave the dropdown open.
		} else {
			inputValue = String(opt.label);
			selected = isSimpleOptions ? opt.label : opt;
			handleValidate();
			isOpen = false;
			userInput = '';
		}
		dispatch('select', { selected });
	}

	// Basic validation: if validate is true, mark error if nothing is selected.
	export function handleValidate() {
		if (!validate) return;
		if (multiple) {
			error = !selected;
		} else {
			error = selected === null || selected === undefined;
		}
	}

	// Reset the selection to a default state.
	function selectDefault() {
		inputValue = '';
		selected = multiple ? undefined : undefined;
		isOpen = false;
		userInput = '';
		dispatch('defaultSelected');
	}

	let error = false;

	// Create popper actions for the reference input and dropdown.
	const [popperElement, popperTooltip] = createPopperAction();
</script>

<!-- The input acting as the reference element for Popper -->
<div
	class="select-input"
	use:popperElement
	style="--font-size: {fontSize}; font-size: var(--font-size);"
>
	<Input
		bind:value={inputValue}
		{label}
		{placeholder}
		{disabled}
		on:input={handleInput}
		on:focus={handleOpen}
		on:click={handleOpen}
		{hint}
		{status}
		class={inputClass}
	>
		<span slot="trail">
			<InputChevron />
		</span>
	</Input>
</div>

{#if error}
	<div class="error">{hint}</div>
{/if}

{#if isOpen && sortedOptions.length > 0}
	<!-- The dropdown uses the popperTooltip action with custom modifiers -->
	<div
		transition:fade={{ duration: 100 }}
		use:popperTooltip={{
			modifiers: [
				{
					name: 'sameWidth',
					enabled: true,
					phase: 'beforeWrite',
					requires: ['computeStyles'],
					fn({ state }) {
						state.styles.popper.width = `${state.rects.reference.width}px`;
					},
					effect({ state }) {
						state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
					}
				},
				{
					name: 'offset',
					options: {
						offset: [0, 5]
					}
				}
			]
		}}
		use:clickOutside
		on:click_outside={() => (isOpen = false)}
		class="select-options"
		style="--font-size: {fontSize}; font-size: var(--font-size);"
	>
		<div class="select-options__wrapper">
			<SimpleBar
				style="width:100%; height: fit-content; max-height: 210px"
				forceVisible={true}
				autoHide={false}
			>
				{#if multiple}
					<button class="select-options__item" type="button" on:click={selectDefault}>
						{allOptionText}
					</button>
				{/if}

				<!-- Render each filtered (and sorted) option -->
				{#each sortedOptions as opt, index}
					<button
						class="select-options__item {multiple && selectedStates[index] ? 'selected' : ''}"
						type="button"
						on:click={() => selectOption(opt)}
					>
						{opt.label}
						{#if selectedStates[index]}
							<Check />
						{/if}
					</button>
				{/each}
			</SimpleBar>
		</div>
	</div>
{/if}

<style lang="scss">
	/* This rule applies only within the select-options__wrapper in this component */
	.select-options__wrapper :global(.simplebar-scrollbar)::before {
		min-height: 32px;
		background-color: var(--icon-secondary);
	}

	.select-options {
		background: var(--Layer-01, #fff);
		border-radius: 8px;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
		padding: 5px 0;
		&__wrapper {
			max-height: 210px;
			overflow: auto;
		}
		&__item {
			color: black;
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
		}
	}

	.error {
		color: red;
		font-size: 12px;
	}
</style>
