<script lang="ts">
import Button from "./Button.svelte";
import UploaderIcon from "./icons/UploaderIcon.svelte";
import Trash from "./icons/Trash.svelte";

export let status: 'enabled' | 'error' | 'success' = 'enabled';
export let label: string = '';
export let hint: string = '';
export let disabled: boolean = false;
export let accept: string = '*';
export let multiple: boolean = false;
export let placeholder: string = 'Drop files here to upload...';

let input: HTMLInputElement;
let files: FileList | null = null;
$: visibleFiles = files ? Array.from(files) : []; 

const removeFile = (filename: any) => {
	visibleFiles = [...visibleFiles].filter((file: any) => {
		return file.name !== filename
	})
	if(visibleFiles.length === 0) {
		input.value = '';
	}
}
</script>

<div class="uploader-wrapper">
	<label class="uploader" class:disabled={disabled} >
		<p class="uploader__label">
			{#if $$slots.label}
				<slot name="label" />
			{:else}
				{label}
			{/if}
		</p>
	
		<div class="uploader__wrapper">
			<input type="file" {accept} bind:files bind:this={input} {multiple} class="uploader__input" {disabled}>
			<p class="uploader__placeholder">
				<span>
					<UploaderIcon size={24}/>
				</span>
				{placeholder}
			</p>
			<Button class="uploader__button" size="lg" {disabled} on:click={() => input.click()}>Browse files</Button>
		</div>
	
		<p class="uploader__hint uploader__hint--{status}">
			{#if status === 'error'}
				{#if $$slots.error}
					<slot name="error" />
				{:else}
					You're doing it wrong!
				{/if}
			{:else if status === 'success'}
				{#if $$slots.success}
					<slot name="success" />
				{:else}
					Success!
				{/if}
			{:else if $$slots.hint}
				<slot name="hint" />
			{:else}
				{hint}
			{/if}
		</p>
	</label>
	
	{#if visibleFiles} 
		<div class="files">
			{#each visibleFiles as file}
				<div class="file">
					<div class="file__col">
						<p class="file__name">{file.name}</p>
						<p class="file__size">
							<span class="file__status file__status--{status}">Upload success</span> {(file.size / 1024).toFixed(2)} kb </p>
					</div>
					<button class="file__delete" on:click={() => removeFile(file.name)}>
						<Trash size={24}/>
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.files {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.file {
		padding: 10px 16px;
		display: flex;
		gap: 10px;
		align-items: center;
		border-radius: 10px;
		border: 1px solid var(--border-default, #E1E2E3);
		max-width: 250px;
		&__col {
			display: flex;
			width: 100%;
			flex-direction: column;
		}
		&__name {
			overflow: hidden;
			color: var(--text-primary, #071A2B);
			text-overflow: ellipsis;
			font-size: 14px;
			white-space: nowrap;
			max-width: 184px;
			font-weight: 400;
			line-height: 20px;
			letter-spacing: -0.1px;
		}
		&__size {
			display: flex;
			gap: 10px;
			color: var(--text-secondary, #838D95);
			font-size: 12px;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: 0.3px;
		}
		&__status {
			color: var(--support-success, #0E8345);
			font-size: 12px;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: 0.3px;
		}
		&__delete {
			min-width: 24px;
			min-height: 24px;
			color: var(--icon-secondary);
		}
	}
	.uploader-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.uploader {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 100%;
		&__button {
			position: relative;
			z-index: 1;
		}
		&__label {
			font-size: 12px;
			font-weight: 500;
			line-height: 16px;
			letter-spacing: 0.3px;
			color: var(--text-secondary);
		}
		&__input {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			letter-spacing: -0.1px;
			color: var(--text-primary);
			position: absolute;
			opacity: 0;
			cursor: pointer;

			&:focus {
				outline: none;
			}
			&::placeholder {
				color: var(--text-placeholder);
			}
		}
		&__hint {
			font-size: 12px;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: 0.3px;
			color: var(--text-secondary);
			display: flex;
			gap: 5px;
			align-items: center;
			&--error {
				color: var(--support-error);
			}
			&--success {
				color: var(--support-success);
			}
		}
		&__wrapper {
			display: flex;
			padding: 20px 22px;
			position: relative;
			gap: 10px;
			transition: var(--transition-duration) var(--transition-timing-function);
			background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23E1E2E3FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
			border-radius: 10px;
			flex-direction: column;
			align-items: center;
			:global(svg) {
				min-width: 20px;
				min-height: 20px;
			}
		}
		&__placeholder {
			display: flex;
			align-items: center;
			gap: 10px;
			color: var(--text-placeholder, #C1C6CA);
			font-size: 14px;
			font-weight: 400;
			line-height: 20px; /* 142.857% */
			letter-spacing: -0.1px;
			span {
				color: var(--icon-secondary)
			}
		}
		&.disabled {
			pointer-events: none;
			.uploader {
				&__label, &__hint {
					color: var(--text-disabled);
				}
				&__wrapper {
					background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23EEEFEFFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
					background-color: var(--layer-disabled);
				}
			}
		}
		&:focus-within {
			.uploader__wrapper {
				background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23BFC1C3FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
			}
		}
		&--error:focus-within {
			.uploader__wrapper {
				background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='red' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
			}
		}
	}
</style>