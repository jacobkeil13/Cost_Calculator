<script>
	export let label, value, min, max, step, concurrency;

	function handleInput(e) {
		if (parseInt(e.target.value) === null || parseInt(e.target.value) < parseInt(min)) {
			value = min;
		}
	}
</script>

<div class="form-control">
	{#if label}
		<h1 class="font-semibold">{label}</h1>
	{/if}
	<div class="flex space-x-2">
		<input type="range" {min} {max} {step} bind:value class="slider" />
		<div class="flex flex-col">
			<div class="flex">
				<label for="value" class="text-xl">$</label>
				<input
					on:input={handleInput}
					type="number"
					name="value"
					{min}
					{max}
					{step}
					bind:value
					class="border-green-900 border-b-2 px-1 bg-transparent text-xl font-medium"
				/>
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
</style>
