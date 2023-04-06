<script>
	import { createEventDispatcher } from 'svelte';
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		value,
		options = [],
		handleChange = false,
		tooltip_text = '',
		error = undefined,
		error_text = '';

	const dispatch = createEventDispatcher();
	function onHandleEvent() {
		if (handleChange) {
			dispatch('handle');
		}
	}
</script>

<div class="form-control">
	{#if label}
		<div class="flex space-x-3">
			<h1 class="font-semibold mb-2">{label}</h1>
			{#if tooltip_text != ''}
				<box-icon
					class="w-[20px] fill-green-800"
					title={tooltip_text}
					name="help-circle"
					use:tooltip
				/>
			{/if}
		</div>
	{/if}
	<select bind:value on:change={onHandleEvent}>
		<option value="nothing" selected disabled>Select one</option>
		{#each options as option}
			<option class="active:bg-white" value={option.value}>{option.label}</option>
		{/each}
	</select>
	{#if error != null}
		<h1 class="text-red-700">{error_text}</h1>
	{/if}
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

	select::selection {
		color: red;
	}
</style>
