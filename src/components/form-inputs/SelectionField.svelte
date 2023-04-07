<script>
	import { createEventDispatcher } from 'svelte';
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		value,
		options = [],
		handleChange = false,
		tooltip_text = '',
		link = '';

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
					class="w-[20px] fill-green-800 cursor-pointer"
					title={tooltip_text}
					name="help-circle"
					use:tooltip
				/>
			{/if}
			{#if link != ''}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<box-icon
					on:click={() => window.open(link, '_blank')}
					class="w-[20px] fill-green-800 cursor-pointer"
					name="link-external"
				/>
			{/if}
		</div>
	{/if}
	<select class:active={value === 'nothing'} bind:value on:change={onHandleEvent}>
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
	}

	select {
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-width: 2px;
		border-radius: 0.1rem;
	}

	.active {
		border-color: rgb(185 28 28);
	}
</style>
