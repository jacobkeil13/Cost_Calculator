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
			<div class="space-x-3 text-lg">
				<a class="border-gray-500 border-r-2 px-3" href="http://">MyUSF</a>
				<a class="" href="http://">Directory</a>
			</div>
		{/if}
	</div>
</nav>
<div class="bg-[#3F565E] h-[120px] flex justify-between items-center">
	<div class="flex flex-col w-screen max-w-5xl mx-auto px-6">
		<h1 class="font-semibold tracking-wide {clientX < 960 ? 'text-3xl' : 'text-4xl'} text-white">
			OFFICE OF FINANCIAL AID
		</h1>
		<p class="text-[#8cdd78] font-semibold text-2xl">USF COST CALCULATOR</p>
	</div>
</div>
