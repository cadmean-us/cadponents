<script lang="ts">
	import NavLink from '$lib/NavLink.svelte';
	import Chevron from '$lib/icons/Chevron.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let links: any[] = [];
	export let children = false;
	export let open = false;
	let isOpen = [];

	let currentPath = '';

	page.subscribe(($page) => {
		currentPath = $page.url.pathname;
		links.forEach((link, index) => {
			if (link.children && isLinkSelected(link)) {
				isOpen[index] = true;
			}
		});
	});

	function isLinkSelected(link): boolean {
		// If your link.href values don’t include the base path,
		// you might want to prepend base (e.g. `${base}${link.href}`) when comparing.
		if (link.href && link.href === currentPath) {
			return true;
		}
		// If the link has children, check them recursively.
		if (link.children) {
			return link.children.some(child => isLinkSelected(child));
		}
		return false;
	}

	// On mount, open any nav item whose child is selected.
	onMount(() => {
		links.forEach((link, index) => {
			if (link.children && isLinkSelected(link)) {
				isOpen[index] = true;
			}
		});
	});
</script>

<div {...$$restProps} class="nav {open ? 'nav--open' : ''} {children ? 'nav--children' : ''} {$$props.class}">
	{#each links as link, index}
		{#if link.children}
			<button class="nav__link nav__link--button {isOpen[index] ? 'nav__link--open' : ''}" on:click={() => isOpen[index] = !isOpen[index]}>
				{#if link.iconSwitchChevron}
					<span class="nav__icons">
						{#if link.notification} <span class="nav__notification">{link.notification}</span> {/if}
						{#if link.icon} <svelte:component this={link.icon} size="20"/> {/if}
						{#if children} <span class="nav__chevron {isOpen[index] ? 'nav__chevron--open' : ''}"> <Chevron /> </span> {/if}
					</span>
				{:else}
					{#if !children} <span class="nav__chevron {isOpen[index] ? 'nav__chevron--open' : ''}"> <Chevron /> </span> {/if}
				{/if}
				<span class="nav__title">{link.title}</span>
				{#if link.iconSwitchChevron} 
					{#if !children} <span class="nav__chevron {isOpen[index] ? 'nav__chevron--open' : ''}"> <Chevron /> </span> {/if}
				{:else}
					<span class="nav__icons">
						{#if link.notification} <span class="nav__notification">{link.notification}</span> {/if}
						{#if link.icon} <svelte:component this={link.icon} size="20"/> {/if}
						{#if children} <span class="nav__chevron {isOpen[index] ? 'nav__chevron--open' : ''}"> <Chevron /> </span> {/if}
					</span>
				{/if}
			</button>
			<div class="nav__wrapper" class:nav__wrapper--open={isOpen[index]}>
				<NavLink links={link.children} children open={isOpen[index]}/>
			</div>
		{:else}
			<a
				href="{link.href}"
			class:selected={isLinkSelected(link)}
			class="nav__link {$$props.class ?? ''}"
			>
				{link.title}
				<span class="nav__icons">
					{#if link.notification} <span class="nav__notification">{link.notification}</span> {/if}
					{#if link.icon} <svelte:component this={link.icon} size="20"/> {/if}
				</span>
			</a>
		{/if}
	{/each}
</div>

<style lang="scss">


  .selected {
    text-decoration: underline;
  }

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
		justify-content: space-between;
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
		width: 20px;
		height: 20px;
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
		text-decoration: none !important;
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