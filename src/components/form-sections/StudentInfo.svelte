<script>
	import { student_information, housing_food, validated } from '../../store.js';
	import { dropdownOptions, errors } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';

	let studentInfo = $dropdownOptions.student_information;
	let calc_data = $student_information;
	let housing_food_data = $housing_food;

	$: {
		student_information.set(calc_data);
		housing_food.set(housing_food_data);
	}

	function handleChange() {
		if ($student_information.campus === 'sarasota') {
			housing_food_data.living_plan = 'nothing';
		} else {
			housing_food_data.living_plan = 'nothing';
		}
		housing_food_data.on_campus.housing = 'nothing';
		housing_food_data.food_plan = 'nothing';
		housing_food_data.on_campus.llc = 'nothing';
		housing_food_data = housing_food_data;
	}
</script>

<div in:fly={{ y: -10, duration: 200 }}>
	<SelectionField
		error={$validated['campus']}
		error_text={errors['campus']}
		tooltip_text="What campus are you attending. Tampa, St. Pete, or Sarasota."
		handleChange={true}
		on:handle={handleChange}
		label="What campus are you going to?"
		options={studentInfo.campus}
		bind:value={calc_data.campus}
	/>
	<SelectionField
		error={$validated['level']}
		error_text={errors['level']}
		tooltip_text="Undergraduate students are freshmen, sophomores, juniors, 
			or seniors. Graduate students are master's or doctoral."
		label="What kind of student are you?"
		options={studentInfo.level}
		bind:value={calc_data.level}
	/>
	<SelectionField
		error={$validated['tuition']}
		error_text={errors['tuition']}
		tooltip_text="Check your residency on OASIS > Student > 
			Student Records > View Student information."
		label="What tuition do you need?"
		options={studentInfo.tuition}
		bind:value={calc_data.tuition}
	/>
	<SelectionField
		error={$validated['semester']}
		error_text={errors['semester']}
		tooltip_text="Semester costs are based on prior year rates 
			and are updated as new rates are available."
		handleChange={true}
		on:handle={handleChange}
		label="What semester are you going into?"
		options={studentInfo.semester}
		bind:value={calc_data.semester}
	/>
</div>
