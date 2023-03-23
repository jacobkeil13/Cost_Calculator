<script>
	import { cc_data, dropdownOptions } from '../../store.js';
	import SelectionField from '../form-inputs/SelectionField.svelte';
	import FormControls from '../FormControls.svelte';

	let studentInfo = $dropdownOptions.student_information;
	let calc_data = $cc_data.student_information;
</script>

<SelectionField label="Campus" options={studentInfo.campus} bind:value={calc_data.campus} />
<SelectionField label="Level" options={studentInfo.level} bind:value={calc_data.level} />
<SelectionField label="Tuition" options={studentInfo.tuition} bind:value={calc_data.tuition} />
<SelectionField label="Semester" options={studentInfo.semester} bind:value={calc_data.semester} />
<FormControls />
