<script lang="ts">
	import { ProjectCard } from '$lib/components';
	import { Modal } from '@skeletonlabs/skeleton';
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
</script>

<div class="flex gap-5 md:gap-20 items-center">
	<h1 class="text-xl md:text-3xl font-thin text-[#3E3E40] dark:text-[#d1c5c5]">All Projects</h1>
	<button class=" btn-sm md:btn-lg btn bg-primary-500 text-white dark:text-black">
		<span><div class="w-6 h-6"><FaPlus /></div></span>
		<span>New Project</span>
	</button>
</div>
<Modal />
<div
	class="card-wrapper lg:px-10 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:gap-10"
>
	<ProjectCard />
</div>
