<script>
	import File from '$lib/icons/File.svelte';
	import Close from '$lib/icons/Close.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let name;
</script>

<div class="border-c rounded-c flex gap-[10px] px-[20px] py-[14px]">
	<File />
	<div class="flex-1">{name}</div>
	<Close
		on:click={() => {
			dispatch('remove', name);
		}}
	/>
</div>
