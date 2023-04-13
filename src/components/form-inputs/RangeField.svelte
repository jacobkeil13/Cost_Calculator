<script>
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		value,
		min,
		max,
		step,
		tooltip_text = '';
	let clientX;

	function handleInput(e) {
		if (parseInt(e.target.value) > parseInt(max)) {
			value = max;
		}
		if (parseInt(e.target.value) < parseInt(min)) {
			value = min;
		}
	}
</script>

<svelte:window bind:outerWidth={clientX} />

<div class="form-control">
	{#if label}
		<div class="flex space-x-3">
			<h1 class="font-medium text-xl">
				{label}
				{#if tooltip_text != ''}
					<box-icon
						class="w-[20px] pt-[6px] fill-green-800 cursor-pointer"
						title={tooltip_text}
						name="help-circle"
						use:tooltip
					/>
				{/if}
			</h1>
		</div>
	{/if}
	<div class="flex space-x-2">
		{#if clientX > 960}
			<input type="range" {min} {max} {step} bind:value class="slider" />
		{/if}
		<input
			on:input={handleInput}
			type="number"
			name="value"
			{min}
			{max}
			{step}
			bind:value
			class="border-green-900 border-b-2 px-1 bg-transparent text-xl font-medium {clientX > 960
				? 'w-[80px]'
				: 'w-[calc(100vw-3rem)]'}"
		/>
	</div>
</div>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
	}

	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 0.6rem;
		border-radius: 2px;
		background-color: #00674681;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
		margin: auto;
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.25rem;
		height: 1.25rem;
		background: #006747;
		cursor: pointer;
		border-radius: 50%;
		z-index: 2;
	}

	.slider::-moz-range-thumb {
		border: none;
		width: 1.25rem;
		height: 1.25rem;
		background: #006747;
		cursor: pointer;
		border-radius: 50%;
	}
</style>
