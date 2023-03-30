<script>
	import { fly } from 'svelte/transition';
	import { dropdownOptions } from '../../constants';
	import { student_information } from '../../store';
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<h1 class="text-3xl pb-3">Student Information</h1>
	<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300">
		<div class="flex justify-between py-2">
			<h1>Campus:</h1>
			<h1>
				{$dropdownOptions.student_information.campus.find(
					(obj) => obj.value === $student_information.campus
				).label}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>Level:</h1>
			<h1>
				{$dropdownOptions.student_information.level.find(
					(obj) => obj.value === $student_information.level
				).label}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>Tuition:</h1>
			<h1>
				{$dropdownOptions.student_information.tuition.find(
					(obj) => obj.value === $student_information.tuition
				).label}
			</h1>
		</div>
		<div class="flex justify-between py-2">
			<h1>Semester:</h1>
			<h1>
				{$dropdownOptions.student_information.semester.find(
					(obj) => obj.value === $student_information.semester
				).label}
			</h1>
		</div>
	</div>
</div>
