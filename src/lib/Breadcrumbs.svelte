<script lang="ts">
	import BreadcrumbArrow from '$lib/icons/BreadcrumbArrow.svelte';

	export let links = [];
	export let isArrow = false;
</script>

<div class="breadcrumbs">
	{#each links as link, i}
		<a href="{link.href}" class="breadcrumbs__link">{link.title}</a>
		{#if !isArrow && i < links.length - 1} 
			<span class="breadcrumbs__separator">/</span> 
		{:else if isArrow && i < links.length - 1}
			<BreadcrumbArrow />
		{/if}
	{/each}
</div>

<style lang="scss">
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 6px;
	}
</style>