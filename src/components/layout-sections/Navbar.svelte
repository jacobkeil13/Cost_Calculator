<script>
	import USFLogo from '../misc/USFLogo.svelte';
	export let clientX;
</script>

<nav class="bg-[#384B52] h-12 text-white flex justify-between items-center">
	<div class="flex justify-between items-center w-screen max-w-5xl mx-auto px-6">
		<div class="flex space-x-3">
			<USFLogo />
			<h1 class="font-bold tracking-wider max-w-lg">UNIVERSITY OF SOUTH FLORIDA</h1>
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
	<div class="flex items-center w-screen max-w-5xl mx-auto px-6">
		<h1 class="font-semibold tracking-wide text-4xl text-white">OFFICE OF FINANCIAL AID</h1>
	</div>
</div>
