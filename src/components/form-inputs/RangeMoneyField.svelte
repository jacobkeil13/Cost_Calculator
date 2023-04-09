<script>
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		value,
		min,
		max,
		step,
		concurrency,
		disabled = false,
		tooltip_text = '',
		link = '',
		canDelete = false;

	let clientX;

	function handleInput(e) {
		if (parseInt(e.target.value) === null || parseInt(e.target.value) < parseInt(min)) {
			value = min;
		}
	}
</script>

<svelte:window bind:outerWidth={clientX} />

<div class="form-control">
	{#if label}
		<div class="flex space-x-3">
			<h1 class="font-semibold">{label}</h1>
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
	<div class="flex space-x-2">
		{#if clientX > 960}
			<input
				{disabled}
				type="range"
				{min}
				{max}
				{step}
				bind:value
				class="slider"
				class:faded={disabled}
			/>
		{/if}
		<div class="flex flex-col">
			<div class="flex">
				<label for="value" class="text-xl">$</label>
				{#if canDelete}
					<input
						{disabled}
						on:input={handleInput}
						type="number"
						name="value"
						{min}
						{max}
						{step}
						bind:value
						class="border-green-900 border-b-2 px-1 bg-transparent text-xl font-medium {clientX >
						960
							? 'w-[80px]'
							: `w-[calc(100vw-100px)]`}"
						class:faded={disabled}
					/>
				{:else}
					<input
						{disabled}
						on:input={handleInput}
						type="number"
						name="value"
						{min}
						{max}
						{step}
						bind:value
						class="border-green-900 border-b-2 px-1 bg-transparent text-xl font-medium {clientX >
						960
							? 'w-[80px]'
							: `w-[calc(100vw-56px)]`}"
						class:faded={disabled}
					/>
				{/if}
			</div>
			<p class="text-sm">{concurrency}</p>
		</div>
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
		width: 1.25rem;
		height: 1.25rem;
		background: #006747;
		border: none;
		cursor: pointer;
		border-radius: 50%;
	}

	input[type='number']:focus {
		outline: none;
	}

	.faded {
		opacity: 50%;
	}
</style>
