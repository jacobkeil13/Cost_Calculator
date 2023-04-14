<script>
	import { createEventDispatcher } from 'svelte';
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		value,
		options = [],
		handleChange = false,
		tooltip_text = '',
		tooltip_text_link = '',
		link = '',
		isValidated = '';

	const dispatch = createEventDispatcher();
	function onHandleEvent() {
		if (handleChange) {
			dispatch('handle');
		}
	}
</script>

<div class="form-control">
	{#if label}
		<div class="flex items-center space-x-3">
			<h1 class="font-medium text-xl mb-2">
				{label}
				{#if tooltip_text != ''}
					<box-icon
						class="w-[20px] pt-[6px] fill-green-800 cursor-pointer"
						title={tooltip_text}
						name="help-circle"
						use:tooltip
					/>
				{/if}
				{#if link != ''}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<box-icon
						on:click={() => window.open(link, '_blank')}
						title={tooltip_text_link}
						class="w-[20px] pt-[6px] fill-green-800 cursor-pointer"
						name="link-external"
						use:tooltip
					/>
				{/if}
			</h1>
		</div>
	{/if}
	<select
		class={isValidated}
		class:active={value === 'nothing'}
		bind:value
		on:change={onHandleEvent}
	>
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
		border-radius: 0.375rem;
	}

	.active {
		border-color: rgb(185 28 28);
	}

	@keyframes shake {
		0% {
			margin-left: 0rem;
		}
		25% {
			margin-left: 0.2rem;
		}
		75% {
			margin-left: -0.2rem;
		}
		100% {
			margin-left: 0rem;
		}
	}

	.validation {
		animation-name: shake;
		animation-duration: 0.2s;
		animation-timing-function: ease;
		animation-iteration-count: 1;
	}
</style>
