<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let href;
	export let name;
	export let icon;

	export let activeColor;
	export let inactiveColor;
	export let padding;

	let fill = inactiveColor;

	function handleMouseOver(_) {
		fill = activeColor;
	}

	function handleMouseOut(_) {
		fill = location.pathname.startsWith(href) ? activeColor : inactiveColor;
	}

	onMount(() => {
		changeColorOnLoad($page.url.pathname);
	});

	$: changeColorOnLoad($page.url.pathname);

	function changeColorOnLoad(pathname) {
		fill = pathname.startsWith(href) ? activeColor : inactiveColor;
	}
</script>

<li style="margin-bottom: {padding}px;">
	<a
		class="aside-tab"
		style="color: {fill}"
		{href}
		on:mouseout={handleMouseOut}
		on:mouseover={handleMouseOver}
	>
		<svelte:component this={icon} {fill} />
		<span>{name}</span>
	</a>
</li>

<style lang="scss">
	.aside-tab {
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 8px;
		text-decoration: none;
		span {
			margin-left: 12px;
		}
		&:hover {
			text-decoration: none;
		}
	}
</style>