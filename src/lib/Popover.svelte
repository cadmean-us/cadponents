<script>
	import { afterUpdate } from 'svelte';

	export let target;

	$: if (target) {
		afterUpdate(() => {
			console.log('inside', target.getBoundingClientRect());
		});
	}
</script>

<div><slot /></div>
