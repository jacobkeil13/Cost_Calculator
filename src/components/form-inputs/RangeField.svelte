<script>
	export let label,
		value = 10;
</script>

<div class="form-control">
	{#if label}
		<label class="label pr-4 font-semibold text-left" for>{label}:</label>
	{/if}
	<input type="range" min="1" max="18" bind:value class="slider" />
	<p class="text-center bg-[#006747] rounded-full ml-2 text-white">{value}</p>
</div>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
		display: grid;
		grid-template-columns: 100px auto 50px;
	}

	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 0.6rem;
		border-radius: 10px;
		background: #006747;
		outline: none;
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
		width: 0.75rem;
		height: 1.5rem;
		background: #04aa6d;
		cursor: pointer;
		border-radius: 3px;
	}

	.slider::-moz-range-thumb {
		width: 1rem;
		height: 1.5rem;
		background: #04aa6d;
		cursor: pointer;
		border-radius: 3px;
	}
</style>
