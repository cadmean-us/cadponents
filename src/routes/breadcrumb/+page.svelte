<script>
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import Placeholder from '$lib/icons/Placeholder.svelte';
	const links = [
		{
			title: 'Home',
			href: '/',
			icon: Placeholder
		},
		{
			title: 'Button',
			href: '/button',
		},
		{
			title: 'Breadcrumb',
			href: '/breadcrumb',
			children: [
				{
					title: 'Breadcrumb One',
					href: '/breadcrumb',
				},
				{
					title: 'Breadcrumb Two',
					href: '/breadcrumb',
				}
			]
		}
	]
</script>

<h1 class="ui-group__title">NavLink</h1>

<div class="ui-group">
	<div class="w-[300px]">
		<Breadcrumbs links={links} isArrow/>
	</div>
</div>
