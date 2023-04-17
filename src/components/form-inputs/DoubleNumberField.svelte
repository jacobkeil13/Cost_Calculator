<script>
	import { semester_months, enums } from '../../constants';
	import { student_information } from '../../store';

	export let value;

	function handleHoursInput(e) {
		if (parseInt(e.target.value) === null || parseInt(e.target.value) < 0) {
			value.hours = 0;
		}
	}

	function handleAmountInput(e) {
		if (parseInt(e.target.value) === null || parseInt(e.target.value) < 0) {
			value.amount = 0;
		}
	}

	function handleHoursEmpty(e) {
		if (e.target.value.length <= 0) {
			value.hours = 0;
		}
	}

	function handleAmountEmpty(e) {
		if (e.target.value.length <= 0) {
			value.amount = 0;
		}
	}
</script>

<div class="form-control">
	{#if value.name}
		<h1 class="font-semibold">{value.name}</h1>
	{/if}
	<div class="flex space-x-10">
		<div class="flex flex-col">
			<div class="flex">
				<label for="per_hour" class="text-xl">$</label>
				<input
					on:input={handleHoursInput}
					on:focusout={handleHoursEmpty}
					min="0"
					type="number"
					name="per_hour"
					bind:value={value.hours}
					class="border-green-900 border-b-2 px-1 bg-transparent w-[80px] text-xl font-medium"
				/>
			</div>
			<p class="text-sm">per hour</p>
		</div>
		<div class="flex flex-col">
			<input
				on:input={handleAmountInput}
				on:focusout={handleAmountEmpty}
				min="0"
				type="number"
				name="hours_per_week"
				bind:value={value.amount}
				class="border-green-900 border-b-2 px-1 bg-transparent w-[80px] text-xl font-medium"
			/>
			<p class="text-sm">hrs per week</p>
		</div>
		<div class="flex flex-col">
			<div class="flex">
				<label for="per_semester" class="text-xl">$</label>
				<input
					disabled
					type="number"
					name="per_semester"
					value={value.hours *
						value.amount *
						enums.WEEKS_IN_MONTH *
						$semester_months[$student_information.semester]}
					class="border-green-900 border-b-2 px-1 bg-transparent w-[80px] text-xl font-medium"
				/>
			</div>
			<p class="text-sm">per semester</p>
		</div>
	</div>
</div>
