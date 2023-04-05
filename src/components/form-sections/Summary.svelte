<script>
	import { fly } from 'svelte/transition';
	import { review_data } from '../../summary.js';
	import {
		books_supplies_total,
		funding,
		funding_total,
		housing_food,
		housing_food_total,
		personal_total,
		student_information,
		transportation,
		transportation_total,
		tuition_fees_total
	} from '../../store';
	import ReviewRow from '../form-display/ReviewRow.svelte';
	import ReviewSection from '../form-display/ReviewSection.svelte';
	import { enums, semester_months, static_vars } from '../../constants.js';

	let clientX;

	$: flexWidth = clientX < 960 ? 'mobile' : 'desktop';
</script>

<svelte:window bind:outerWidth={clientX} />

<div in:fly={{ x: -10, duration: 500 }}>
	<ReviewSection title="Student Information" edit="Student Information">
		{#each $review_data.student_information as data}
			<ReviewRow question={data.question[flexWidth]} value={data.value} />
		{/each}
	</ReviewSection>
	<ReviewSection title="Tuition & Fees" edit="Tuition & Fees">
		<ReviewRow
			question={$review_data.tuition_fees[0].question[flexWidth]}
			value={$review_data.tuition_fees[0].value}
		/>
		{#if parseInt($review_data.tuition_fees[1].value.replace('$', '').replace('/sem', '')) != 0}
			<ReviewRow
				question={$review_data.tuition_fees[1].question[flexWidth]}
				value={$review_data.tuition_fees[1].value}
			/>
		{/if}
		{#if parseInt($review_data.tuition_fees[2].value.replace('$', '').replace('/sem', '')) != 0}
			<ReviewRow
				question={$review_data.tuition_fees[2].question[flexWidth]}
				value={$review_data.tuition_fees[2].value}
			/>
		{/if}
		{#if $tuition_fees_total != 0}
			<ReviewRow
				question="Total:"
				value={'$' +
					$tuition_fees_total.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		{/if}
	</ReviewSection>
	<ReviewSection title="Housing & Food" edit="Housing & Food">
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
		{#if $housing_food.living_plan === 'off_campus_parents'}
			{#if parseInt($review_data.housing_food[3].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[3].question[flexWidth]}
					value={$review_data.housing_food[3].value}
				/>
			{/if}
		{/if}
		{#if $housing_food.living_plan === 'off_campus_alone'}
			{#if parseInt($review_data.housing_food[4].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[4].question[flexWidth]}
					value={$review_data.housing_food[4].value}
				/>
			{/if}
			{#if parseInt($review_data.housing_food[5].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[5].question[flexWidth]}
					value={$review_data.housing_food[5].value}
				/>
			{/if}
			{#if parseInt($review_data.housing_food[6].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[6].question[flexWidth]}
					value={$review_data.housing_food[6].value}
				/>
			{/if}
			{#if parseInt($review_data.housing_food[7].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[7].question[flexWidth]}
					value={$review_data.housing_food[7].value}
				/>
			{/if}
			{#if parseInt($review_data.housing_food[8].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[8].question[flexWidth]}
					value={$review_data.housing_food[8].value}
				/>
			{/if}
			{#if parseInt($review_data.housing_food[9].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[9].question[flexWidth]}
					value={$review_data.housing_food[9].value}
				/>
			{/if}
			{#if parseInt($review_data.housing_food[10].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.housing_food[10].question[flexWidth]}
					value={$review_data.housing_food[10].value}
				/>
			{/if}
		{/if}
		<ReviewRow
			question={$review_data.housing_food[11].question[flexWidth]}
			value={$review_data.housing_food[11].value}
			style={$review_data.housing_food[11].style()}
		/>
		{#if $housing_food_total != 0}
			<ReviewRow
				question="Total:"
				value={'$' +
					$housing_food_total.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		{/if}
	</ReviewSection>
	<ReviewSection title="Books & Supplies" edit="Books & Supplies">
		{#if $books_supplies_total != 0}
			{#each $review_data.books_supplies as book_supply}
				{#if parseInt(book_supply.value.replace('$', '').replace('/sem', '')) != 0}
					<ReviewRow question={book_supply.question[flexWidth]} value={book_supply.value} />
				{/if}
			{/each}
			<ReviewRow
				question="Total:"
				value={'$' +
					$books_supplies_total.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		{:else}
			<div class="flex justify-between py-2 child-row">
				<h1>No books & supplies expenses</h1>
			</div>
		{/if}
	</ReviewSection>
	<ReviewSection title="Transportation" edit="Transportation">
		<ReviewRow
			question={$review_data.transportation[0].question[flexWidth]}
			value={$review_data.transportation[0].value}
			style={$review_data.transportation[0].style()}
		/>
		{#if $transportation.has_vehicle === 'vehicle_yes'}
			{#if parseInt($review_data.transportation[1].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.transportation[1].question[flexWidth]}
					value={$review_data.transportation[1].value}
				/>
			{/if}
			{#if parseInt($review_data.transportation[2].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.transportation[2].question[flexWidth]}
					value={$review_data.transportation[2].value}
				/>
			{/if}
			{#if parseInt($review_data.transportation[3].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.transportation[3].question[flexWidth]}
					value={$review_data.transportation[3].value}
				/>
			{/if}
			{#if parseInt($review_data.transportation[4].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.transportation[4].question[flexWidth]}
					value={$review_data.transportation[4].value}
				/>
			{/if}
			{#if parseInt($review_data.transportation[5].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.transportation[5].question[flexWidth]}
					value={$review_data.transportation[5].value}
				/>
			{/if}
		{/if}
		{#if $transportation.has_vehicle === 'vehicle_no'}
			{#if parseInt($review_data.transportation[6].value.replace('$', '').replace('/mo', '')) != 0}
				<ReviewRow
					question={$review_data.transportation[6].question[flexWidth]}
					value={$review_data.transportation[6].value}
				/>
			{/if}
		{/if}
		{#if $transportation_total != 0}
			<ReviewRow
				question="Total:"
				value={'$' +
					$transportation_total.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		{/if}
	</ReviewSection>
	<ReviewSection title="Personal" edit="Personal">
		{#if $personal_total != 0}
			{#each $review_data.personal as personal}
				{#if parseInt(personal.value.replace('$', '').replace('/mo', '')) != 0}
					<ReviewRow question={personal.question[flexWidth]} value={personal.value} />
				{/if}
			{/each}
			<ReviewRow
				question="Total:"
				value={'$' +
					$personal_total.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		{:else}
			<div class="flex justify-between py-2 child-row">
				<h1>No personal expenses</h1>
			</div>
		{/if}
	</ReviewSection>
	<ReviewSection title="Funding" edit="Funding">
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
		<ReviewRow
			question={$review_data.funding[3].question[flexWidth]}
			value={$review_data.funding[3].value}
			style={$review_data.funding[3].style()}
		/>
		{#if $funding.has_fl_prepaid === 'prepaid_no' && $student_information.tuition === 'out_of_state' && $student_information.level === 'undergraduate'}
			<ReviewRow
				question={$review_data.funding[4].question[flexWidth]}
				value={$review_data.funding[4].value}
				style={$review_data.funding[4].style()}
			/>
		{/if}
		{#if parseInt($review_data.funding[5].value.replace('$', '').replace('/sem', '')) != 0}
			<ReviewRow
				question={$review_data.funding[5].question[flexWidth]}
				value={$review_data.funding[5].value}
			/>
		{/if}
		{#if parseInt($review_data.funding[6].value.replace('$', '').replace('/sem', '')) != 0}
			<ReviewRow
				question={$review_data.funding[6].question[flexWidth]}
				value={$review_data.funding[6].value}
			/>
		{/if}
		{#if $review_data.funding[7].value.length > 0}
			{#each $review_data.funding[7].value as scholarship}
				<ReviewRow
					question={scholarship.name}
					value={'$' +
						scholarship.amount +
						`${scholarship.concurrency === 'monthly' ? '/mo' : '/sem'}`}
				/>
			{/each}
		{/if}
		{#if $review_data.funding[8].value.length > 0}
			{#each $review_data.funding[8].value as job}
				<ReviewRow
					question={job.name}
					value={'$' +
						job.amount *
							job.hours *
							enums.WEEKS_IN_MONTH *
							$semester_months[$student_information.semester] +
						'/sem'}
				/>
			{/each}
		{/if}
		{#if $funding_total != 0}
			<ReviewRow
				question="Total:"
				value={'$' +
					$funding_total.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		{/if}
	</ReviewSection>
</div>
