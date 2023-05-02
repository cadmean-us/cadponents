<script lang="ts">
	import SideMenuTab from '$lib/menu/SideMenuTab.svelte';
	import type { SideMenuTabs } from '$lib/models/sideMenuTab.js';

	export let activeColor = 'white';
	export let inactiveColor = '#66667C';

	export let tabs: SideMenuTabs[] = [];
</script>

<div aria-label="Sidebar" class="w-64 h-screen sticky left-0 top-0" id="default-sidebar">
	<div class="h-full px-3 py-4 overflow-y-auto bg-[#12131C]">
		<slot name="title" />
		<ul class="space-y-2 font-medium">
			{#each tabs as tab}
				<SideMenuTab {...tab} {inactiveColor} {activeColor} />
			{/each}
		</ul>
		<div class="fixed bottom-0">
			<slot name="footer" />
		</div>
	</div>
</div>
