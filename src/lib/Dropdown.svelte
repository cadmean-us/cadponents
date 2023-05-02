<script>
	import Popover from '$lib/Popover.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Chevron from '$lib/icons/Chevron.svelte';

	export let values;
	export let selected = values[0];

	export let label;
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
</script>

<div>{label}</div>
<div
	class="rounded-c border-gray-300 border-c w-[245px] h-[52px] py-[12px] px-[20px] flex justify-between items-center"
	on:click|self={pop.show}
>
	<div>{selected}</div>
	<div style="transform: rotate({$rotation * 180}deg)">
		<Chevron size="10" />
	</div>
</div>

<Popover
	yOffset={4}
	bind:visible
	bind:this={pop}
	class="w-[245px] bg-white rounded-c border-gray-300 border-c"
>
	{#each values as value}
		<div class="p-[12px] flex justify-between">
			<div>{value}</div>
			bra
		</div>
	{/each}
</Popover>
