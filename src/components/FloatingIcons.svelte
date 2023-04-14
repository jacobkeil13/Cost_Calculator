<script>
	import { goto } from '$app/navigation';
	import { total, validated, current_step } from '../store';
	export let clientX, step;

	function switchStep(id) {
		if (Object.keys($validated).length != 0) {
			return;
		}
		current_step.set(id);
		setTimeout(() => {
			goto('#start-content');
		}, 50);
	}
</script>

{#if clientX > 960}
	<div
		class="{$total === 0
			? 'top-[85px]'
			: 'top-[114px]'} absolute flex flex-col -left-[15px] space-y-[8px]"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(0)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 0}
			class:other={step !== 0}
		>
			<box-icon type="solid" name="info-circle" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(1)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 1}
			class:other={step !== 1}
		>
			<box-icon name="dollar-circle" type="solid" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(2)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 2}
			class:other={step !== 2}
		>
			<box-icon name="home-alt-2" type="solid" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(2)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 2}
			class:other={step !== 2}
		>
			<box-icon name="bowl-hot" type="solid" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(3)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 3}
			class:other={step !== 3}
		>
			<box-icon name="book" type="solid" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(4)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 4}
			class:other={step !== 4}
		>
			<box-icon name="car" type="solid" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(5)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 5}
			class:other={step !== 5}
		>
			<box-icon name="body" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(6)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 6}
			class:other={step !== 6}
		>
			<box-icon name="wallet" type="solid" class="validate" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => switchStep(7)}
			class="validate flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 7}
			class:other={step !== 7}
		>
			<box-icon name="spreadsheet" type="solid" class="validate" />
		</div>
	</div>
{/if}

<style>
	box-icon {
		fill: rgb(58, 58, 58);
		cursor: pointer;
		width: 20px;
		height: 20px;
	}

	.active {
		border: 3px #006747 solid;
	}

	.active > box-icon {
		fill: #006747;
	}

	.other {
		border: 3px #e1e1e1 solid;
	}

	.other > box-icon {
		fill: #9e9e9e;
	}
</style>
