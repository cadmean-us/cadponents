<script>
	import Tag from '$lib/Tag.svelte';
	import Placeholder from '$lib/icons/Placeholder.svelte';
</script>

<h1 class="ui-group__title">Tag</h1>

<div class="ui-group">
	<div class="ui-group__row">
		<Tag type="muted">Muted</Tag>
		<Tag type="accent">Accent</Tag>
		<Tag type="neutral">Neutral</Tag>
		<Tag type="border">Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted" disabled>Muted</Tag>
		<Tag type="accent" disabled>Accent</Tag>
		<Tag type="neutral" disabled>Neutral</Tag>
		<Tag type="border" disabled>Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted">Muted <Placeholder/></Tag>
		<Tag type="accent">Accent <Placeholder/></Tag>
		<Tag type="neutral">Neutral <Placeholder/></Tag>
		<Tag type="border">Border <Placeholder/></Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted" disabled>Muted <Placeholder/></Tag>
		<Tag type="accent" disabled>Accent <Placeholder/></Tag>
		<Tag type="neutral" disabled>Neutral <Placeholder/></Tag>
		<Tag type="border" disabled>Border <Placeholder/></Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted"><Placeholder/> Muted</Tag>
		<Tag type="accent"><Placeholder/> Accent</Tag>
		<Tag type="neutral"><Placeholder/> Neutral</Tag>
		<Tag type="border"><Placeholder/> Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted" disabled><Placeholder/> Muted</Tag>
		<Tag type="accent" disabled><Placeholder/> Accent</Tag>
		<Tag type="neutral" disabled><Placeholder/> Neutral</Tag>
		<Tag type="border" disabled><Placeholder/> Border</Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted"><Placeholder/> Muted <Placeholder/></Tag>
		<Tag type="accent"><Placeholder/> Accent <Placeholder/></Tag>
		<Tag type="neutral"><Placeholder/> Neutral <Placeholder/></Tag>
		<Tag type="border"><Placeholder/> Border <Placeholder/></Tag>
	</div>
	<div class="ui-group__row">
		<Tag type="muted" disabled><Placeholder/> Muted <Placeholder/></Tag>
		<Tag type="accent" disabled><Placeholder/> Accent <Placeholder/></Tag>
		<Tag type="neutral" disabled><Placeholder/> Neutral <Placeholder/></Tag>
		<Tag type="border" disabled><Placeholder/> Border <Placeholder/></Tag>
	</div>
</div>
