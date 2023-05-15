<script lang="ts">
	export let href = '';
	export let target = '';
	/**
	 * @type {"sm" | "md" | "lg"}
	 */
	export let size = 'md';
	export let secondary = false;
	export let outlined = false;

	let background = 'bg-primary ';
	if (secondary) background = 'bg-secondary ';
	if (outlined) background = 'bg-transparent border-primary border-c !text-primary ';

	let defaultClass = 'rounded-lg flex items-center justify-center text-white ' + background;

	switch (size) {
		case 'lg':
			defaultClass += ' h-[48px] px-[20px] gap-[10px]';
			break;
		case 'md':
			defaultClass += ' h-[40px] px-[16px] gap-[10px]';
			break;
		case 'sm':
			defaultClass += ' h-[32px] px-[14px] gap-[8px]';
			break;
	}

	// todo: this looks like horse heck
	// todo: text button, icon button, no bg, generally different variants
</script>

{#if href === ''}
	<button on:click class={defaultClass + ' ' + $$props.class ?? ''}>
		<slot />
	</button>
{:else}
	<a {href} {target}>
		<button on:click {...$$restProps} class={defaultClass + ' ' + $$props.class ?? ''}>
			<slot />
		</button>
	</a>
{/if}
