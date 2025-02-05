<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let options: any[] = [];
	export let selected = options[0].value;
</script>

<div {...$$restProps} class="radios">
	{#each options as option}
		<label class="radio">
			<input class="radio__input" type="radio" bind:group={selected} value={option?.value || option} name={option.name || ''} disabled={option.disabled || false} />
			<span class="radio__box">
			</span>
			<p class="radio__text">
				{option.text}
				{#if option.description}
					<span  class="radio__description">
						{option.description}
					</span>
				{/if}
			</p>
		</label>
	{/each}
</div>

<style lang="scss">
.radios {
	display: flex;
	gap: 8px;
}
.radio {
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
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 18px;
			height: 18px;
			border-radius: 4px;
			border-radius: 50%;
      outline: 2px solid var(--icon-secondary);
			transition: var(--transition-duration) var(--transition-timing-function);
		}
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 8px;
			height: 8px;
			border-radius: 50%;
			opacity: 0;
      outline: 2px solid var(--icon-accent);
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
		.radio__description {
			color: var(--text-disabled);
		}
	}
	&__input:checked + &__box {
		&::before {
			border-color: var(--icon-accent);
		}
		&::after {
			opacity: 1;
		}
	}

	@media (hover: hover) {
		&:hover {
			.radio__input:not(:disabled) ~ .radio__text  {
				color: var(--text-secondary);
			}
		}
	}
}
</style>