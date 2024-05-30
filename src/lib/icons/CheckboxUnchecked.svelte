<script>
	export let size = 20;
	export let color = '#000';
</script>

<svg
	{...$$restProps}
	height={size}
	width={size}
	viewBox="0 0 20 20"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667ZM4.16667 15.8333V4.16667H15.8333V15.8333H4.16667Z"
		fill={color}
	/>
</svg>
