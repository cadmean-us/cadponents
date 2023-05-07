<script>
	import { createEventDispatcher } from 'svelte';
	import Close from '$lib/icons/Close.svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let value;
	let visible = true;
	function remove() {
		dispatch('remove', value);
	}

	//todo: add fade in and out animation, somehow it's currently weird, when fade out it suddenly moves to the last pos
</script>

<div
	class=" rounded-lg flex gap-[10px] items-center justify-center text-[#282945] bg-[#ECDEFF] w-full max-w-fit px-[12px] py-[6px]"
>
	<div class="truncate">
		<slot>{value}</slot>
	</div>
	<div class="w-[20px] cursor-pointer" on:click={remove}>
		<Close />
	</div>
</div>
