<script>
	import { fly } from 'svelte/transition';
	import { dropdownOptions } from '../../constants';
	import { student_information, tuition_fees } from '../../store';
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<h1 class="text-3xl pb-3">Student Information</h1>
	<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300">
		<div class="flex justify-between py-2">
			<h1>What campus are you going to?</h1>
			<h1>
				{$dropdownOptions.student_information.campus.find(
					(obj) => obj.value === $student_information.campus
				).label}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>What kind of student are you?</h1>
			<h1>
				{$dropdownOptions.student_information.level.find(
					(obj) => obj.value === $student_information.level
				).label}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>What tuition do you need?</h1>
			<h1>
				{$dropdownOptions.student_information.tuition.find(
					(obj) => obj.value === $student_information.tuition
				).label}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>What semester are you going into?</h1>
			<h1>
				{$dropdownOptions.student_information.semester.find(
					(obj) => obj.value === $student_information.semester
				).label}
			</h1>
		</div>
	</div>
	<h1 class="text-3xl py-3">Tuition & Fees</h1>
	<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300">
		<div class="flex justify-between py-2">
			<h1>How many credit hours are you taking?</h1>
			<h1>
				{$tuition_fees.credit_hours}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>Do you have any lab fees?</h1>
			<h1>
				${$tuition_fees.lab_fees}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>Do you have any additional fees?</h1>
			<h1>
				${$tuition_fees.other_fees}
			</h1>
		</div>
	</div>
</div>
