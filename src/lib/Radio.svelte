<script>
	import { fade } from 'svelte/transition';
	import CheckboxChecked from './icons/CheckboxChecked.svelte';
	import CheckboxUnchecked from './icons/CheckboxUnchecked.svelte';
	import RadioSelected from '$lib/icons/RadioSelected.svelte';
	import RadioUnselected from '$lib/icons/RadioUnselected.svelte';

	export let group = '';
	export let value = '';
	export let selected = false;

	if (group === value) selected = true;

	$: if (selected) assignGroup();

	function assignGroup() {
		group = value;
	}

	$: if (group !== value) selected = false;

	//todo: fadeout
</script>

<div on:click>
	<div
		class="flex items-center justify-between {$$props.class}"
		on:click={() => (selected = !selected)}
	>
		<div class="w-[20px] h-[20px]">
			{#if selected}
				<div in:fade={{ duration: 100 }}>
					<RadioSelected />
				</div>
			{:else}
				<div in:fade={{ duration: 100 }}>
					<RadioUnselected />
				</div>
			{/if}
		</div>
		<slot>{value}</slot>
	</div>
</div>
