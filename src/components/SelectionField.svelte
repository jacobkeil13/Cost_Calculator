<script>
	import { onMount } from 'svelte';

	export let label,
		value,
		options = [];
</script>

<p class="form-control">
	{#if label}
		<label class="label pr-4 font-semibold text-left" for>{label}:</label>
	{/if}
	<select bind:value>
		<option value="nothing" selected disabled>Select one</option>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</p>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
		display: grid;
		grid-template-columns: max-content auto;
	}

	select {
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-width: 2px;
		border-radius: 0.1rem;
	}
</style>
