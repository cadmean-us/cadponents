<script>
	import { fade } from 'svelte/transition';
	import CheckboxChecked from './icons/CheckboxChecked.svelte';
	import CheckboxUnchecked from './icons/CheckboxUnchecked.svelte';

	export let group = [];
	export let value = '';
	export let checked = false;
	checked = false;

	$: if (value) checkTheCheck();
	function checkTheCheck() {
		if (group.length > 0) {
			for (let i = 0; i < group.length; i++) {
				if (group[i] === value) {
					checked = true;
					break;
				} else {
					checked = false;
				}
			}
		}
	}

	$: if (checked) {
		if (!group.includes(value)) {
			group = [...group, value];
		}
	} else if (value && !checked) {
		group = group.filter((v) => v !== value);
	}

	//todo: fadeout
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
			{:else if !checked}
				<div in:fade={{ duration: 100 }}>
					<CheckboxUnchecked />
				</div>
			{/if}
		</div>
		<slot>{value}</slot>
	</div>
</div>
