<script>
	import { current_step, validated } from '../store.js';
	import { steps } from '../constants.js';

	function incStep() {
		if (Object.keys($validated).length != 0) {
			return;
		}
		if ($current_step !== $steps.length - 1) {
			$current_step = $current_step + 1;
		}
	}

	function decStep() {
		if ($current_step !== 0) {
			$current_step = $current_step - 1;
		}
	}

	function switchStep(id) {
		current_step.set(id);
	}
</script>

<div class="flex justify-center space-x-2 mt-4 fill-white">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon
		on:click={() => switchStep(0)}
		class:active={$current_step === 0}
		type="solid"
		name="info-circle"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon
		on:click={() => switchStep(1)}
		class:active={$current_step === 1}
		name="money-withdraw"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon
		on:click={() => switchStep(2)}
		class:active={$current_step === 2}
		name="home-alt-2"
		type="solid"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon
		on:click={() => switchStep(3)}
		class:active={$current_step === 3}
		name="book"
		type="solid"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon
		on:click={() => switchStep(4)}
		class:active={$current_step === 4}
		name="car"
		type="solid"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon on:click={() => switchStep(5)} class:active={$current_step === 5} name="body" />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon
		on:click={() => switchStep(6)}
		class:active={$current_step === 6}
		name="wallet"
		type="solid"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<box-icon on:click={() => switchStep(7)} class:active={$current_step === 7} name="spreadsheet" />
</div>

<style>
	box-icon {
		cursor: pointer;
		width: 32px;
	}
	.active {
		fill: rgb(247, 192, 120);
	}
</style>
