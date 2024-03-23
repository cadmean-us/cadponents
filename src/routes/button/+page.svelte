<script>
	import Button from '$lib/Button.svelte';
	import Check from '$lib/icons/Check.svelte';

	let disabled = true;
	$: console.log(disabled);
</script>

<h1>Default</h1>

<div class="flex gap-2">
	<div>
		<br />
		<h2>Large</h2>
		<br />

		<div class="flex gap-2">
			<Button size="lg">Button</Button>
			<Button size="lg" type="outlined" class="">Button</Button>
			<Button size="lg" type="text">Button</Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Medium</h2>
		<br />

		<div class="flex gap-2">
			<Button>Button</Button>
			<Button type="outlined" class="">Button</Button>
			<Button type="text">Button</Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Small</h2>
		<br />

		<div class="flex gap-2">
			<Button size="sm">Button</Button>
			<Button size="sm" type="outlined" class="">Button</Button>
			<Button size="sm" type="text">Button</Button>
		</div>
	</div>
</div>

<br />
<br />
<h1>Disabled</h1>
<Button
	on:click={() => {
		disabled = !disabled;
	}}
>
	{!disabled ? 'Disable' : 'Enable'}
</Button>
<div class="flex gap-2">
	<div>
		<br />
		<h2>Large</h2>
		<br />

		<div class="flex gap-2">
			<Button {disabled} size="lg">Button</Button>
			<Button {disabled} size="lg" type="outlined" class="">Button</Button>
			<Button {disabled} size="lg" type="text">Button</Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Medium</h2>
		<br />

		<div class="flex gap-2">
			<Button {disabled}>Button</Button>
			<Button {disabled} type="outlined" class="">Button</Button>
			<Button {disabled} type="text">Button</Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Small</h2>
		<br />

		<div class="flex gap-2">
			<Button {disabled} size="sm">Button</Button>
			<Button {disabled} size="sm" type="outlined" class="">Button</Button>
			<Button {disabled} size="sm" type="text">Button</Button>
		</div>
	</div>
</div>

<br />
<br />
<h1>Icons</h1>
<div class="flex gap-2">
	<div>
		<br />
		<h2>Large</h2>
		<br />

		<div class="flex gap-2">
			<Button size="lg"><Check />Button</Button>
			<Button size="lg" type="outlined" class=""><Check />Button</Button>
			<Button size="lg" type="text"><Check />Button</Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Medium</h2>
		<br />

		<div class="flex gap-2">
			<Button><Check />Button</Button>
			<Button type="outlined" class=""><Check />Button</Button>
			<Button type="text"><Check />Button</Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Small</h2>
		<br />

		<div class="flex gap-2">
			<Button size="sm"><Check />Button</Button>
			<Button size="sm" type="outlined" class=""><Check />Button</Button>
			<Button size="sm" type="text"><Check />Button</Button>
		</div>
	</div>
</div>

<br />
<br />
<h1>only Icon</h1>
<div class="flex gap-2">
	<div>
		<br />
		<h2>Large</h2>
		<br />

		<div class="flex gap-2">
			<Button size="lg"><Check /></Button>
			<Button size="lg" type="outlined" class=""><Check /></Button>
			<Button size="lg" type="text"><Check /></Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Medium</h2>
		<br />

		<div class="flex gap-2">
			<Button><Check /></Button>
			<Button type="outlined" class=""><Check /></Button>
			<Button type="text"><Check /></Button>
		</div>
	</div>
	<div>
		<br />
		<h2>Small</h2>
		<br />

		<div class="flex gap-2">
			<Button size="sm"><Check /></Button>
			<Button size="sm" type="outlined" class=""><Check /></Button>
			<Button size="sm" type="text"><Check /></Button>
		</div>
	</div>
</div>
