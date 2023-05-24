<script>
	import FileUploader from '$lib/file-uploader/FileUploader.svelte';

	let accept = 'image/png, image/jpeg';
	let multiple = true;
	let validateFiles = (files) => {
		return files.filter((file) => file.size < 1_024);
	};
	let files;

	// $: if (files) {
	// 	// Note that `files` is of type `FileList`, not an Array:
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/FileList
	// 	console.log(files);
	//
	// 	for (const file of files) {
	// 		console.log(`${file.name}: ${file.size} bytes`);
	// 	}
	// }
	let label = 'Drop files you want your students to download.';
</script>

<FileUploader bind:files {accept} {multiple} {label} class="h-[300px]" />
