<script>
	export let label, value, min, max, step;

	function handleInput(e) {
		if (parseInt(e.target.value) > parseInt(max)) {
			value = max;
		}
	}
</script>

<div class="form-control">
	{#if label}
		<h1 class="font-semibold">{label}</h1>
	{/if}
	<div class="flex space-x-2">
		<input type="range" {min} {max} {step} bind:value class="slider" />
		<input
			on:input={handleInput}
			type="number"
			name="value"
			{min}
			{max}
			{step}
			bind:value
			class="border-green-900 border-b-2 px-1 bg-transparent w-[80px] text-xl font-medium"
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
