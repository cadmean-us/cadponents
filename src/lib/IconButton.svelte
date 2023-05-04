<script lang="ts">
	export let href = '';
	export let target = '';
	/**
	 * @type {"sm" | "md" | "lg"}
	 */
	export let size = 'md';
	export let bgColor = 'transparent';

	let defaultClass = `p-0 rounded-full flex items-center justify-center`;

	switch (size) {
		case 'sm':
			defaultClass += ' w-[32px] h-[32px]';
			break;
		case 'md':
			defaultClass += ' w-[36px] h-[36px]';
			break;
		case 'lg':
			defaultClass += ' w-[40px] h-[40px]';
			break;
	}

	// todo: this looks like horse heck
	// todo: text button, icon button, no bg, generally different variants
</script>

{#if href !== ''}
	<a {href} {target}>
		<button
			on:click
			{...$$restProps}
			class={defaultClass + ' ' + $$props.class}
			style="background-color: {bgColor}"
		>
			<slot />
		</button>
	</a>
{:else}
	<button
		on:click
		{...$$restProps}
		class={defaultClass + ' ' + $$props.class}
		style="background-color: {bgColor}"
	>
		<slot />
	</button>
{/if}
