<script>
	import { student_information, housing_food, validated } from '../../store.js';
	import { dropdownOptions } from '../../constants.js';
	import { fly } from 'svelte/transition';
	import SelectionField from '../form-inputs/SelectionField.svelte';

	let studentInfo = $dropdownOptions.student_information;
	let calc_data = $student_information;
	let hfd = $housing_food;

	$: {
		student_information.set(calc_data);
		housing_food.set(hfd);
	}

	function handleChange() {
		if ($student_information.campus === 'sarasota') {
			hfd.living_plan = 'nothing';
		}
		if (hfd.living_plan !== 'on_campus') {
			hfd.living_plan = 'nothing';
		}
		hfd.on_campus.housing = 'nothing';
		hfd.food_plan = 'nothing';
		hfd.on_campus.llc = 'nothing';
		hfd = hfd;
	}

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('validate')) {
			if (Object.keys($validated).length !== 0) {
				var dropdowns = document.getElementsByClassName('student-drop');
				for (let i = 0; i < dropdowns.length; i++) {
					if (dropdowns[i].value === 'nothing') {
						dropdowns[i].classList.add('validation');
						setTimeout(() => {
							dropdowns[i].classList.remove('validation');
						}, 200);
					}
				}
				return;
			}
		}
	});
</script>

<div in:fly={{ y: -10, duration: 200 }}>
	<SelectionField
		isValidated="student-drop"
		tooltip_text="What campus are you attending. Tampa, St. Pete, or Sarasota."
		handleChange={true}
		on:handle={handleChange}
		label="Campus?"
		options={studentInfo.campus}
		bind:value={calc_data.campus}
	/>
	<SelectionField
		isValidated="student-drop"
		tooltip_text="Undergraduate students are freshmen, sophomores, juniors, 
			or seniors. Graduate students are master's or doctoral."
		label="Student type?"
		options={studentInfo.level}
		bind:value={calc_data.level}
	/>
	<SelectionField
		isValidated="student-drop"
		tooltip_text="Check your residency on OASIS > Student > 
			Student Records > View Student information."
		link="https://www.usf.edu/business-finance/controller/student-services/tuition-rates.aspx"
		label="Tuition?"
		options={studentInfo.tuition}
		bind:value={calc_data.tuition}
	/>
	<SelectionField
		isValidated="student-drop"
		tooltip_text="Semester costs are based on prior year rates 
			and are updated as new rates are available."
		link="https://www.usf.edu/registrar/calendars/"
		handleChange={true}
		on:handle={handleChange}
		label="Semester?"
		options={studentInfo.semester}
		bind:value={calc_data.semester}
	/>
</div>
