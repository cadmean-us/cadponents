<script lang="ts">
	import LoadingDots from '$lib/icons/LoadingDots.svelte';
	import { fade } from 'svelte/transition';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let variant: 'filled' | 'outlined' | 'ghosted' = 'filled';
	export let href: string | undefined = undefined;
	export let loading = false;
</script>

{#if !$$restProps.href}
	<button
		on:click
		{...$$restProps}
		class="button button--{variant} button--{size} {$$props.class ?? ''}"
	>
		<span class="flex gap-[10px]">
			<slot />
		</span>
		{#if loading}
			<span transition:fade class=" relative w-0">
				<LoadingDots />
			</span>
		{/if}
	</button>
{:else}
	<a {href} {...$$restProps} class="button button--{variant} button--{size} {$$props.class ?? ''}">
		<slot />
	</a>
{/if}

<style lang="scss">
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;

		font-size: 14px;
		line-height: 20px;
		letter-spacing: -0.1px;
		font-weight: 500;
		outline: 0px solid transparent;
		transition: var(--transition-duration) var(--transition-timing-function);

		:global(path[fill]),
		:global(rect[fill]),
		:global(circle[fill]),
		:global(polygon[fill]) {
			transition: var(--transition-duration) var(--transition-timing-function);
			fill: currentColor;
		}

		:global(path[stroke]),
		:global(rect[stroke]),
		:global(circle[stroke]),
		:global(polygon[stroke]) {
			transition: var(--transition-duration) var(--transition-timing-function);
			stroke: currentColor;
		}

		&--lg {
			padding: 14px 22px;
		}
		&--md {
			padding: 10px 18px;
		}
		&--sm {
			padding: 6px 14px;
		}
		&--filled {
			background: var(--button-primary-enabled);
			color: var(--text-on-color);
			@media (hover: hover) {
				&:hover {
					background: var(--button-primary-hover);
				}
			}
			&:active {
				background: var(--button-primary-active);
			}
			&:disabled {
				background: var(--button-disabled);
				color: var(--text-on-color-disabled);
			}
		}
		&--outlined {
			background: transparent;
			color: var(--button-primary-enabled);
			outline: 2px solid var(--button-primary-enabled);
			@media (hover: hover) {
				&:hover {
					border-color: var(--button-primary-hover);
					color: var(--button-primary-hover);
				}
			}
			&:active {
				border-color: var(--button-primary-active);
			}
		}
		&--outlined {
			background: transparent;
			color: var(--button-primary-enabled);
			outline: 2px solid var(--button-primary-enabled);
			@media (hover: hover) {
				&:hover {
					border-color: var(--button-primary-hover);
					color: var(--button-primary-hover);
				}
			}
			&:active {
				border-color: var(--button-primary-active);
				color: var(--button-primary-active);
			}
			&:disabled {
				border-color: var(--button-disabled);
			}
		}
		&--ghosted {
			background: transparent;
			color: var(--button-primary-enabled);
			@media (hover: hover) {
				&:hover {
					color: var(--button-primary-hover);
				}
			}
			&:active {
				color: var(--button-primary-active);
			}
		}

		&:disabled {
			color: var(--text-on-color-disabled);
		}
		&:focus-visible {
			outline: 5px solid var(--button-animating);
		}
	}
</style>
