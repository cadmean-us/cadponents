<script lang="ts">
	export let href;
	export let name;
	export let icon;

	export let activeColor;
	export let inactiveColor;

	let fill = inactiveColor;

	function handleMouseOver(_) {
		fill = activeColor;
	}

	function handleMouseOut(_) {
		fill = inactiveColor;
	}
</script>

<li>
	<a
		class="flex items-center p-2 text-[#66667C] hover:text-white rounded-lg hover:no-underline"
		{href}
		on:mouseout={handleMouseOut}
		on:mouseover={handleMouseOver}
	>
		<svelte:component this={icon} {fill} />
		<span class="ml-3">{name}</span>
	</a>
</li>
