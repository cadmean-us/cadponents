<script>
	import Popover from '$lib/Popover.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Chevron from '$lib/icons/Chevron.svelte';
	import { fly, fade } from 'svelte/transition';
	import Check from '$lib/icons/Check.svelte';

	export let values;
	export let selected = values[0];

	export let label = '';
	let pop;

	const rotation = tweened(0, {
		duration: 400,
		easing: cubicOut,
	});
	let visible;
	$: {
		if (visible) {
			rotation.set(1);
		} else rotation.set(0);
	}

	//todo: mozilla scrollbar
	let panel;
</script>

<div>{label ?? ''}</div>
<div
	bind:this={panel}
	class="rounded-c border-gray-300 border-c w-[245px] h-[52px] py-[12px] px-[20px] flex justify-between items-center truncate"
	on:click|stopPropagation={pop.show(panel)}
>
	<div class="truncate">{selected}</div>
	<div style="transform: rotate({$rotation * 180}deg)">
		<Chevron size="10" />
	</div>
</div>

<Popover bind:visible bind:this={pop}>
	<div
		in:fly={{ y: -10, duration: 300 }}
		class="scrollbar w-[245px] bg-white rounded-c border-gray-300 border-c max-h-[188px] overflow-y-scroll"
	>
		{#each values as v}
			<div
				class="p-[12px] w-[237px] flex justify-between items-center w-full truncate"
				on:click={() => {
					selected = v;
					visible = false;
				}}
			>
				<div class="w-[189px] truncate">{v}</div>
				{#if v === selected}<Check height="4" width="13" />{/if}
			</div>
		{/each}
	</div>
</Popover>

<style>
	/* For WebKit browsers (Chrome, Safari, etc.) */
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #eaeaea;
		border-radius: 6px;
	}

	/* For Firefox */
	.scrollbar {
		scrollbar-width: thin;
	}
</style>
