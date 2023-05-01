<script>
    import { createEventDispatcher } from 'svelte';
    import Close from "$lib/icons/Close.svelte";
    import {fade } from 'svelte/transition';

    const dispatch = createEventDispatcher();
    export let id
    export let value
    function remove() {
        dispatch('remove', id);
    }

</script>

<div class="rounded-lg flex gap-[10px] items-center justify-center text-[#282945] bg-[#ECDEFF] w-fit px-[12px] py-[6px]"
    in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
    <slot>{value}</slot>
    <Close on:click={remove}/>
</div>