<script lang="ts">
	import Check from '$lib/icons/Check.svelte';
	import Cross from '$lib/icons/Cross.svelte';
	export let checked: boolean = false;
	export let disabled = false;
</script>

<label {...$$restProps} class="checkbox {$$props.class}">
	<input
		class="checkbox__input"
		type="checkbox"
		id={$$props.id}
		name={$$props.name}
		bind:checked
		{disabled}
	/>
	<p class="checkbox__text">Off</p>
	<span class="checkbox__box">
		<div class="checkbox__box-inner">
			<Check size="16" />
			<Cross size="16" />
		</div>
	</span>
	<p class="checkbox__text">On</p>
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
			width: 40px;
			height: 20px;
			margin: 2px;
			min-height: 20px;
			min-width: 40px;
			border-radius: 100px;
			background: var(--layer-02);
			transition: var(--transition-duration) var(--transition-timing-function);
		}
		&__box-inner {
			position: absolute;
			background: var(--layer-01);
			display: flex;
			align-items: center;
			justify-content: center;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			top: 2px;
			left: 2px;
			color: var(--icon-secondary);
			transition: var(--transition-duration) var(--transition-timing-function);
			:global(svg) {
				position: absolute;
				top: 50%;
				left: 50%;
				opacity: 0;
				transform: translate(-50%, -50%);
				transition: var(--transition-duration) var(--transition-timing-function);
			}
			:global(svg:last-child) {
				opacity: 1;
			}
		}
		&__input:checked ~ &__box {
			background: var(--button-primary-enabled);
		}
		&__input:checked ~ &__box > &__box-inner {
			left: 22px;
			color: var(--icon-accent);
			:global(svg:last-child) {
				opacity: 0;
			}
			:global(svg:first-child) {
				opacity: 1;
			}
		}

		&__input:disabled ~ &__box {
			background: var(--button-disabled);
		}
		&__input:disabled ~ &__box > &__box-inner {
			color: var(--icon-disabled);
		}
		&__input:disabled ~ &__text {
			color: var(--text-disabled);
			.checkbox__description {
				color: var(--text-disabled);
			}
		}

		@media (hover: hover) {
			&:hover {
				.checkbox__input:not(:disabled) ~ .checkbox__text {
					color: var(--text-secondary);
				}
				.checkbox__input:not(:disabled) ~ .checkbox__box {
					background: var(--layer-02-hover);
				}
				.checkbox__input:not(:disabled):checked ~ .checkbox__box {
					background: var(--button-primary-hover);
				}
			}
		}
	}
</style>
