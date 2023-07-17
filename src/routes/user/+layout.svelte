<script>
	import { Sidebar, Header } from '$lib/components';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	drawerStore.close();
</script>

<AppShell>
	<Drawer />
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<main class="p-3">
        <!-- {#if $page.url.pathname.includes('/dashboard/')}
             <BreadCrumbs />
        {/if} -->
		<slot />
	</main>
</AppShell>
