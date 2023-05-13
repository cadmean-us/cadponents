<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	let visible = false;

	export function toggleVisibility() {
		visible = !visible;
	}

	export function open() {
		visible = true;
	}
	export function hide() {
		visible = false;
	}

	// todo: do other directions & other stuff
</script>

{#if visible}
	<div
		class="fixed top-0 left-0 z-40 w-screen h-screen flex items-center justify-center"
		style="background-color: rgb(0 0 0 / .5) !important;"
		in:fade
		out:fade
		on:click|self={hide}
	>
		<div class="px-[20px] py-[12px] bg-white rounded-c z-50 {$$props.class}">
			<slot />
		</div>
	</div>
{/if}
