<script>
	import Input from '$lib/Input.svelte';
	import Check from '$lib/icons/Check.svelte';
</script>

<Input class="w-[200px]" helperText="helper text" label="First Name">
	<svelte:fragment slot="prefix">
		<Check />
	</svelte:fragment>
	<svelte:fragment slot="suffix">
		<Check />
	</svelte:fragment>
</Input>

<Input class="h-[32px] w-[128px]" helperText="helper text" label="First Name" />
<Input disabled helperText="helper text" label="First Name" placeholder="Disabled" />
