<script lang="ts">
	import { teleport } from '../../utils/teleport';
	import { onMount } from 'svelte';
	import { Svroller } from 'svrollbar';
	import { clickOutside } from '../../scripts/clickOutside';

	export let label: string = '';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let hint: string = '';
	export let lead: string | Object | Function | undefined = undefined;
	export let trail: string | Object | Function | undefined = undefined;
	export let value: string = '';
	export let disabled = false;
	export let status:
		| 'enabled'
		| 'error'
		| 'success'
		| 'loading'
		| 'complete'
		| 'incomplete'
		| 'warning'
		| 'disabled' = 'enabled';
	export let options: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	export let hiddenChevron: boolean = false;
	export let required: boolean = false;

	const MAX_HEIGHT_OPTIONS = 210;
	const GAP_BETWEEN_OPTIONS_AND_INPUT = 5;

	let isOpen = false;
	let input: any = null;
	let inputField: any = null;
	let optionsComputed = options.map((option) =>
		option instanceof Object
			? { label: option.label, value: option.value }
			: { label: option, value: option }
	);
	let optionsFiltered = optionsComputed;
	let lastSelect = { label: '', value: '' };
	let focusedIndex = 0;
	function handleInput(e: Event) {
		value = (e.target as HTMLInputElement).value;
		focusedIndex = 0;
		filterOptions(e);
	}

	function handleClick(e: any) {
		isOpen = false;
		if (lastSelect === e) {
			value = '';
			lastSelect = { label: '', value: '' };
		} else {
			value = e.label;
			lastSelect = e;
		}
		inputField.value = value;
		inputField.dispatchEvent(new Event('input', { bubbles: true }));
	}

	function handleOpen(e: Event) {
		isOpen = true;
		filterOptions(e);
	}

	function filterOptions(e: Event) {
		optionsFiltered = optionsComputed.filter((option) =>
			String(option.label)
				.toLowerCase()
				.includes((e.target as HTMLInputElement).value.toLowerCase())
		);
	}

	function handleClickOutside() {
		isOpen = false;
		if (optionsComputed.find((element) => element.label === value)) {
			lastSelect = optionsComputed.find((element) => element.label === value);
		}
		value = lastSelect.label;
	}

	const getStyle = () => {
		const rect = input.getBoundingClientRect();
		let body = document.body,
			html = document.documentElement;
		let height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);

		console.log(height);
		if (
			rect.y + rect.height + window.scrollY + MAX_HEIGHT_OPTIONS + GAP_BETWEEN_OPTIONS_AND_INPUT >
			height
		) {
			return `
				bottom: ${height - rect.y - window.scrollY + GAP_BETWEEN_OPTIONS_AND_INPUT}px;
				left: ${rect.x}px;
				width: ${rect.width}px;
				max-height: ${MAX_HEIGHT_OPTIONS}px;
			`;
		}
		return `
			top: ${rect.y + rect.height + window.scrollY + GAP_BETWEEN_OPTIONS_AND_INPUT}px;
			left: ${rect.x}px;
			width: ${rect.width}px;
			max-height: ${MAX_HEIGHT_OPTIONS}px;
		`;
	};
</script>

<label class="input input--{status} {disabled ? 'disabled' : ''} {$$props.class}">
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
		{:else if typeof lead === 'string'}
			{#if lead.indexOf('ci') !== -1}
				<i class="input__icon {lead}"></i>
			{:else}
				<span class="input__lead">{lead}</span>
			{/if}
		{/if}

		<input
			class="input__input"
			bind:this={inputField}
			{required}
			{value}
			{type}
			{disabled}
			{placeholder}
			id={$$props.id}
			name={$$props.name || $$props.id}
			on:input={handleInput}
			on:click={handleOpen}
		/>

		{#if status === 'complete'}
			<i class="input__icon input__icon--success ci-Circle_Check"></i>
		{:else if status === 'warning'}
			<i class="input__icon input__icon--warning ci-Triangle_Warning"></i>
		{:else if status === 'loading'}
			<i class="input__icon ci-Loading"></i>
		{:else if status === 'incomplete'}
			<i class="input__icon input__icon--incomplete ci-Circle_Warning"></i>
		{:else if $$slots.trail}
			<slot name="trail" />
		{:else if typeof trail === 'string'}
			{#if trail.indexOf('ci') !== -1}
				<i class="input__icon {trail}"></i>
			{:else}
				<span class="input__trail">{trail}</span>
			{/if}
		{/if}

		{#if !hiddenChevron}
			<span class="input__chevron">
				<i class="input__icon ci-Chevron_Down"></i>
			</span>
		{/if}
	</div>
	<p class="input__hint input__hint--{status}">
		{#if status === 'error'}
			{#if $$slots.error}
				<slot name="error" />
			{:else}
				<i class="input__icon input__icon--incomplete ci-Circle_Warning" style="font-size: 16px;"
				></i> You're doing it wrong!
			{/if}
		{:else if status === 'success'}
			{#if $$slots.success}
				<slot name="success" />
			{:else}
				<i class="input__icon input__icon--success ci-Circle_Check" style="font-size: 16px;"></i> Success
			{/if}
		{:else if $$slots.hint}
			<slot name="hint" />
		{:else}
			{hint}
		{/if}
	</p>
</label>

<div
	use:teleport={'body'}
	use:clickOutside
	on:clickOutside={() => handleClickOutside()}
	class="input-options"
	class:input-options--open={isOpen && optionsFiltered.length > 0}
	style={isOpen ? getStyle() : 'width: 0; height: 0; opacity: 0'}
>
	<div class="input-options__wrapper">
		<Svroller width="100%" height="100%">
			{#each optionsFiltered as item}
				<button
					class="input-options__item"
					type="button"
					class:input-options__item--active={item.value === lastSelect.value}
					on:click={() => handleClick(item)}
				>
					{item.label}
					<span>
						<i class="input__icon ci-Check"></i>
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
		background: var(--Layer-01, #fff);
		grid-template-rows: 0fr;
		pointer-events: none;
		transition:
			var(--transition-duration) var(--transition-timing-function),
			width 0s,
			top 0s,
			left 0s,
			bottom 0s,
			right 0s;
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
			border-radius: 2px;
			:global(svg) {
				min-width: 20px;
				min-height: 20px;
			}
			&:has(.input__input.invalid) {
				border-color: var(--support-error);
			}
		}
		&__icon {
			color: var(--icon-secondary);
			&--incomplete {
				color: var(--support-error);
			}
			&--success {
				color: var(--support-success);
			}
			&--warning {
				color: var(--support-warning);
			}
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
			.input {
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
