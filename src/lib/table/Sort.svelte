<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Chevron from '$lib/icons/Chevron.svelte';

	const rotation = tweened(0, {
		duration: 400,
		easing: cubicOut,
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
				rotation.set(0);
				visible = false;
				break;
		}
	}
</script>

<div
	class="w-4 h-4 flex items-center justify-center"
	on:click={() => {
		sort();
	}}
>
	<div
		class="w-[7px] h-[4px]"
		style="opacity: {visible ? '1' : '0.5'}; transform: rotate({$rotation * 180}deg)"
	>
		<div>
			<Chevron />
		</div>
	</div>
</div>
