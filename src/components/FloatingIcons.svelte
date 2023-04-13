<script>
	import { total } from '../store';
	export let clientX, step;
</script>

{#if clientX > 960}
	<div
		class="{$total === 0
			? 'top-[85px]'
			: 'top-[114px]'} absolute flex flex-col -left-[15px] space-y-[8px]"
	>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 0}
			class:other={step !== 0}
		>
			<box-icon type="solid" name="info-circle" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 1}
			class:other={step !== 1}
		>
			<box-icon name="dollar-circle" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 2}
			class:other={step !== 2}
		>
			<box-icon name="home-alt-2" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 2}
			class:other={step !== 2}
		>
			<box-icon name="bowl-hot" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 3}
			class:other={step !== 3}
		>
			<box-icon name="book" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 4}
			class:other={step !== 4}
		>
			<box-icon name="car" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 5}
			class:other={step !== 5}
		>
			<box-icon name="body" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 6}
			class:other={step !== 6}
		>
			<box-icon name="wallet" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 7}
			class:other={step !== 7}
		>
			<box-icon name="spreadsheet" type="solid" />
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
