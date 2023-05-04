<script lang="ts">
	import { onMount } from 'svelte';

	export let href;
	export let name;
	export let icon;

	export let activeColor;
	export let inactiveColor;
	export let padding;

	let fill = inactiveColor;

	function handleMouseOver(_) {
		fill = activeColor;
		this.style.color = fill;
	}

	function handleMouseOut(_) {
		fill = inactiveColor;
		this.style.color = fill;
	}

	onMount(() => {
		fill = location.pathname.includes(`/${name}`) ? activeColor : inactiveColor;
	});
</script>

<li style="margin-bottom: {padding}px;">
	<a
		class="flex items-center p-2 rounded-lg hover:no-underline"
		style="color: {fill}"
		{href}
		on:mouseout={handleMouseOut}
		on:mouseover={handleMouseOver}
	>
		<svelte:component this={icon} {fill} />
		<span class="ml-3">{name}</span>
	</a>
</li>
