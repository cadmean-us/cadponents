<script>
	import Popover from '$lib/Popover.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Chevron from '$lib/icons/Chevron.svelte';
	import { fly, fade } from 'svelte/transition';
	import Check from '$lib/icons/Check.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import Chips from '$lib/chips/Chips.svelte';

	export let multiselect = false;
	export let values;
	export let selected = !multiselect ? (values && values.length > 0 ? values[0] : '') : [];
	export let label = '';
	let checked = new Array(values.length).fill(false);

	if (multiselect) {
		values.forEach((e, i) => {
			if (selected.includes(e)) checked[i] = true;
		});
	}

	$: if (selected) {
		// console.log('selected', selected);
		values.forEach((e, i) => {
			// console.log(e, selected.includes(e));
			checked[i] = selected.includes(e);
		});
	}

	let inputValue;
	if (multiselect) {
		inputValue = '';
	} else {
		inputValue = selected;
	}

	let filteredValues = values;
	let pop;
	let visible;

	const rotation = tweened(0, {
		duration: 400,
		easing: cubicOut,
	});

	$: {
		if (visible) {
			rotation.set(1);
		} else rotation.set(0);
	}

	//todo: mozilla scrollbar
	let panel;

	function selectOnFocus(node) {
		const onFocus = () => {
			node.select();
		};

		node.addEventListener('focus', onFocus);

		return {
			destroy() {
				node.removeEventListener('focus', onFocus);
			},
		};
	}

	function handleEnterPress(event) {
		if (event.key === 'Enter') {
			selected = filteredValues[0];
			inputValue = filteredValues[0];
			visible = false;
		}
	}

	$: {
		if (inputValue === '' || inputValue === (multiselect ? selected[0] : selected)) {
			filteredValues = values;
		} else {
			filteredValues = values.filter((v) => {
				return v.toLowerCase().includes(inputValue.toLowerCase());
			});
		}
	}

	function toggleSelected(value) {
		const index = selected.findIndex((item) => item === value);
		console.log(index, value, selected);
		if (index === -1) {
			selected = [...selected, value];
			console.log(selected);
		} else {
			selected = [...selected.slice(0, index), ...selected.slice(index + 1)];
		}
	}
</script>

<div class="w-[245px]">
	<div class="truncate">{label ?? ''}</div>
	<div
		bind:this={panel}
		class="rounded-c border-gray-300 border-c h-[52px] py-[12px] px-[20px] flex justify-between items-center truncate"
		on:click|stopPropagation={pop.show(panel)}
	>
		{#if multiselect}Selected: {selected.length}{/if}
		<input
			class="ml-[12px] truncate bg-transparent"
			on:keydown={handleEnterPress}
			on:focusout={() => {
				if (!multiselect) inputValue = selected;
			}}
			use:selectOnFocus
			bind:value={inputValue}
		/>
		<div style="transform: rotate({$rotation * 180}deg)">
			<Chevron size="10" />
		</div>
	</div>
	{#if multiselect}
		<Chips class="mt-[10px]" bind:data={selected} />
	{/if}
</div>

<Popover bind:visible bind:this={pop}>
	<div
		in:fly={{ y: -10, duration: 300 }}
		class="scrollbar w-[245px] bg-white rounded-c border-gray-300 border-c max-h-[188px] overflow-y-scroll"
	>
		{#each filteredValues as v, i}
			<div
				class="p-[12px] w-[237px] flex justify-between items-center w-full truncate"
				on:mousedown={() => {
					if (!multiselect) {
						selected = v;
						inputValue = v;
						visible = false;
					}
				}}
			>
				{#if multiselect}
					<Checkbox
						bind:group={selected}
						on:click={() => {
							console.log(v);
							toggleSelected(v);
						}}
					>
						<div class="w-[189px] truncate">{v}</div></Checkbox
					>
				{:else}
					<div class="w-[189px] truncate">{v}</div>
				{/if}
				{#if v === selected && !multiselect}<Check height="4" width="13" />{/if}
			</div>
		{/each}
	</div>
</Popover>

<style>
	input:focus {
		outline: none;
	}

	/* For WebKit browsers (Chrome, Safari, etc.) */
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #eaeaea;
		border-radius: 6px;
	}

	/* For Firefox */
	.scrollbar {
		scrollbar-width: thin;
	}
</style>
