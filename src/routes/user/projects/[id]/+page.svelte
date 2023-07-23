<script>
	import Board from '$lib/components/Board.svelte';
	import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
</script>

<div
	class="rounded-3xl flex justify-between items-center flex-row gap-2 md:gap-5 mt-1 border-b-2 pb-2 px-6"
>
	<h1 class="md:text-3xl text-tertiary-500">Project Kanban Board</h1>
	<div class="flex gap-4">
		<button class="text-black btn btn-sm bg-[#CFE1EA] rounded-xl">
			<i class="w-7 h-7 text-slate-500"><IoIosAdd /></i>
			<p>Create board</p>
		</button>
	</div>
</div>

<div class="min-w-[80%] overflow-x-scroll pt-10 flex gap-10 flex-nowrap board-container">
	<Board count={1}/>
	<Board count={2}/>
	<Board count={3}/>
	<Board count={4}/>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}

	.board-container {
		height: calc(100vh - 170px);
		height: calc(100dvh - 170px);
	}

	@media (max-width: 1200px) {
		.board-container {
			height: calc(100vh - 180px);
			height: calc(100dvh - 180px);
		}
	}
</style>
