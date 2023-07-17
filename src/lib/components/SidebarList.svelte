<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let label: string;
	export let icon: string | null;
	$: active = $page.url.pathname === href;

	$: console.log($page);
</script>

<li
	class:bg-primary-active-token={active}
	class="hover:bg-primary-hover-token w-[80%] mx-auto rounded-md text-lg my-2 cursor-pointer"
>
	<a {href} class="flex p-3 w-full gap-5 justify-center">
		<div class="w-10 h-7">
			{@html icon}
		</div>
		<div
			class="w-full pr-2 hidden md:block font-semibold dark:border-black"
			class:border-r-[3px]={active}
		>
			{label}
		</div>
	</a>
</li>
