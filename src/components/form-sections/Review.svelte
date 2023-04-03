<script>
	import { fly } from 'svelte/transition';
	import { review_data } from '../../review';
	import { funding, housing_food, personal, transportation } from '../../store';
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
	<ReviewSection title="Books & Supplies">
		<ReviewRow
			question={$review_data.books_supplies[0].question[flexWidth]}
			value={$review_data.books_supplies[0].value}
		/>
		<ReviewRow
			question={$review_data.books_supplies[1].question[flexWidth]}
			value={$review_data.books_supplies[1].value}
		/>
	</ReviewSection>
	<ReviewSection title="Transportation">
		<ReviewRow
			question={$review_data.transportation[0].question[flexWidth]}
			value={$review_data.transportation[0].value}
			style={$review_data.transportation[0].style()}
		/>
		{#if $transportation.has_vehicle === 'vehicle_yes'}
			<ReviewRow
				question={$review_data.transportation[1].question[flexWidth]}
				value={$review_data.transportation[1].value}
			/>
			<ReviewRow
				question={$review_data.transportation[2].question[flexWidth]}
				value={$review_data.transportation[2].value}
			/>
			<ReviewRow
				question={$review_data.transportation[3].question[flexWidth]}
				value={$review_data.transportation[3].value}
			/>
			<ReviewRow
				question={$review_data.transportation[4].question[flexWidth]}
				value={$review_data.transportation[4].value}
			/>
			<ReviewRow
				question={$review_data.transportation[5].question[flexWidth]}
				value={$review_data.transportation[5].value}
			/>
		{/if}
		{#if $transportation.has_vehicle === 'vehicle_no'}
			<ReviewRow
				question={$review_data.transportation[6].question[flexWidth]}
				value={$review_data.transportation[6].value}
			/>
		{/if}
	</ReviewSection>
	<ReviewSection title="Personal">
		{#each $review_data.personal as personal}
			{#if parseInt(personal.value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow question={personal.question[flexWidth]} value={personal.value} />
			{/if}
		{/each}
	</ReviewSection>
	<ReviewSection title="Funding">
		<ReviewRow
			question={$review_data.funding[0].question[flexWidth]}
			value={$review_data.funding[0].value}
			style={$review_data.funding[0].style()}
		/>
		{#if $funding.has_fl_prepaid === 'prepaid_yes'}
			<ReviewRow
				question={$review_data.funding[1].question[flexWidth]}
				value={$review_data.funding[1].value}
				style={$review_data.funding[1].style()}
			/>
			<ReviewRow
				question={$review_data.funding[2].question[flexWidth]}
				value={$review_data.funding[2].value}
				style={$review_data.funding[2].style()}
			/>
		{/if}
	</ReviewSection>
</div>
