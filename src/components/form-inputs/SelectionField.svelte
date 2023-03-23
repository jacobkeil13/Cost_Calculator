<script>
	export let label,
		value,
		options = [];
</script>

<div class="form-control">
	{#if label}
		<label class="pr-4 font-semibold text-center" for>{label}:</label>
	{/if}
	<select bind:value>
		<option value="nothing" selected disabled>Select one</option>
		{#each options as option}
			<option class="active:bg-white" value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
		display: grid;
		grid-template-columns: 100px auto;
	}

	select {
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-width: 2px;
		border-radius: 0.1rem;
	}
</style>
