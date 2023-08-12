<script lang="ts">
	import type { task } from '$lib/utils/types';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { ChevronUpCircle, Clock, MoreVertical } from 'lucide-svelte';
	// import { draggable } from '$lib/utils/dnd';
	export let data: task;

	const { id, title, description, scheduleDate, prority, createdDate } = data;
</script>

<div class="card variant-glass-surface pb-4 rounded-lg px-4">
	<div class="pb-2 py-4 flex items-center justify-between border-b-[0.5px] border-slate-400">
		<h5 class="text-lg">{title}</h5>
		<button class="w-6 h-6">
			<MoreVertical />
		</button>
	</div>
	<div class="truncate-2-lines py-4 text-sm dark:text-[#aab1b8]">
		{description}
	</div>
	<div class="mt-5 pb-3 flex justify-between items-center">
		<div class="flex gap-2">
			<div class="w-4 h-4 dark:text-slate-500">
				<Clock size={18} />
			</div>
			<span class="text-xs font-light break-words">{scheduleDate}</span>
		</div>
		<div class="flex items-center">
			<div class="w-6 h-6 text-red-700 flex items-end">
				<ChevronUpCircle size={20} />
			</div>
			<p class="text-sm">{prority}</p>
		</div>
	</div>
	<hr />
	<div class="border-black pt-4 pb-2 pl-2 flex items-center justify-between">
		<div class="flex">
			<Avatar
				class="w-6 m-[-5px]"
				src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
				initials="AB"
			/>
			<Avatar
				class="w-6 m-[-5px]"
				src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
				initials="AB"
			/>
			<Avatar
				class="w-6 m-[-5px]"
				src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
				initials="AB"
			/>
			<Avatar
				class="w-6 m-[-5px]"
				src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
				initials="AB"
			/>
		</div>
		<div class="text-xs dark:text-[#aab1b8]">
			{createdDate}
		</div>
	</div>
</div>

<style>
	hr {
		display: block;
		height: 3px;
		border: 0;
		border-top: 1px solid black;
		padding: 0;
	}
</style>
