<script>
	import '../main.css';
	import SideMenu from '$lib/menu/SideMenu.svelte';
	import Student from '$lib/Student.svelte';

	let tabs = [
		{
			name: 'Main',
			href: '/',
		},
		{
			name: 'Modal',
			href: '/modal',
		},
		{
			name: 'Textarea',
			href: '/textarea',
		},
		{
			name: 'Button',
			href: '/button',
		},
	];
</script>

<div class="flex h-full">
	<SideMenu {tabs}>
		<svelte:fragment slot="title">
			<div class="text-white mb-3">Cadponents</div>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<div class="text-white mb-3">Need help?</div>
		</svelte:fragment>
	</SideMenu>
	<div class="w-full p-10">
		<slot />
	</div>
</div>
