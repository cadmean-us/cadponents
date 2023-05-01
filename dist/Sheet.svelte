<script>import { fly, fade } from "svelte/transition";
export let direction = "right";
let visible = false;
export function toggleVisibility() {
    console.log("test");
    visible = !visible;
}
export function open() {
}
</script>

{#if visible}
    <div class="overlay fixed top-0 left-0 h-full w-full bg-black/[.5] z-40" in:fade out:fade on:click={toggleVisibility}></div>
    <div in:fly={{ x: 300, duration: 500 }} out:fly={{ x: 300, duration: 300 }} class="fixed top-0 right-0 h-full w-[489px] z-50 bg-white">
        <slot>
            test
        </slot>
    </div>
{/if}

<style></style>