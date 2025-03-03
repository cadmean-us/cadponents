<script lang="ts">
	import Check from '$lib/icons/Check.svelte';

	export let options: any[] = [];
	export let selected = [];
	export let variant: 'ROW' | 'COLUMN' = 'COLUMN';
	export let label: string = '';
	export let result: 'value' | 'text' = 'value';
</script>

<div {...$$restProps} class="checkboxes">
	{#if $$slots.label}
		<slot name="label" />
	{:else if label}
		<p class="checkboxes__label">{label}</p>
	{/if}
	<div
		class="checkboxes__container {variant === 'ROW'
			? 'checkboxes__container--row'
			: 'checkboxes__container--column'}"
	>
		{#each options as option}
			<label class="checkbox">
				<input
					class="checkbox__input"
					type="checkbox"
					bind:group={selected}
					value={option[result]}
					name={$$props.name}
					id={$$props.id}
					disabled={option.disabled || false}
				/>
				<span class="checkbox__box">
					<Check size={16} />
				</span>
				<p class="checkbox__text">
					{option.text}
					{#if option.description}
						<span class="checkbox__description">
							{option.description}
						</span>
					{/if}
				</p>
			</label>
		{/each}
	</div>
</div>

<style lang="scss">
	.checkboxes {
		display: flex;
		gap: 10px;
		flex-direction: column;
		&__label {
			color: var(--text-secondary, #838d95);
			font-size: 14px;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: 0.3px;
		}
		&__container {
			display: flex;
			gap: 8px;
			&--row {
				flex-direction: row;
			}
			&--column {
				flex-direction: column;
			}
		}
	}
	.checkbox {
		display: flex;
		position: relative;
		gap: 10px;
		cursor: pointer;
		&__input {
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			height: 0;
			width: 0;
		}
		&__text {
			font-size: 14px;
			line-height: 20px;
			letter-spacing: -0.1px;
			display: flex;
			flex-direction: column;
			user-select: none;
			margin: auto 0;
			color: var(--text-primary);
			transition: var(--transition-duration) var(--transition-timing-function);
		}
		&__description {
			font-size: 12px;
			line-height: 16px;
			letter-spacing: 0.3px;
			user-select: none;
			color: var(--text-secondary);
		}
		&__box {
			position: relative;
			width: 24px;
			height: 24px;
			min-height: 24px;
			min-width: 24px;

			:global(svg) {
				opacity: 0;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: var(--icon-accent);
				transition: var(--transition-duration) var(--transition-timing-function);
			}
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 14px;
				height: 14px;
				border-radius: 1px;
				border: 2px solid var(--icon-secondary);
				transition: var(--transition-duration) var(--transition-timing-function);
			}
		}
		&__input:disabled + &__box {
			&::before {
				border-color: var(--icon-disabled);
			}
		}
		&__input:disabled ~ &__text {
			color: var(--text-disabled);
			.checkbox__description {
				color: var(--text-disabled);
			}
		}
		&__input:checked + &__box {
			&::before {
				border-color: var(--icon-accent);
			}
			:global(svg) {
				opacity: 1;
			}
		}

		@media (hover: hover) {
			&:hover {
				.checkbox__input:not(:disabled) ~ .checkbox__text {
					color: var(--text-secondary);
				}
			}
		}
	}
</style>
