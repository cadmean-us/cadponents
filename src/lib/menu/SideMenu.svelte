<script>import SideMenuTab from "./SideMenuTab.svelte";
	export let activeColor = "white";
	export let inactiveColor = "#66667C";
	export let padding = 30;
	export let tabs = [];
	</script>
	
	<div
		aria-label="Sidebar"
		{...$$restProps}
		class={'aside ' + $$props.class ?? ''}
		id="default-sidebar"
	>
		<div class={'aside__inner ' + $$props.class ?? ''} style="padding: 0 {padding}px;">
			<slot name="title" />
			<ul class="aside__list" style="margin-top: {padding}px !important">
				{#each tabs as tab}
					<SideMenuTab {...tab} {inactiveColor} {activeColor} {padding} />
				{/each}
			</ul>
			<div class="aside__footer">
				<slot name="footer" />
			</div>
		</div>
	</div>
	
	<style lang="scss">
		.aside {
			position: sticky;
			top: 0;
			left: 0;
			height: 100vh;
			width: 246px;
			background-color: #12131C;
			&__list {
				font-weight: 600;
			}
			&__footer {
				position: fixed;
				bottom: 0;
			}
			&__inner {
				height: 100%;
				width: 100%;
				padding: 28px;
				background-color: #12131C;
				overflow-y: auto;
				&::-webkit-scrollbar {
					width: 0;
				}
			}
		}
	</style>