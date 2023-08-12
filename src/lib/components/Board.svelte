<script lang="ts">
	import BoardCard from './BoardCard.svelte';
	import { MoreVertical, Plus } from 'lucide-svelte';
	import type { boardColumns, task } from '$lib/utils/types';
	import { dndzone } from 'svelte-dnd-action';
	import { boardStore } from '$lib/stores';

	export let board: boardColumns;
	$: count = board.tasks.length;


</script>

<div class="board-title flex-none w-72" {...$$props}>
	<div class="py-3 px-4 rounded-lg flex justify-between items-center mb-6 bg-tertiary-active-token">
		<p>{board.name} ({count})</p>
		<div class="flex gap-2">
			<button title="Add a Task" class="w-6 h-6"><Plus /></button>
			<button title="More" class="w-6 h-6"><MoreVertical /></button>
		</div>
	</div>
	<ul class="flex flex-col gap-4 overflow-y-auto">
		{#each board.tasks as task(task.id)}
			<BoardCard data={task} />
		{/each}
	</ul>
</div>
