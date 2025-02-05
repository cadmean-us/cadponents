<script>
	import Tag from '$lib/Tag.svelte';
	import Placeholder from '$lib/icons/Placeholder.svelte';
</script>

<h1 class="ui-group__title">Tag</h1>

<div class="ui-group">
	<div class="ui-group__row">
		<Tag variant="success">Success</Tag>
		<Tag variant="warning" on:click={()=>{console.log('brah')}}>Warning</Tag>
		<Tag variant="error">Neutral</Tag>
	</div>

	<div class="ui-group__row">
		<Tag variant="muted" on:click={()=>{console.log('brah')}}>Muted</Tag>
		<Tag variant="accent">Accent</Tag>
		<Tag variant="neutral">Neutral</Tag>
		<Tag variant="border">Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted" disabled>Muted</Tag>
		<Tag variant="accent" disabled>Accent</Tag>
		<Tag variant="neutral" disabled>Neutral</Tag>
		<Tag variant="border" disabled>Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted">Muted <Placeholder/></Tag>
		<Tag variant="accent">Accent <Placeholder/></Tag>
		<Tag variant="neutral">Neutral <Placeholder/></Tag>
		<Tag variant="border">Border <Placeholder/></Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted" disabled>Muted <Placeholder/></Tag>
		<Tag variant="accent" disabled>Accent <Placeholder/></Tag>
		<Tag variant="neutral" disabled>Neutral <Placeholder/></Tag>
		<Tag variant="border" disabled>Border <Placeholder/></Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted"><Placeholder/> Muted</Tag>
		<Tag variant="accent"><Placeholder/> Accent</Tag>
		<Tag variant="neutral"><Placeholder/> Neutral</Tag>
		<Tag variant="border"><Placeholder/> Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted" disabled><Placeholder/> Muted</Tag>
		<Tag variant="accent" disabled><Placeholder/> Accent</Tag>
		<Tag variant="neutral" disabled><Placeholder/> Neutral</Tag>
		<Tag variant="border" disabled><Placeholder/> Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted"><Placeholder/> Muted <Placeholder/></Tag>
		<Tag variant="accent"><Placeholder/> Accent <Placeholder/></Tag>
		<Tag variant="neutral"><Placeholder/> Neutral <Placeholder/></Tag>
		<Tag variant="border"><Placeholder/> Border <Placeholder/></Tag>
	</div>
	<div class="ui-group__row">
		<Tag variant="muted" disabled><Placeholder/> Muted <Placeholder/></Tag>
		<Tag variant="accent" disabled><Placeholder/> Accent <Placeholder/></Tag>
		<Tag variant="neutral" disabled><Placeholder/> Neutral <Placeholder/></Tag>
		<Tag variant="border" disabled><Placeholder/> Border <Placeholder/></Tag>
	</div>
</div>
