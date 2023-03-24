<script>
	import { cc_data } from '../../store.js';
	import RangeField from '../form-inputs/RangeField.svelte';
	import RangeMoneyField from '../form-inputs/RangeMoneyField.svelte';

	let calc_data = $cc_data.tuition_fees;
</script>

<RangeField
	label="How many credit hours are you taking?"
	bind:value={calc_data.credit_hours}
	min="1"
	max="18"
	step="1"
/>
<RangeMoneyField
	label="Do you have any lab fees?"
	bind:value={calc_data.lab_fees}
	min="0"
	max="750"
	step="5"
	concurrency="per semester"
/>
<RangeMoneyField
	label="Do you have any additional fees?"
	bind:value={calc_data.other_fees}
	min="0"
	max="750"
	step="5"
	concurrency="per semester"
/>
