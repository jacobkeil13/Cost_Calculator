<script>
	export let value,
		label,
		type = 'text';

	function typeAction(node) {
		node.type = type;
	}
</script>

<div class="form-control">
	{#if label}
		<label class="label pr-4 font-semibold text-left" for>{label}:</label>
	{/if}
	<input use:typeAction class="input" bind:value />
</div>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
		display: grid;
		grid-template-columns: 100px auto;
	}
	.input {
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-width: 1px;
		border-radius: 0.1rem;
		border-color: rgb(177, 177, 177);
	}
</style>
