<script>
	import Button from '$lib/Button.svelte';
	import Check from '$lib/icons/Check.svelte';
</script>

<div class="flex gap-2">
	<Button outlined>Test</Button>
	<Button secondary>Test</Button>
	<Button>Test</Button>

	<Button>
		<Check />
		Icon
	</Button>

	<Button class="!rounded-[10000px]">
		<Check size="16" color="white" />
	</Button>
</div>
