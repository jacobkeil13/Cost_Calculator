<script>
	export let value, label, name, options = [];
</script>

<p class="form-control">
	{#if label}
		<label class="label" for>{label}:</label>
	{/if}
	<select {name} id={name}>
        <option disabled>Select one</option>
        {#each options as option}
            <option {value}>{option}</option>
        {/each}
    </select>
</p>

<style>
	.form-control{
		margin: .5rem 0;
		text-align: left;
	}
	select {
		width: 100%;
		display: block;
		padding: 0.5rem .5rem;
		margin-top: 0.5rem;
		border-width: 1px;
		border-radius: 0.25rem;
	}
</style>