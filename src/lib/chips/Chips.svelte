<script>
	import Chip from '$lib/chips/Chip.svelte';

	export let data;
	function remove(valueToRemove) {
		data = data.filter((item) => item !== valueToRemove.detail);
	}
</script>

<div class="flex gap-[10px] flex-wrap {$$props.class ?? ''}">
	{#each data as d}
		<Chip
			on:remove={(value) => {
				remove(value);
			}}
			value={d}
		/>
	{/each}
</div>
