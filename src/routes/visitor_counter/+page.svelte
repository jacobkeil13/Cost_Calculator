<script>
	import { visitor_data } from '../../chart.js';
	import { scaleLinear } from 'd3-scale';

	let width;
	let height;

	$: xScale = scaleLinear().domain([0, 300]).range([0, width]);
</script>

<svg {width} {height}>
	{#each visitor_data as visit}
		<circle cx={visit.length} r="4" />
	{/each}>
</svg>
