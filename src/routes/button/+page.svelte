<script>
	import Button from '$lib/Button.svelte';
	import Placeholder from '$lib/icons/Placeholder.svelte';
	import { Toggle } from '$lib';

	let loading = true;
</script>

<h1 class="ui-group__title">Button</h1>
<Toggle bind:checked={loading} />
{loading}
<br />
<div class="ui-group">
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button
				size="lg"
				variant="filled"
				class=""
				{loading}
				on:click={() => {
					console.log('resr');
				}}
			>
				Large
			</Button>
			<Button size="lg" variant="outlined">Large</Button>
			<Button size="lg" variant="ghosted">Large</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled">Medium</Button>
			<Button size="md" variant="outlined">Medium</Button>
			<Button size="md" variant="ghosted">Medium</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled">Small</Button>
			<Button size="sm" variant="outlined">Small</Button>
			<Button size="sm" variant="ghosted">Small</Button>
		</div>
	</div>

	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled" disabled>Large</Button>
			<Button size="lg" variant="outlined" disabled>Large</Button>
			<Button size="lg" variant="ghosted" disabled>Large</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled" disabled>Medium</Button>
			<Button size="md" variant="outlined" disabled>Medium</Button>
			<Button size="md" variant="ghosted" disabled>Medium</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled" disabled>Small</Button>
			<Button size="sm" variant="outlined" disabled>Small</Button>
			<Button size="sm" variant="ghosted" disabled>Small</Button>
		</div>
	</div>
	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled"><Placeholder /> Large</Button>
			<Button size="lg" variant="outlined"><Placeholder /> Large</Button>
			<Button size="lg" variant="ghosted"><Placeholder /> Large</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled"><Placeholder /> Medium</Button>
			<Button size="md" variant="outlined"><Placeholder /> Medium</Button>
			<Button size="md" variant="ghosted"><Placeholder /> Medium</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled"><Placeholder /> Small</Button>
			<Button size="sm" variant="outlined"><Placeholder /> Small</Button>
			<Button size="sm" variant="ghosted"><Placeholder /> Small</Button>
		</div>
	</div>

	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled" disabled><Placeholder /> Large</Button>
			<Button size="lg" variant="outlined" disabled><Placeholder /> Large</Button>
			<Button size="lg" variant="ghosted" disabled><Placeholder /> Large</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled" disabled><Placeholder /> Medium</Button>
			<Button size="md" variant="outlined" disabled><Placeholder /> Medium</Button>
			<Button size="md" variant="ghosted" disabled><Placeholder /> Medium</Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled" disabled><Placeholder /> Small</Button>
			<Button size="sm" variant="outlined" disabled><Placeholder /> Small</Button>
			<Button size="sm" variant="ghosted" disabled><Placeholder /> Small</Button>
		</div>
	</div>

	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled">Large <Placeholder /></Button>
			<Button size="lg" variant="outlined">Large <Placeholder /></Button>
			<Button size="lg" variant="ghosted">Large <Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled">Medium <Placeholder /></Button>
			<Button size="md" variant="outlined">Medium <Placeholder /></Button>
			<Button size="md" variant="ghosted">Medium <Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled">Small <Placeholder /></Button>
			<Button size="sm" variant="outlined">Small <Placeholder /></Button>
			<Button size="sm" variant="ghosted">Small <Placeholder /></Button>
		</div>
	</div>

	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled" disabled>Large <Placeholder /></Button>
			<Button size="lg" variant="outlined" disabled>Large <Placeholder /></Button>
			<Button size="lg" variant="ghosted" disabled>Large <Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled" disabled>Medium <Placeholder /></Button>
			<Button size="md" variant="outlined" disabled>Medium <Placeholder /></Button>
			<Button size="md" variant="ghosted" disabled>Medium <Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled" disabled>Small <Placeholder /></Button>
			<Button size="sm" variant="outlined" disabled>Small <Placeholder /></Button>
			<Button size="sm" variant="ghosted" disabled>Small <Placeholder /></Button>
		</div>
	</div>

	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled"><Placeholder /></Button>
			<Button size="lg" variant="outlined"><Placeholder /></Button>
			<Button size="lg" variant="ghosted"><Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled"><Placeholder /></Button>
			<Button size="md" variant="outlined"><Placeholder /></Button>
			<Button size="md" variant="ghosted"><Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled"><Placeholder /></Button>
			<Button size="sm" variant="outlined"><Placeholder /></Button>
			<Button size="sm" variant="ghosted"><Placeholder /></Button>
		</div>
	</div>

	<div class="ui-group__row">
		<div class="ui-group__row-inner">
			<Button size="lg" variant="filled" disabled><Placeholder /></Button>
			<Button size="lg" variant="outlined" disabled><Placeholder /></Button>
			<Button size="lg" variant="ghosted" disabled><Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="md" variant="filled" disabled><Placeholder /></Button>
			<Button size="md" variant="outlined" disabled><Placeholder /></Button>
			<Button size="md" variant="ghosted" disabled><Placeholder /></Button>
		</div>
		<div class="ui-group__row-inner">
			<Button size="sm" variant="filled" disabled><Placeholder /></Button>
			<Button size="sm" variant="outlined" disabled><Placeholder /></Button>
			<Button size="sm" variant="ghosted" disabled><Placeholder /></Button>
		</div>
	</div>
</div>

<style>
</style>
