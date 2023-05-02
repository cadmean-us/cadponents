<script>
	import Chip from '$lib/chips/Chip.svelte';

	export let data;
	function remove(idToRemove) {
		data = data.filter((item) => item.id !== idToRemove);
		console.log(data, idToRemove);
	}
</script>

<div class="flex gap-[10px] flex-wrap {$$props.class ?? ''}">
	{#each data as d}
		<Chip
			on:remove={(id) => {
				remove(id.detail);
			}}
			id={d.id}
			value={d.value}
		/>
	{/each}
</div>
