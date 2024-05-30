<script>
	import Table from '$lib/Table.svelte';

	let headers = [
		{ key: 'name', sort: false, value: 'Name' },
		{ key: 'email', value: 'Email' },
		{ key: 'phone', value: 'Phone' },
		{ key: 'value', value: 'Value' },
	];

	let rows = [
		{ id: 0, name: 'name', email: '@', phone: '+111', value: '10' },
		{ id: 16, name: 'name16', phone: '+116', email: 'email16@example.com', value: '11' },
		{ id: 3, name: 'name3', phone: '+113', email: 'email3@example.com', value: '20' },
		{ id: 20, name: 'name20', phone: '+110', email: 'email20@example.com', value: '10' },
		{ id: 17, name: 'name17', phone: '+117', email: 'email17@example.com', value: '10' },
		{ id: 5, name: 'name5', phone: '+115', email: 'email5@example.com', value: '30' },
		{ id: 6, name: 'name6', phone: '+116', email: 'email6@example.com', value: '30' },
		{ id: 11, name: 'name11', phone: '+111', email: 'email11@example.com', value: '10' },
		{ id: 8, name: 'name8', phone: '+118', email: 'email8@example.com', value: '10' },
		{ id: 10, name: 'name10', phone: '+110', email: 'email10@example.com', value: '10' },
		{ id: 9, name: 'name9', phone: '+119', email: 'email9@example.com', value: '10' },
		{ id: 12, name: 'name12', phone: '+112', email: 'email12@example.com', value: '10' },
		{ id: 2, name: 'name2', phone: '+112', email: 'email2@example.com', value: '10' },
		{ id: 13, name: 'name13', phone: '+113', email: 'email13@example.com', value: '40' },
		{ id: 14, name: 'name14', phone: '+114', email: 'email14@example.com', value: '10' },
		{ id: 7, name: 'name7', phone: '+117', email: 'email7@example.com', value: '10' },
		{ id: 15, name: 'name15', phone: '+115', email: 'email15@example.com', value: '50' },
		{ id: 1, name: 'name2', phone: '+112', email: '@2', value: '10' },
		{ id: 18, name: 'name18', phone: '+118', email: 'email18@example.com', value: '10' },
		{ id: 19, name: 'name19', phone: '+119', email: 'email19@example.com', value: '10' },
		{ id: 4, name: 'name4', phone: '+114', email: 'email4@example.com', value: '10' },
		{ id: 21, name: 'name21', phone: '+111', email: 'email21@example.com', value: '10' }
	];

	const onActionsClick = (row) => {};

	let title = 'Instructors';
	let totalAmount = '100';
</script>

<Table {headers} {rows} sortable maxRows={5}/>
