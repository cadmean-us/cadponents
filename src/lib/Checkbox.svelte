<script>
	import { fade } from 'svelte/transition';
	import CheckboxChecked from '$lib/icons/CheckboxChecked.svelte';
	import CheckboxUnchecked from '$lib/icons/CheckboxUnchecked.svelte';

	export let checked;
</script>

<div
	class="flex items-center justify-between {$$props.class}"
	on:click={() => (checked = !checked)}
>
	<div class="w-[20px] h-[20px] relative">
		{#if checked}
			<div
				in:fade={{ duration: 100 }}
				out:fade={{ duration: 100 }}
				class="absolute top-0 left-0"
			>
				<CheckboxChecked />
			</div>
		{:else}
			<div
				in:fade={{ duration: 100 }}
				out:fade={{ duration: 100 }}
				class="absolute top-0 left-0"
			>
				<CheckboxUnchecked />
			</div>
		{/if}
	</div>
	One
</div>
