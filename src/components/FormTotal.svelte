<script>
	import { total } from '../store.js';
	export let clientX;
</script>

<div class="{clientX < 960 ? 'py-6 mt-6 bg-gray-200' : 'border-l-2'} px-6">
	<h2 class="text-center text-lg font-bold">Total Semester Amount</h2>
	<h1 class="text-center text-5xl">${Math.round($total)}</h1>
	<div class="flex justify-between" />
</div>
