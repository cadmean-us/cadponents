<script>
	import NavLink from '$lib/NavLink.svelte';

	let foobar = 'nothing';

	const links = [
		{
			title: 'Home',
			href: '/',
			notification: '1',
			icon: 'ci:folders',
			children: [
				{
					title: 'Button',
					href: '/button',
					children: [
						{
							title: 'Button',
							href: '/button'
						},
						{
							title: 'Button',
							href: '/navlink',
							notification: '2',
							icon: 'ci:main-component'
						}
					]
				},
				{
					title: 'Button',
					href: '/button'
				},
				{
					title: 'Button',
					href: '/button'
				},
				{
					title: 'Button',
					href: '/button',
					notification: '3',
					icon: 'ci:main-component',
					children: [
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: 'ci:main-component'
						},
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: 'ci:main-component'
						}
					]
				}
			]
		},
		{
			title: 'Button',
			href: '/button'
		}
	];
	const linksTwo = [
		{
			title: 'Home',
			href: '/',
			notification: '2',
			icon: 'ci:main-component',
			iconSwitchChevron: true,
			children: [
				{
					title: 'Button1',
					icon: 'ci:main-component',
					children: [
						{
							title: 'Button',
							href: '/button'
						},
						{
							title: 'Button',
							href: '/navlink',
							notification: '3',
							icon: 'ci:main-component'
						}
					]
				},
				{
					title: 'foobar',
					onclick: () => {
						foobar = 'interior';
					},
					icon: 'ci:main-component'
				},
				{
					title: 'foobar2',
					onclick: () => {
						foobar = 'foobar2';
					},
					icon: 'ci:main-component'
				},
				{
					title: 'Button',
					href: '/button',
					notification: '2',
					icon: 'ci:main-component',
					children: [
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: 'ci:add-column'
						},
						{
							title: 'Button',
							href: '/button',
							notification: '2',
							icon: 'ci:main-component'
						}
					]
				}
			]
		},
		{
			title: 'Button',
			href: '/button'
		}
	];

	console.log(links);
</script>

<h1 class="ui-group__title">NavLink</h1>

<div class="ui-group">
	foobar: {foobar}
	<div style="width: 300px;">
		<NavLink {links} />
	</div>
	<div style="width: 300px;">
		<NavLink links={linksTwo} />
	</div>
</div>
