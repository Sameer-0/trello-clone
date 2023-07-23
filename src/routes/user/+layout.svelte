<script>
	import { Sidebar, Header, SidebarOverlay } from '$lib/components';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<Drawer>
		<SidebarOverlay />
	</Drawer>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<main class="pt-6 px-2 md:pl-9 md:pr-2 min-h-full overflow-y-hidden">
		<slot />
	</main>
</AppShell>
