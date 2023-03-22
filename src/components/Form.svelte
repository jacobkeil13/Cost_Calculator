<script>
	import InputField from './InputField.svelte';
	import SelectionField from './SelectionField.svelte';
	export let active_step;

	const handleSubmit = () => {
		console.log('Your form data => ', formData);
	};
</script>

<form class="form-container" on:submit={handleSubmit}>
	{#if active_step == 'Student Info'}
		<SelectionField
			value="level"
			label="Level"
			name="level"
			options={['Undergraduate', 'Graduate']}
		/>
		<SelectionField
			value="tuition"
			label="Tuition"
			name="tuition"
			options={['In-State', 'Out-Of-State / International']}
		/>
		<SelectionField
			value="semester"
			label="Semester"
			name="semester"
			options={['Fall', 'Spring', 'Summer A', 'Summer AB', 'Summer C']}
		/>
	{:else if active_step == 'Address'}
		<!-- <InputField label={'Address'} bind:value={formData.address} />
		<InputField label={'City'} bind:value={formData.city} />
		<InputField label={'Country'} bind:value={formData.country} />
		<InputField label={'Postcode'} bind:value={formData.postcode} /> -->
	{:else if active_step == 'Payment'}
		<!-- <InputField label={'Account Name'} bind:value={formData.account_name} />
		<InputField label={'Card No'} bind:value={formData.card_no} /> -->
	{:else if active_step == 'Confirmation'}
		<div class="message">
			<h2>Thank you for choosing us</h2>
			<button class="btn submit">Finish </button>
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
