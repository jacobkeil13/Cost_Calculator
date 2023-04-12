<script>
	import { personal } from '../../store.js';
	import { quantize, interpolatePlasma, pie, arc } from 'd3';
	let data = [];
	let other_expenses = { expense: 'Other', cost: 0 };

	$personal.custom_expenses.forEach((expense) => {
		other_expenses.cost += expense.amount;
	});

	data.push(
		{ expense: 'Takeout & Coffee', cost: $personal.takeout_coffee },
		{ expense: 'Groceries', cost: $personal.groceries },
		{ expense: 'Cell Bill', cost: $personal.phone_bill },
		{ expense: 'Subs', cost: $personal.subscriptions_memberships }
	);

	if (other_expenses.cost !== 0) {
		data.push(other_expenses);
	}

	const width = 500; // the outer width of the chart, in pixels
	const height = width; // the outer height of the chart, in pixels
	const percent = false; // format values as percentages (true/false)
	const fontSize = 15; // the font size of the x and y values
	const strokeWidth = 0; // the width of stroke separating wedges
	const strokeLinejoin = 'round'; // line join style of stroke separating wedges
	const outerRadius = Math.min(width, height) * 0.5 - 60; // the outer radius of the circle, in pixels
	const innerRadius = 75; // the inner radius of the chart, in pixels
	const labelPosition = 0.3; // the position of the label offset from center
	const labelRadius = innerRadius * labelPosition + outerRadius * 0.6; // center radius of labels
	const strokeColorWOR = 'white'; //stroke color when inner radius is greater than 0
	const strokeColorWIR = 'white'; //stroke color when inner radius is 0
	const stroke = innerRadius > 0 ? strokeColorWIR : strokeColorWOR; // stroke separating widths
	const padAngle = stroke === 'none' ? 1 / outerRadius : 0; // angular separation between wedges

	const x = Object.keys(data[0])[0]; // given d in data, returns the (ordinal) x-value
	const y = Object.keys(data[0])[1]; // given d in data, returns the (quantitative) y-value
	const xVals = data.map((el) => el[x]);
	let yVals = data.map((el) => Number(el[y]));
	if (percent) {
		const total = yVals.reduce((a, b) => a + b, 0);
		yVals = yVals.map((el) => el / total);
	}
	const iVals = data.map((el, i) => i);

	// colors can be adjusted manually by creating a color array which length matches length of data set.
	let colors = ['#006747', '#158260', '#2d8569', '#246b55', '#189e74'];
	if (!colors) colors = quantize((t) => interpolatePlasma(t * 0.7 + 0.3), xVals.length);
	console.log(colors);

	const wedges = pie()
		.padAngle(padAngle)
		.sort(null)
		.value((i) => yVals[i])(iVals);

	const arcPath = arc().innerRadius(innerRadius).outerRadius(outerRadius);

	const arcLabel = arc().innerRadius(labelRadius).outerRadius(labelRadius);
</script>

<svg {width} {height} viewBox="{-width / 2} {-height / 2} {width} {height}">
	{#each wedges as wedge, i}
		<path
			fill={colors[i]}
			d={arcPath(wedge)}
			{stroke}
			stroke-width={strokeWidth}
			stroke-linejoin={strokeLinejoin}
		/>
		<g class="fill-white" text-anchor="middle" transform="translate({arcLabel.centroid(wedge)})">
			<text font-size={fontSize}>
				<tspan class="font-medium">{@html xVals[i]}</tspan>
				<tspan x="0" dy="1.1em">${data[i].cost}</tspan>
			</text>
		</g>
	{/each}
</svg>

<style>
</style>
