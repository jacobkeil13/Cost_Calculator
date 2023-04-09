<script>
	export let clientX, step;
</script>

{#if clientX > 960}
	<div class="absolute flex flex-col -left-[15px] top-[114px] space-y-[8px]">
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 0}
		>
			<box-icon type="solid" name="info-circle" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 1}
		>
			<box-icon name="money-withdraw" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 2}
		>
			<box-icon name="home-alt-2" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 2}
		>
			<box-icon name="bowl-hot" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 3}
		>
			<box-icon name="book" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 4}
		>
			<box-icon name="car" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 5}
		>
			<box-icon name="body" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 6}
		>
			<box-icon name="wallet" type="solid" />
		</div>
		<div
			class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
			class:active={step === 7}
		>
			<box-icon name="spreadsheet" />
		</div>
	</div>
{/if}

<style>
	box-icon {
		cursor: pointer;
		width: 20px;
		height: 20px;
	}

	.active {
		border: 3px #006747 solid;
	}
</style>
