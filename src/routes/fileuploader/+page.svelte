<script>
	import FileUploader from '$lib/FileUploader.svelte';
</script>

<!-- <FileUploader bind:files {accept} {multiple} {label} class="h-[300px]" /> -->



<h1 class="ui-group__title">Input</h1>

<div class="ui-group">
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<FileUploader multiple label="Label" hint="Hint" placeholder="Drop files here to upload…" />
			<FileUploader disabled label="Label" hint="Hint" placeholder="Drop files here to upload…" />
		</div>
	</div>
</div>