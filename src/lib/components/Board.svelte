<script lang="ts">
	import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
	import IoMdMore from 'svelte-icons/io/IoMdMore.svelte';
	import BoardCard from './BoardCard.svelte';
    export let count = 0;
</script>

<div class="board-title flex-none w-72">
	<div class="py-3 px-4 rounded-lg flex justify-between items-center mb-6 bg-tertiary-active-token">
		<p>New Tasks ({count})</p>
		<div class="flex gap-2">
			<button title="Add a Task" class="w-6 h-6"><IoIosAdd /></button>
			<button title="More" class="w-6 h-6"><IoMdMore /></button>
		</div>
	</div>
	<ul class="flex flex-col gap-4 overflow-y-auto">
		<BoardCard />
		<BoardCard />
		<BoardCard />
		<BoardCard />
		<BoardCard />
		<BoardCard />
		<BoardCard />
		<BoardCard />
		<BoardCard />
	</ul>
</div>
