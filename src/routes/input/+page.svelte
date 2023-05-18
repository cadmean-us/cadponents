<script>
	import Input from '$lib/Input.svelte';
	import Check from '$lib/icons/Check.svelte';
</script>

<Input helperText="helper text" label="First Name">
	<svelte:fragment slot="prefix">
		<Check />
	</svelte:fragment>
	<svelte:fragment slot="suffix">
		<Check />
	</svelte:fragment>
</Input>
