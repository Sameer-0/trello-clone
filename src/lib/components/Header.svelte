<script lang="ts">
	import { Avatar, LightSwitch, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerSettings: DrawerSettings = {
		bgDrawer: 'bg-purple-900 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-[250px]',
		padding: 'pr-4',
		rounded: 'rounded-xl'
	};

	let buttonElement: HTMLButtonElement;
	let isOpen = false;
	function handleClick() {
		isOpen = !isOpen;
		buttonElement.classList.toggle('opened');
		buttonElement.setAttribute('aria-expanded', buttonElement.classList.contains('opened') + '');

		drawerStore.open(drawerSettings);
	}
</script>

<header class="h-16 shadow-xl app-bar flex flex-col bg-surface-100-800-token">
	<div class="flex items-center justify-between pr-5">
		<button class="hidden sm:block" />
		<button
			class:opened={isOpen}
			bind:this={buttonElement}
			class="block sm:hidden"
			on:click={handleClick}
			aria-label="Main Menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
				/>
			</svg>
		</button>
		<div class="w-1/3">
			<input
				type="search"
				placeholder="Search..."
				class="input variant-form-material rounded-3xl"
			/>
		</div>
		<div class="w-36 flex gap-5 justify-end items-center">
			<LightSwitch />
			<Avatar
				initials="SS"
				border="border-2 border-surface-300-600-token hover:!border-primary-500"
				src="https://tse3.mm.bing.net/th?id=OIP.UYtoA1kbuiWmh3QFGHUgjAAAAA&pid=Api&P=0&h=180"
				width="w-[40%]"
				rounded="rounded-full"
			/>
		</div>
	</div>
</header>
