<script>
	import { semester_months } from '../../constants';
	import { student_information } from '../../store';

	export let value;
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
					value={value.hours * value.amount * 4 * $semester_months[$student_information.semester]}
					class="border-green-900 border-b-2 px-1 bg-transparent w-[80px] text-xl font-medium"
				/>
			</div>
			<p class="text-sm">per semester</p>
		</div>
	</div>
</div>
