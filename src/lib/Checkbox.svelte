<script>
	import { fade } from 'svelte/transition';
	import CheckboxChecked from './icons/CheckboxChecked.svelte';
	import CheckboxUnchecked from './icons/CheckboxUnchecked.svelte';

	export let group = [];
	export let value = '';
	export let checked = false;

	$: if (checked) {
		if (!group.includes(value)) {
			group = [...group, value];
		}
		console.log(checked, value);
	} else {
		group = group.filter((v) => v !== value);
	}

	if (group.length > 0) {
		group.forEach((v) => {
			console.log(v === value);
			if (v === value) checked = true;
		});
	}
</script>

<div on:click>
	<div
		class="flex items-center justify-between {$$props.class}"
		on:click={() => (checked = !checked)}
	>
		<div class="w-[20px] h-[20px]">
			{#if checked}
				<div in:fade={{ duration: 100 }}>
					<CheckboxChecked />
				</div>
			{:else}
				<div in:fade={{ duration: 100 }}>
					<CheckboxUnchecked />
				</div>
			{/if}
		</div>
		<slot>{value}</slot>
	</div>
</div>
