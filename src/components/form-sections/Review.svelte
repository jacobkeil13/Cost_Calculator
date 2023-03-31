<script>
	import { fly } from 'svelte/transition';
	import { review_data } from '../../review';
	import { housing_food } from '../../store';
	import ReviewRow from '../form-display/ReviewRow.svelte';
	import ReviewSection from '../form-display/ReviewSection.svelte';

	let clientX;

	$: flexWidth = clientX < 960 ? 'mobile' : 'desktop';
</script>

<svelte:window bind:outerWidth={clientX} />

<div in:fly={{ x: -10, duration: 500 }}>
	<ReviewSection title="Student Information">
		{#each $review_data.student_information as data}
			<ReviewRow question={data.question[flexWidth]} value={data.value} />
		{/each}
	</ReviewSection>
	<ReviewSection title="Tuition & Fees">
		<ReviewRow
			question={$review_data.tuition_fees[0].question[flexWidth]}
			value={$review_data.tuition_fees[0].value}
		/>
		<ReviewRow
			question={$review_data.tuition_fees[1].question[flexWidth]}
			value={$review_data.tuition_fees[1].value}
		/>
		<ReviewRow
			question={$review_data.tuition_fees[2].question[flexWidth]}
			value={$review_data.tuition_fees[2].value}
		/>
	</ReviewSection>
	<ReviewSection title="Housing & Food">
		<ReviewRow
			question={$review_data.housing_food[0].question[flexWidth]}
			value={$review_data.housing_food[0].value}
			style={$review_data.housing_food[0].style()}
		/>
		{#if $housing_food.living_plan === 'on_campus'}
			<ReviewRow
				question={$review_data.housing_food[1].question[flexWidth]}
				value={$review_data.housing_food[1].value}
				style={$review_data.housing_food[1].style()}
			/>
			<ReviewRow
				question={$review_data.housing_food[2].question[flexWidth]}
				value={$review_data.housing_food[2].value}
				style={$review_data.housing_food[2].style()}
			/>
		{/if}
		<ReviewRow
			question={$review_data.housing_food[3].question[flexWidth]}
			value={$review_data.housing_food[3].value}
			style={$review_data.housing_food[3].style()}
		/>
	</ReviewSection>
</div>
