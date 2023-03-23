<script>
	let info_is_open = true;

	const toggleMessage = () => {
		info_is_open = !info_is_open;
	};
</script>

<div class="grid grid-cols-[1fr_auto] text-md p-3 rounded-md text-white bg-[#006746d3]">
	{#if info_is_open}
		<p>
			Use our Cost Calculator to get an estimate of your college expenses. It will take about 10
			minutes to crunch the numbers, but you will be able to understand how much your USF education
			will cost and what options are available if you need more funding. Pre-arrival deposits
			(admissions, housing, etc.) are not included in the calculator results. Note: Tuition
			calculations include $37 in flat fees charged to Tampa campus students per semester. St.
			Petersburg and Sarasota-Manatee campus students pay $17 in flat fees per semester.
		</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<box-icon on:click={toggleMessage} class="fill-white cursor-pointer" name="chevron-up" />
	{:else}
		<p class="">Click to read extra information...</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<box-icon on:click={toggleMessage} class="fill-white cursor-pointer" name="chevron-down" />
	{/if}
</div>
