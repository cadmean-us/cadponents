<script>
	export let size = 20;
</script>

<svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		class="loading-dot dot1"
		d="M4.16669 11.6667C4.16669 12.1269 4.53978 12.5 5.00002 12.5C5.46026 12.5 5.83335 12.1269 5.83335 11.6667C5.83335 11.2064 5.46026 10.8333 5.00002 10.8333C4.53978 10.8333 4.16669 11.2064 4.16669 11.6667Z"
		stroke="#A8AFB5"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		class="loading-dot dot2"
		d="M9.16669 10C9.16669 10.4602 9.53978 10.8333 10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10C10.8334 9.53976 10.4603 9.16667 10 9.16667C9.53978 9.16667 9.16669 9.53976 9.16669 10Z"
		stroke="#A8AFB5"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		class="loading-dot dot3"
		d="M14.1667 8.33333C14.1667 8.79357 14.5398 9.16667 15 9.16667C15.4603 9.16667 15.8334 8.79357 15.8334 8.33333C15.8334 7.8731 15.4603 7.5 15 7.5C14.5398 7.5 14.1667 7.8731 14.1667 8.33333Z"
		stroke="#A8AFB5"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style>
	@keyframes jump {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.loading-dot {
		transform-origin: center;
		transform-box: fill-box;
	}

	.dot1 {
		animation: jump 1s infinite;
	}

	.dot2 {
		animation: jump 1s 0.2s infinite;
	}

	.dot3 {
		animation: jump 1s 0.4s infinite;
	}
</style>
