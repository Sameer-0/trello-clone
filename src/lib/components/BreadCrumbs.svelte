<script lang="ts">
	import { page } from '$app/stores';

	const path = $page.url.pathname;
	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = path.split('/user').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath = t;
			t = t.split('/')[1];
			t = t.charAt(0).toUpperCase() + t.slice(1);
			return { label: t, href: tokenPath };
		});

		// Add a way to get home too.
	}
</script>

<div class="breadcrumb">
	<ol class="breadcrumb mt-1">
		{#each crumbs as c, i}
			{#if i == crumbs.length - 1}
				<span class="label">
					{c.label}
				</span>
			{:else}
				<li class="crumb"><a class="anchor" href={c.href}>{c.label}</a></li>
				<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			{/if}
		{/each}
	</ol>
</div>
