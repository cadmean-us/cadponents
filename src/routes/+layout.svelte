<script>
	import '../assets/style.css';
	import '../style.css';
	import SideMenu from '$lib/menu/SideMenu.svelte';
	// import Student from '$lib/Student.svelte';

	let tabs = [
		{
			name: 'Form',
			href: '/form'
		},
		{
			name: 'Button',
			href: '/button'
		},
		{
			name: 'Tag',
			href: '/tag'
		},
		{
			name: 'Breadcrumb',
			href: '/breadcrumb'
		},
		{
			name: 'Control',
			href: '/control'
		},
		{
			name: 'NavLink',
			href: '/navlink'
		},
		{
			name: 'Input',
			href: '/input'
		},
		{
			name: 'Select',
			href: '/select'
		},
		{
			name: 'FileUploader',
			href: '/fileuploader'
		},

		// {
		// 	name: 'Main',
		// 	href: '/',
		// },
		// {
		// 	name: 'Modal',
		// 	href: '/modal',
		// },
		// {
		// 	name: 'Textarea',
		// 	href: '/textarea',
		// },
		// {
		// 	name: 'DatePicker',
		// 	href: '/datepicker',
		// },
		{
			name: 'Table',
			href: '/table'
		}
		// {
		// 	name: 'Timeline',
		// 	href: '/timeline',
		// },
		// {
		// 	name: 'Weekly Schedule',
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
