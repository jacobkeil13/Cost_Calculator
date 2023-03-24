<script>
	import { steps, current_step } from '../store.js';
	import StudentInfo from './form-sections/StudentInfo.svelte';
	import FormControls from './FormControls.svelte';

	let step_name = $steps[$current_step];
	$: console.log();
</script>

<div class="w-full">
	<div class="py-4 text-2xl">
		<h1>{step_name}</h1>
	</div>
	<StudentInfo />
	<FormControls />
</div>
