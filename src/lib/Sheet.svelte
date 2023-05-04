<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	/**
	 * The direction the sheet will fly in from
	 * @type {"top" | "right" | "bottom" | "left"}
	 */
	export let direction = 'right';
	let visible = false;

	export function toggleVisibility() {
		visible = !visible;
	}

	export function open() {}

	// todo: do other directions & other stuff
</script>

{#if visible}
	<div
		class="overlay fixed top-0 left-0 h-full w-full z-40"
		style="background-color: rgb(0 0 0 / .5) !important;"
		in:fade
		out:fade
		on:click={toggleVisibility}
	/>
	<div
		in:fly={{ x: 300, duration: 500 }}
		out:fly={{ x: 300, duration: 300 }}
		class="fixed top-0 right-0 h-full w-[489px] z-50 bg-white"
	>
		<slot>test</slot>
	</div>
{/if}

<style>
</style>
