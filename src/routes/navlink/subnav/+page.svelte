<script>
	import NavLink from '$lib/NavLink.svelte';
	import Placeholder from '$lib/icons/Placeholder.svelte';


	const links = [
		{
			title: 'Home',
			href: '/',
			notification: '2',
			icon: Placeholder,
			children: [
				{
					title: 'Button',
					href: '/button',
					children: [
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: Placeholder
						},
						{
							title: 'Button',
							href: '/navlink',
							notification: '2',
							icon: Placeholder
						}
					]
				},
				{
					title: 'Button',
					href: '/button',
				},
				{
					title: 'Button',
					href: '/button',
				},
				{
					title: 'Button',
					href: '/button',
					notification: '2',
					icon: Placeholder,
					children: [
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: Placeholder
						},
						{
							title: 'Button',
							href: '/navlink/subnav',
							notification: '2',
							icon: Placeholder
						}
					]
				}
			]
		},
		{
			title: 'Button',
			href: '/button',
		}
	]
	const linksTwo = [
		{
			title: 'Home',
			href: '/',
			notification: '2',
			icon: Placeholder,
			iconSwitchChevron: true,
			children: [
				{
					title: 'Button',
					href: '/button',
					children: [
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: Placeholder
						},
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: Placeholder
						}
					]
				},
				{
					title: 'Button',
					href: '/button',
				},
				{
					title: 'Button',
					href: '/button',
				},
				{
					title: 'Button',
					href: '/button',
					notification: '2',
					icon: Placeholder,
					children: [
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: Placeholder
						},
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: Placeholder
						}
					]
				}
			]
		},
		{
			title: 'Button',
			href: '/button',
		}
	]
</script>

<h1 class="ui-group__title">NavLink</h1>

<div class="ui-group">
	<div style="width: 300px;">
		<NavLink links={links} />
	</div>
	<div style="width: 300px;">
		<NavLink links={linksTwo}/>
	</div>
</div>
