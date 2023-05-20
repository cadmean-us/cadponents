<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Close from '$lib/icons/Close.svelte';
	import File from '$lib/icons/File.svelte';
	import Item from '$lib/file-uploader/Item.svelte';

	const dispatch = createEventDispatcher();

	export let label;
	export let labelClass;
	export let files: ReadonlyArray<File>;
	export const clearFiles = () => {
		files = [];
	};

	/** Set to `true` to allow multiple files */
	export let multiple = false;

	/**
	 * Specify the accepted file types
	 * @type {ReadonlyArray<string>}
	 */
	export let accept: ReadonlyArray<string> = [];

	/** Set to `true` to disable the input */
	export let disabled = false;

	/**
	 * Override the default behavior of validating uploaded files.
	 * By default, files are not validated
	 * @type {(files: ReadonlyArray<File>) => ReadonlyArray<File>}
	 */
	export let validateFiles = (files) => files;

	let over;

	function remove(filename) {
		files = [...files].filter((file) => {
			return file.name !== filename;
		});
	}
</script>

<slot name="label">
	<div class={labelClass}>
		{label}
	</div>
</slot>
<label
	for="file-upload"
	class="cursor-pointer border-dashed border-c rounded-c flex flex-col justify-center items-center {$$props.class}"
	class:isOver={over}
	on:dragover
	on:dragover|preventDefault|stopPropagation={({ dataTransfer }) => {
		if (!disabled) {
			over = true;
			dataTransfer.dropEffect = 'copy';
		}
	}}
	on:dragleave
	on:dragleave|preventDefault|stopPropagation={({ dataTransfer }) => {
		if (!disabled) {
			over = false;
			dataTransfer.dropEffect = 'move';
		}
	}}
	on:drop
	on:drop|preventDefault|stopPropagation={({ dataTransfer }) => {
		if (!disabled) {
			over = false;
			files = validateFiles([...dataTransfer.files]);
			dispatch('add', files);
			dispatch('change', files);
		}
	}}
>
	<input
		id="file-upload"
		{...$$restProps}
		class="hidden"
		{multiple}
		{accept}
		bind:files
		type="file"
	/>
	<slot>
		<span class="w-[125px] text-center">
			Drop files here or
			<br /> <span class="text-primary">Browse</span>
		</span>
	</slot>
</label>

{#if files}
	<div class="flex flex-col gap-[10px] mt-[10px]">
		{#each Array.from(files) as file}
			<Item
				on:remove={(e) => {
					remove(e.detail);
				}}
				name={file.name}
			/>
		{/each}
	</div>
{/if}

<style>
	.isOver {
		border-style: solid;
	}
</style>
