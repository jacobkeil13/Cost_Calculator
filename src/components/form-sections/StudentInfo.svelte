<script>
	import { cc_data, dropdownOptions } from '../../store.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';

	let studentInfo = $dropdownOptions.student_information;
	let calc_data = $cc_data.student_information;
</script>

<div in:fly={{ x: -10, duration: 200 }}>
	<SelectionField
		label="What campus are you going to?"
		options={studentInfo.campus}
		bind:value={calc_data.campus}
	/>
	<SelectionField
		label="What kind of student are you?"
		options={studentInfo.level}
		bind:value={calc_data.level}
	/>
	<SelectionField
		label="What tuition do you need?"
		options={studentInfo.tuition}
		bind:value={calc_data.tuition}
	/>
	<SelectionField
		label="What semester are you going into?"
		options={studentInfo.semester}
		bind:value={calc_data.semester}
	/>
</div>
