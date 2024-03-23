<script lang="ts">
	export let href = '';
	export let target = '';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let type: 'filled' | 'outlined' | 'text' = 'filled';
	export let disabled = false;

	let defaultClass = ' flex items-center justify-center gap-[10px] rounded-c ';
	let typeClass = '';
	let sizeClass = '';
	let currentClass = '';
	function setClass() {
		currentClass = '';
		switch (type) {
			case 'filled':
				typeClass = disabled
					? ' bg-buttonDisabled text-textOnColorDisabled '
					: ' bg-buttonPrimaryEnabled text-textOnColor hover:bg-buttonPrimaryHover active:bg-buttonAnimating';
				break;
			case 'outlined':
				typeClass = disabled
					? ' bg-transparent text-textOnColorDisabled border-c border-buttonDisabled '
					: ' bg-transparent text-buttonPrimaryEnabled border-c border-buttonPrimaryEnabled ' +
					  'hover:border-buttonPrimaryHover hover:text-buttonPrimaryHover ' +
					  'active:text-buttonAnimating active:border-buttonAnimating ';
				break;
			case 'text':
				typeClass = disabled
					? ' bg-transparent text-textOnColorDisabled '
					: ' bg-transparent text-buttonPrimaryEnabled ' +
					  'hover:text-buttonPrimaryHover active:text-buttonAnimating ';
				break;
		}

		switch (size) {
			case 'lg':
				sizeClass = ' h-[48px] w-fit min-w-[64px] px-[20px] ';
				break;
			case 'md':
				sizeClass = ' h-[40px] w-fit min-w-[56px] px-[16px] ';
				break;
			case 'sm':
				sizeClass = ' h-[32px] w-fit min-w-[48px] px-[14px] ';
				break;
		}
		currentClass = defaultClass + typeClass + sizeClass;
	}

	setClass();
	$: {
		disabled;
		size;
		setClass();
	}
</script>

{#if href === ''}
	<button on:click {disabled} {...$$restProps} class={currentClass + ' ' + $$props.class ?? ''}>
		<slot />
	</button>
{:else}
	<a
		{href}
		{target}
		on:click
		{disabled}
		{...$$restProps}
		class={currentClass + ' ' + $$props.class ?? ''}
	>
		<slot />
	</a>
{/if}
