<script>
	import { clickOutside } from '$lib/scripts/clickOutside.ts';

	export let yOffset = 10;
	export let xOffset = 0;
	export let visible;

	let popover;
	let targetRect;
	let top;
	let left;

	export function show(t) {
		event.stopPropagation();

		visible = true;

		if (t) {
			if (t.target) targetRect = t.target.getBoundingClientRect();
			else targetRect = t.getBoundingClientRect();

			left = `${targetRect.left + xOffset}px`;
			top = `${targetRect.bottom + yOffset + targetRect.height / 2}px`;
		}
	}

	export function hide() {
		visible = false;
	}
</script>

{#if visible}
	<div
		{...$$restProps}
		use:clickOutside
		on:click_outside={hide}
		class={$$props.class ?? ''}
		style="position: absolute; top:{top}; left:{left}"
		bind:this={popover}
	>
		<slot />
	</div>
{/if}
