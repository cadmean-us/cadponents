<script>
	import Schedule from '$lib/Schedule/Schedule.svelte';
	import Input from '$lib/Input.svelte';

	let selectedDate;
	let amount = 2;
</script>

<Input bind:value={amount} />

<Schedule bind:selectedDate {amount} />
{selectedDate}
