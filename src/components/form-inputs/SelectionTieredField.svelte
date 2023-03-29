<script>
	export let label,
		value,
		options = {},
		extra_option;

	let styles = Object.keys(options);
</script>

<div class="form-control">
	{#if label}
		<h1 class="font-semibold mb-2">{label}</h1>
	{/if}
	<select bind:value>
		<option value="nothing" selected disabled>Select one</option>
		{#if extra_option}
			<option class={extra_option.style} value={extra_option.value}>{extra_option.label}</option>
		{/if}
		{#each styles as style}
			<optgroup label={style.charAt(0).toUpperCase() + style.slice(1)}>
				{#each options[style] as option}
					<option class="active:bg-white" value={option.value}>{option.label}</option>
				{/each}
			</optgroup>
		{/each}
	</select>
</div>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
	}

	select {
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-width: 2px;
		border-radius: 0.1rem;
	}
</style>
