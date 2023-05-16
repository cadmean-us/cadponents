<script>
	import Input from '$lib/Input.svelte';
	import Check from '$lib/icons/Check.svelte';
</script>

<Input>
	<slot name="prefix">
		<Check />
	</slot>
	<slot name="suffix">
		<Check />
	</slot>
</Input>
