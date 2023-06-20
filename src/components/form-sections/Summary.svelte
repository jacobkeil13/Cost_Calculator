<script>
	import { fly } from 'svelte/transition';
	import { review_data } from '../../summary.js';
	import { notes } from '../../store';
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
		tuition_fees_total,
		total
	} from '../../store';
	import ReviewRow from '../form-display/ReviewRow.svelte';
	import ReviewSection from '../form-display/ReviewSection.svelte';
	import { enums, semester_months } from '../../constants.js';

	let clientX;

	$: flexWidth = clientX < 960 ? 'mobile' : 'desktop';
	$: jobSum = 0;

	$: {
		$funding.jobs.forEach((job) => {
			jobSum +=
				job.hours *
				job.amount *
				enums.WEEKS_IN_MONTH *
				$semester_months[$student_information.semester];
		});
	}

	function roundDollarSign(num, times) {
		if (num < 0) {
			return (
				'-$' +
				(num * times * -1).toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				})
			);
		} else if (num >= 0) {
			return (
				'$' +
				(num * times).toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				})
			);
		}
	}
</script>

<svelte:window bind:outerWidth={clientX} />

<div
	class="px-2 py-1 border-2 {$total <= 0
		? 'border-[#107455] bg-[#006747]/10'
		: 'border-red-700 bg-red-700/10'} rounded-lg mb-2"
>
	{#if $total > 0}
		<h1 class="text-xl font-medium">
			You may not have enough funding to pay for your college costs. If you need help, schedule a
			<span
				><a
					class="text-[#107455] underline"
					href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2FUSFBull2BullFinancialAidEducationProgram%40usfedu.onmicrosoft.com%2Fbookings%2Fs%2FYdTKpGOEK0Wsr455UIrULg2&data=05%7C01%7Cjacobkeil%40usf.edu%7Cef2eec5a261848fae7c608db36e2bff0%7C741bf7dee2e546df8d6782607df9deaa%7C0%7C0%7C638164119724193304%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=wHfm1TrHSane2GHXw0GezyCWBXohExRoSY6VGdoObDw%3D&reserved=0"
					target="_blank">Financial Wellness</a
				></span
			> session with our staff to help you explore additional payment options.
		</h1>
	{:else}
		<h1 class="text-xl font-medium">
			Great! It looks like you may have enough funding to pay for your college costs. If needed, you
			may schedule a <span
				><a
					class="text-[#107455] underline"
					href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2FUSFBull2BullFinancialAidEducationProgram%40usfedu.onmicrosoft.com%2Fbookings%2Fs%2F4RodD-j65kmZQogRRWMUnA2&data=05%7C01%7Cjacobkeil%40usf.edu%7Cef2eec5a261848fae7c608db36e2bff0%7C741bf7dee2e546df8d6782607df9deaa%7C0%7C0%7C638164119724193304%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=mEJe61OqZXE%2B0bntJrasPc6ihy5mWrhNkjcDu8vKLBo%3D&reserved=0"
					target="_blank">Money Management</a
				></span
			> session with a peer financial educator to make sure you are budgeting your money and help you
			stay on track!
		</h1>
		<br />
		<h1 class="text-xl font-medium">
			Subscribe to
			<span
				><a
					class="text-[#107455] underline"
					href="http://www.usf.edu/business-finance/controller/student-services/student-accounting/edeposit.aspx"
					>eDeposit</a
				></span
			>
			in
			<span
				><a class="text-[#107455] underline" href="https://bannersso.usf.edu/ssomanager/c/SSB"
					>OASIS</a
				></span
			>. If you are eligible to receive a refund after
			<span
				><a class="text-[#107455] underline" href="https://www.usf.edu/financial-aid/disbursement/"
					>payment of financial aid</a
				></span
			> is made, you will receive it faster than a paper check by mail.
		</h1>
	{/if}
</div>
<div in:fly={{ y: -10, duration: 200 }}>
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
		{#if parseInt($review_data.tuition_fees[3].value.replace('$', '').replace('/sem', '')) != 0}
			<ReviewRow
				question={$review_data.tuition_fees[3].question[flexWidth]}
				value={$review_data.tuition_fees[3].value}
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
			<ReviewRow
				question={$review_data.transportation[1].question[flexWidth]}
				value={$review_data.transportation[1].value}
				style={$review_data.transportation[1].style()}
			/>
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
			{#each $review_data.personal as personal, i}
				{#if i !== 4}
					{#if parseInt(personal.value.replace('$', '').replace('/mo', '')) != 0}
						<ReviewRow question={personal.question[flexWidth]} value={personal.value} />
					{/if}
				{/if}
			{/each}
			{#if $review_data.personal[4].value.length > 0}
				{#each $review_data.personal[4].value as expense}
					{#if expense.amount !== 0}
						<ReviewRow
							question={expense.name}
							value={'$' + expense.amount + `${expense.concurrency === 'monthly' ? '/mo' : '/sem'}`}
						/>
					{/if}
				{/each}
			{/if}
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
	<ReviewSection title="College Funding" edit="Funding">
		<ReviewRow
			question={$review_data.funding[0].question[flexWidth]}
			value={$review_data.funding[0].value()}
			style={$review_data.funding[0].style()}
		/>
		{#if $funding.has_fl_prepaid === 'prepaid_yes'}
			<ReviewRow
				question={$review_data.funding[1].question[flexWidth]}
				value={$review_data.funding[1].value()}
				style={$review_data.funding[1].style()}
			/>
			<ReviewRow
				question={$review_data.funding[2].question[flexWidth]}
				value={$review_data.funding[2].value()}
				style={$review_data.funding[2].style()}
			/>
		{/if}
		{#if $student_information.tuition === 'in_state'}
			<ReviewRow
				question={$review_data.funding[3].question[flexWidth]}
				value={$review_data.funding[3].value()}
				style={$review_data.funding[3].style()}
			/>
		{/if}
		{#if $funding.has_fl_prepaid === 'prepaid_no' && ($student_information.tuition === 'out_of_state' || $student_information.tuition === 'international') && $student_information.level === 'undergraduate' && $funding.has_green_gold === 'gg_yes'}
			<ReviewRow
				question={$review_data.funding[4].question[flexWidth]}
				value={$review_data.funding[4].value() === 'None Picked'
					? 'No'
					: $review_data.funding[4].value()}
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
	{#if $funding.jobs.length !== 0}
		<ReviewSection
			title="Personal Funding"
			alt_text="Jobs are not calculated into your college funding."
		>
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
			<ReviewRow
				question="Total:"
				value={'$' +
					jobSum.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				style="font-semibold text-green-700"
			/>
		</ReviewSection>
	{/if}
	{#if $student_information.semester === 'spring' || $student_information.semester === 'fall'}
		<ReviewSection
			title="Looking ahead..."
			alt_text="Values are calculated without transportation, personal, and college funding."
		>
			<ReviewRow
				question="Estimated costs for Fall and Spring:"
				value={roundDollarSign($total + $funding_total - $transportation_total, 2)}
			/>
			<ReviewRow
				question="Estimated costs for two years:"
				value={roundDollarSign($total + $funding_total - $transportation_total, 4)}
			/>
			<ReviewRow
				question="Estimated costs for four years:"
				value={roundDollarSign($total + $funding_total - $transportation_total, 8)}
			/>
		</ReviewSection>
	{/if}
	{#if $notes.length !== 0}
		<ReviewSection title="Notes">
			{#each $notes as note}
				<ReviewRow question={note} />
			{/each}
		</ReviewSection>
	{/if}
</div>
