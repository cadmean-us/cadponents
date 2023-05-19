<script>
	export let files;
	export let multiple;
	export let accept = [];

	/**
	 * Override the default behavior of validating uploaded files.
	 * By default, files are not validated
	 * @type {(files: ReadonlyArray<File>) => ReadonlyArray<File>}
	 */
	export let validateFiles = (files) => files;
</script>

<input
	type="file"
	tabindex="-1"
	{accept}
	{name}
	{multiple}
	class:bx--file-input={true}
	on:change={({ target }) => {
		files = validateFiles([...target.files]);
	}}
	on:click
	on:click={({ target }) => {
		target.value = null;
	}}
/>
