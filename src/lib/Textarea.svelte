<script>
	export let value;
	export let label;
	export let labelClass;
	export let textareaClass;
</script>

<div>
	<div class="mb-[4px] {labelClass}">
		{label}
	</div>
	<div class="border-c rounded-c bg-white px-[20px] py-[14px] flex items-stretch {$$props.class}">
		<textarea
			bind:value
			style="resize: none;"
			{...$$restProps}
			class="flex-grow {textareaClass}"
		/>
	</div>
</div>

<style>
	textarea:focus-within,
	textarea:hover {
		border: none;
		outline: none;
	}
</style>
