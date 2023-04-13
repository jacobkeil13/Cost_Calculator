<script>
	import USFLogo from '../misc/USFLogo.svelte';
	export let clientX;
</script>

<nav class="bg-[#384B52] h-12 text-white flex justify-between items-center">
	<div class="flex justify-between items-center w-screen max-w-5xl mx-auto px-6">
		<div class="flex space-x-3">
			<USFLogo />
			{#if clientX > 960}
				<h1 class="font-bold tracking-wider max-w-lg">UNIVERSITY OF SOUTH FLORIDA</h1>
			{/if}
		</div>
		{#if clientX < 960}
			<box-icon name="menu" class="fill-white" />
		{:else}
			<div class="flex items-center space-x-3 text-lg">
				<a class="border-gray-500 border-r-2 px-3" href="http://">MyUSF</a>
				<a class="" href="http://">Directory</a>
				<box-icon name="search" class="fill-white cursor-pointer" />
			</div>
		{/if}
	</div>
</nav>
<div class="bg-[#3F565E] h-[120px] flex justify-between items-center">
	<div class="flex w-screen justify-between max-w-5xl mx-auto px-6">
		<div>
			<h1 class="font-semibold tracking-wide {clientX < 960 ? 'text-2xl' : 'text-4xl'} text-white">
				<a class="hover:underline" href="https://www.usf.edu/financial-aid/" target="_blank"
					>OFFICE OF FINANCIAL AID</a
				>
			</h1>
			<p class="text-[#8cdd78] font-semibold {clientX < 960 ? 'text-xl' : 'text-2xl'}">
				USF COST CALCULATOR
			</p>
		</div>
		{#if clientX > 960}
			<div id="give" class="flex items-center space-x-3 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 868.32 488"
					aria-hidden="true"
					class="w-[50px]"
					><polygon
						class="donate_iconPart fill-[#9CCB3B]"
						points="704 0 526 0 690.32 244 526 488 704 488 868.32 244 704 0"
					/><polygon
						class="donate_iconPart fill-white"
						points="441 0 263 0 427.32 244 263 488 441 488 605.32 244 441 0"
					/><polygon
						class="donate_iconPart fill-[#9CCB3B]"
						points="178 0 0 0 164.32 244 0 488 178 488 342.32 244 178 0"
					/></svg
				>
				<h1 class="text-white text-xl hover:underline">GIVE NOW</h1>
			</div>
		{/if}
	</div>
</div>

<style>
	svg {
		transition: all 0.2s ease-in-out;
	}
	#give:hover > svg {
		transform: translateX(0.5rem);
	}
</style>
