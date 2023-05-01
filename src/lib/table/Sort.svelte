<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	const rotation = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	/**
	 * @type {"none" | "ascending" | "descending"}
	 */
	export let sortDirection = 'none';

	let visible = false;

	export function sort() {
		visible = true;
		switch (sortDirection) {
			case 'none':
				sortDirection = 'descending';
				rotation.set(0);
				visible = true;
				break;
			case 'descending':
				sortDirection = 'ascending';
				rotation.set(1);
				break;
			case 'ascending':
				sortDirection = 'none';
				visible = false;
				break;
		}
		console.log(visible, sortDirection);
	}
</script>

<div
	class="w-4 h-4 flex items-center justify-center pt-[3px]"
	on:click={() => {
		sort();
	}}
>
	{#if visible}
		<div in:fade out:fade class="w-[7px] h-[4px]" style="transform: rotate({$rotation * 180}deg)">
			<img in:fade out:fade height="4" width="7" src="/icons/Chevron.svg" alt="chevron" />
		</div>
	{/if}
</div>
