<script>
	import { cc_data, dropdownOptions } from '../store.js';
	import InputField from './InputField.svelte';
	import SelectionField from './SelectionField.svelte';
	import RangeField from './RangeField.svelte';
	export let active_step;

	const handleSubmit = () => {
		// console.log('Your form data => ', formData);
	};
</script>

<form class="form-container" on:submit={handleSubmit}>
	{#if active_step == 'Student'}
		<SelectionField
			label="Level"
			options={$dropdownOptions.student_information.level}
			bind:value={$cc_data.student_information.level}
		/>
		<SelectionField
			label="Tuition"
			options={$dropdownOptions.student_information.tuition}
			bind:value={$cc_data.student_information.tuition}
		/>
		<SelectionField
			label="Semester"
			options={$dropdownOptions.student_information.semester}
			bind:value={$cc_data.student_information.semester}
		/>
	{:else if active_step == 'Tuition & Fees'}
		<RangeField label="Credit Hours" bind:value={$cc_data.tuition_fees.credit_hours} />
		<InputField label="Lab Fees" type="text" bind:value={$cc_data.tuition_fees.lab_fees} />
		<InputField label="Other Fees" type="text" bind:value={$cc_data.tuition_fees.other_fees} />
	{:else if active_step == 'Housing & Food'}
		<SelectionField
			label="Where do you plan on living?"
			options={$dropdownOptions.student_information.level}
			bind:value={$cc_data.student_information.level}
		/>
		<SelectionField
			label="Housing"
			options={$dropdownOptions.student_information.tuition}
			bind:value={$cc_data.student_information.tuition}
		/>
		<SelectionField
			label="Living Learning Community"
			options={$dropdownOptions.student_information.semester}
			bind:value={$cc_data.student_information.semester}
		/>
		<SelectionField
			label="Food Plan"
			options={$dropdownOptions.student_information.semester}
			bind:value={$cc_data.student_information.semester}
		/>
	{:else if active_step == 'Review'}
		<div class="message">
			<h2>Thank you for choosing us</h2>
			<button class="btn submit">Finish</button>
		</div>
	{/if}
</form>

<style>
	.form-container {
		padding: 1rem;
		text-align: center;
		max-width: 100%;
		width: 600px;
	}
	.btn {
		color: white;
		padding: 0.5rem 0;
		margin-top: 0.5rem;
		display: inline-block;
		width: 100%;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.submit {
		background: linear-gradient(to bottom, #44c767 5%, #50b01c 100%);
		background-color: #44c767;
	}
	.submit:hover {
		background: linear-gradient(to bottom, #50b01c 5%, #44c767 100%);
		background-color: #50b01c;
	}
	.message {
		text-align: center;
	}
</style>
