<script lang="ts">
	import NavLink from '$lib/NavLink.svelte';
	import Chevron from '$lib/icons/Chevron.svelte';
	export let links: any[] = [];
	export let children: Boolean = false;
	export let open: Boolean = false;

	let isOpen = [];
</script>

<div {...$$restProps} class="nav {open ? 'nav--open' : ''} {children ? 'nav--children' : ''}">
	{#each links as link, index}
		{#if link.children}
			<button class="nav__link nav__link--button {isOpen[index] ? 'nav__link--open' : ''}" on:click={() => isOpen[index] = !isOpen[index]}>
				{#if !children} <span class="nav__chevron {isOpen[index] ? 'nav__chevron--open' : ''}"> <Chevron /> </span> {/if}
				<span class="nav__title">{link.title}</span>
				<span class="nav__icons">
					{#if link.notification} <span class="nav__notification">{link.notification}</span> {/if}
					{#if link.icon} <svelte:component this={link.icon} size="20"/> {/if}
					{#if children} <span class="nav__chevron {isOpen[index] ? 'nav__chevron--open' : ''}"> <Chevron /> </span> {/if}
				</span>
			</button>
			<div class="nav__wrapper" class:nav__wrapper--open={isOpen[index]}>
				<NavLink links={link.children} children open={isOpen[index]}/>
			</div>
		{:else}
			<a href="{link.href}" class="nav__link">{link.title}</a>
		{/if}
	{/each}
</div>

<style lang="scss">
.nav {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	&__link {
		display: flex;
		align-items: center;
		padding: 5px 14px 5px 20px;
		gap: 12px;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		border-radius: 8px;
		letter-spacing: -0.1px;
		background: transparent;
		width: 100%;
		transition: var(--transition-duration) var(--transition-timing-function);
		@media (hover: hover) {
			&:hover {
				background:var(--layer-accent-hover);
			}
		}
		&:active {
			background: var(--layer-accent-active);
		}
		&--open {
			color: var(--text-accent);
		}
	}
	&__title {
		width: 100%;
		text-align: left;
	}
	&__chevron {
		transform: rotate(-180deg);
		transition: var(--transition-duration) var(--transition-timing-function);
		&--open {
			transform: rotate(0deg);
		}
	}
	&__icons {
		display: flex;
		gap: 4px;
		align-items: center;
		justify-content: center;
	}
	&__notification {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 400;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		line-height: 16px;
		letter-spacing: 0.3px;
		color: var(--text-on-color);
		background-color: var(--icon-accent);
	}
	&__wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		margin-top: -10px;
		flex-direction: column;
		gap: 10px;
		grid-template-rows: 0fr;
		transition: var(--transition-duration) var(--transition-timing-function);
		&--open {
			margin-top: 10px;
			grid-template-rows: 1fr;
		}
	}
	&--children {
		height: 100%;
		padding-left: 32px;
		overflow: hidden;
		display: flex;
		transition: var(--transition-duration) var(--transition-timing-function);
	}
}
</style>