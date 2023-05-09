<script>
	import { clickOutside } from '$lib/scripts/clickOutside.ts';

	export let yOffset = 4;
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
			top = `${targetRect.bottom + yOffset}px`;
		}
	}

	export function hide() {
		visible = false;
	}

	//todo: make it move with the mousewheel, option if target was clicked no need to close
	let prevent = false;
</script>

<svelte:window
	on:wheel={() => {
		if (!prevent) {
			hide();
		} else {
			prevent = false;
		}
	}}
/>

{#if visible}
	<div
		{...$$restProps}
		use:clickOutside
		on:click_outside={hide}
		on:mousewheel={() => (prevent = true)}
		class={'z-50 ' + $$props.class ?? ''}
		style="position: fixed; top:{top}; left:{left}"
		bind:this={popover}
	>
		<slot />
	</div>
{/if}
