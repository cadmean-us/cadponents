<script lang="ts">
	import SideMenuTab from '$lib/menu/SideMenuTab.svelte';
	import type { SideMenuTabs } from '$lib/models/sideMenuTab.js';

	export let activeColor = 'white';
	export let inactiveColor = '#66667C';
	export let padding = 30;
	export let tabs: SideMenuTabs[] = [];

	let defaultClass = `h-screen sticky left-0 top-0 w-[246px] box-border`;
	let defaultClassInside = `h-full px-7 py-7 overflow-y-auto bg-[#12131C] w-[246px]`;
</script>

<div
	aria-label="Sidebar"
	{...$$restProps}
	class={defaultClass + ' ' + $$props.class ?? ''}
	id="default-sidebar"
>
	<div class={defaultClassInside + ' ' + $$props.class ?? ''} style="padding: 0 {padding}px;">
		<slot name="title" />
		<ul class="font-medium" style="margin-top: {padding}px !important">
			{#each tabs as tab}
				<SideMenuTab {...tab} {inactiveColor} {activeColor} {padding} />
			{/each}
		</ul>
		<div class="fixed bottom-0">
			<slot name="footer" />
		</div>
	</div>
</div>
