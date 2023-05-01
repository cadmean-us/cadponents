import type { SvelteComponent } from 'svelte';

export interface SideMenuTabs {
	name: string;
	href: string;
	icon: SvelteComponent;
}
