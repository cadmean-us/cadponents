<script>export let href = "";
export let target = "";
export let size = "md";
export let secondary = false;
export let prefix = "";
export let suffix = "";
let defaultClass = "rounded-lg flex items-center justify-center text-white " + (!secondary ? "bg-[#000656]" : "");
switch (size) {
    case "sm":
        defaultClass += " h-[48px] px-[20px] gap-[10px]";
        break;
    case "md":
        defaultClass += " h-[40px] px-[16px] gap-[10px]";
        break;
    case "lg":
        defaultClass += " h-[36px] px-[14px] gap-[8px]";
        break;
}
</script>

{#if href !== ''}
	<a {href} {target}>
		<button on:click {...$$restProps} class={defaultClass + ' ' + $$props.class}>
			{#if prefix !== ''}
				<img src={prefix} alt="pre" />
			{/if}

			<slot />

			{#if suffix !== ''}
				<img src={suffix} alt="suf" />
			{/if}
		</button>
	</a>
{:else}
	<button on:click {...$$restProps} class={defaultClass + ' ' + $$props.class}>
		{#if prefix !== ''}
			<img src={prefix} alt="pre" />
		{/if}

		<slot />

		{#if suffix !== ''}
			<img src={suffix} alt="suf" />
		{/if}
	</button>
{/if}
