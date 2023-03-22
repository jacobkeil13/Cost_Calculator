<script>
	export let value,
		label,
		name,
		options = [];
</script>

<p class="form-control">
	{#if label}
		<label class="label pr-4" for>{label}:</label>
	{/if}
	<select {name} id={name}>
		<option selected disabled>Select one</option>
		{#each options as option}
			<option {value}>{option}</option>
		{/each}
	</select>
</p>

<style>
	.form-control {
		margin: 0.5rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	select {
		width: 100%;
		display: block;
		padding: 0.25rem 0.5rem;
		border-width: 1px;
		border-radius: 0.25rem;
	}
</style>
