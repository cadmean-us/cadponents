<script lang="ts">
	import DatePicker from '$lib/date-picker/DatePicker.svelte';
	import Button from '$lib/Button.svelte';

	let val1;
	let val2;

	let datePickerIsOpen = false;

	function openDatePicker() {
		datePickerIsOpen = !datePickerIsOpen;
	}
</script>

<div class="flex flex-row gap-[20px]">
	<DatePicker bind:value={val1} modal={false} width="400px" />
	<div>
		<Button on:click={openDatePicker}>Open date picker</Button>
		<div id="datepicker-container" />
	</div>
</div>

<div>Date 1: {val1}</div>
<div>Date 2: {val2}</div>

<DatePicker
	bind:show={datePickerIsOpen}
	bind:value={val2}
	id="datepicker-container"
	width="327px"
/>
