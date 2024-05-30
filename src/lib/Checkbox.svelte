<script lang="ts">
	import Check from '$lib/icons/Check.svelte';
	export let checked: Boolean = false;
	export let name: String = '';
	export let disabled = false;
</script>

<label {...$$restProps} class="checkbox">
	<input class="checkbox__input" type="checkbox" bind:checked name={name} disabled={disabled} />
	<span class="checkbox__box">
		<Check size="16"/>
	</span>
	<p class="checkbox__text">
		<slot />
		<span  class="checkbox__description">
			<slot name="description" />
		</span>
	</p>
</label>

<style lang="scss">
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
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 18px;
			height: 18px;
			border-radius: 4px;
			border: 2px solid var(--icon-secondary);
		}
		:global(svg) {
			position: absolute;
			top: 50%;
			left: 50%;
			opacity: 0;
			color: var(--icon-accent);
			transition: var(--transition-duration) var(--transition-timing-function);	
			transform: translate(-50%, -50%);
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
			.checkbox__input:not(:disabled) ~ .checkbox__text  {
				color: var(--text-secondary);
			}
		}
	}
}
</style>