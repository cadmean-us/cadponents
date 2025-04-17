<script lang="ts">
	import '../assets/style.css';
	import '../style.css';
	import SideMenu from '$lib/menu/SideMenu.svelte';
	// import Student from '$lib/Student.svelte';
	import 'iconify-icon';

	let tabs = [
		{
			title: 'Cadponents',
			icon: 'ci:folders',
			children: [
				{
					title: 'Form',
					href: '/form'
				},
				{
					title: 'Button',
					href: '/button'
				},
				{
					title: 'Tag',
					href: '/tag'
				},
				{
					title: 'Breadcrumb',
					href: '/breadcrumb'
				},
				{
					title: 'Control',
					href: '/control'
				},
				{
					title: 'NavLink',
					href: '/navlink'
				},
				{
					title: 'Input',
					href: '/input'
				},
				{
					title: 'Select',
					href: '/select'
				},
				{
					title: 'FileUploader',
					href: '/fileuploader'
				}
			]
		},

		// {
		// 	title: 'Main',
		// 	href: '/',
		// },
		// {
		// 	title: 'Modal',
		// 	href: '/modal',
		// },
		// {
		// 	title: 'Textarea',
		// 	href: '/textarea',
		// },
		// {
		// 	title: 'DatePicker',
		// 	href: '/datepicker',
		// },
		{
			title: 'Table',
			href: '/table'
		}
		// {
		// 	title: 'Timeline',
		// 	href: '/timeline',
		// },
		// {
		// 	title: 'Weekly Schedule',
		// 	href: '/weeklyschedule',
		// },
	];
</script>

<div class="page">
	<SideMenu {tabs}>
		<svelte:fragment slot="title">
			<div class="page__title">Cadponents</div>
		</svelte:fragment>
		<svelte:fragment slot="footer">
			<div class="page__title">Need help?</div>
		</svelte:fragment>
	</SideMenu>
	<div class="page__content">
		<slot />
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		width: 100%;
		height: 100vh;
		&__title {
			color: #fff;
			margin-bottom: 12px;
			&:first-child {
				margin-top: 12px;
			}
		}
		&__content {
			width: 100%;
			padding: 40px;
			overflow-x: hidden;
		}
	}
</style>
