<script>
	import Button from '$lib/Button.svelte';
	import Modal from '$lib/Modal.svelte';
	import Textarea from '$lib/Textarea.svelte';

	let modal;
</script>

<Button on:click={modal.open}>Open Modal</Button>

<Modal bind:this={modal} class="min-w-[327px]">
	<Textarea />
</Modal>
