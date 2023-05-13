<script>
	import Button from '$lib/Button.svelte';
	import Modal from '$lib/Modal.svelte';

	let modal;
</script>

<Button on:click={modal.open}>Open Modal</Button>

<Modal bind:this={modal}>test</Modal>
