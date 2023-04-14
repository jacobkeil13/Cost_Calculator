<script>
	import { current_step } from '../../store.js';
	import { steps } from '../../constants.js';
	export let text, section;

	function switchStep(section) {
		current_step.set($steps.indexOf(section));
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li class="cursor-pointer hover:text-slate-900" on:click={() => switchStep(section)}>
	{text}
</li>
