<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	// Props via runes
	let {
		side = 'right',
		open = false,
		onclose,
		children
	}: {
		side?: 'left' | 'right' | 'top' | 'bottom';
		open: boolean;
		onclose?: () => void;
		children: Snippet;
	} = $props();

	function close() {
		open = false;
		onclose?.();
	}

	const sideClasses = {
		left: 'top-0 left-0 h-full w-64',
		right: 'top-0 right-0 h-full w-64',
		top: 'top-0 left-0 w-full h-64',
		bottom: 'bottom-0 left-0 w-full h-64'
	};

	// Compute fly transitions via $derived.by to handle side changes
	const flyIn = $derived.by(() => {
		switch (side) {
			case 'left':
				return { x: -300, duration: 200, delay: 0 };
			case 'right':
				return { x: 300, duration: 200, delay: 0 };
			case 'top':
				return { y: -300, duration: 200, delay: 0 };
			case 'bottom':
				return { y: 300, duration: 200, delay: 0 };
		}
	});

	const flyOut = $derived.by(() => {
		// read flyIn so it's a dependency
		const params = flyIn;
		const { x, y, duration } = params;
		return x !== undefined ? { x, duration } : { y: duration };
	});
</script>

{#if open}
	<div class="fixed inset-0 z-40">
		<!-- Backdrop -->
		<button
			transition:fade={{ duration: 200 }}
			aria-label="Close drawer"
			class="absolute inset-0 bg-black opacity-30"
			onclick={close}
		></button>

		<!-- Drawer Panel -->
		<div
			transition:fly={flyIn}
			class="fixed {sideClasses[side]} bg-white shadow-lg transform transition-transform"
			class:translate-x-0={open}
			class:-translate-x-full={!open && side === 'left'}
			class:translate-x-full={!open && side === 'right'}
			class:-translate-y-full={!open && side === 'top'}
			class:translate-y-full={!open && side === 'bottom'}
		>
			{@render children?.()}
		</div>
	</div>
{/if}
