<script>
	import Textarea from '$lib/Textarea.svelte';

	export let value;
</script>

<Textarea
	bind:value
	label="Your message"
	placeholder="Your message"
	maxlength="50"
	class="w-[287px] h-[116px]"
/>

{value}
