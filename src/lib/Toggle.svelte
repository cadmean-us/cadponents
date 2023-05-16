<script>
	export let checked = false;
	export let color = '#2196F3';

	//todo: make animations in svelte style
</script>

<label class="switch">
	<input bind:checked on:change type="checkbox" />
	<span class="slider" />
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 51px;
		height: 31px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 27px;
		width: 27px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: #192c6a;
	}

	input:checked + .slider:before {
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}
</style>
