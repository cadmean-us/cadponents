<script>
	import Drawer from '$lib/Drawer.svelte';
	let isOpenRight = false;
	let isOpenLeft = false;
	let isOpenTop = false;
	let isOpenBottom = false;
</script>

<button on:click={() => (isOpenRight = true)}> Open Right Drawer </button>

<Drawer open={isOpenRight} onclose={() => (isOpenRight = false)}>
	<div class="p-4">
		<h2 class="text-lg font-bold mb-2">Menu</h2>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
</Drawer>

<button on:click={() => (isOpenLeft = true)}> Open Left Drawer </button>

<Drawer side="left" open={isOpenLeft} onclose={() => (isOpenLeft = false)}>
	<div class="p-4">
		<h2 class="text-lg font-bold mb-2">Menu</h2>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
</Drawer>

<button on:click={() => (isOpenTop = true)}> Open Top Drawer </button>

<Drawer side="top" open={isOpenTop} onclose={() => (isOpenTop = false)}>
	<div class="p-4">
		<h2 class="text-lg font-bold mb-2">Menu</h2>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
</Drawer>

<button on:click={() => (isOpenBottom = true)}> Open Bottom Drawer </button>

<Drawer side="bottom" open={isOpenBottom} onclose={() => (isOpenBottom = false)}>
	<div class="p-4">
		<h2 class="text-lg font-bold mb-2">Menu</h2>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
</Drawer>
