import { derived, writable } from 'svelte/store';
import {
	static_vars,
	semester_months,
	florida_prepaid_cost,
	housing_cost,
	llc_cost,
	bright_futures_cost,
	green_gold_cost,
	food_plan_cost,
	parking_permits
} from './constants';
export const current_step = writable(0);

export const student_information = writable({
	campus: 'nothing',
	level: 'nothing',
	tuition: 'nothing',
	semester: 'nothing'
});

export const tuition_fees = writable({
	credit_hours: 0,
	lab_fees: 0,
	other_fees: 0
});

export const housing_food = writable({
	living_plan: 'nothing',
	food_plan: 'nothing',
	on_campus: {
		housing: 'nothing',
		llc: 'nothing'
	},
	off_campus_parents: {
		utility_fees: 0
	},
	off_campus_alone: {
		rent: 0,
		electric: 0,
		water: 0,
		natural_gas: 0,
		internet: 0,
		cable: 0,
		phone: 0
	}
});

export const books_supplies = writable({
	books: 0,
	supplies: 0
});

export const transportation = writable({
	has_vehicle: 'vehicle_no',
	parking_pass: 'nothing',
	car_payment: 0,
	insurance: 0,
	gas: 0,
	maintenance: 0,
	other_transport: 0
});

export const personal = writable({
	takeout_coffee: 0,
	groceries: 0,
	phone_bill: 0,
	subscriptions_memberships: 0,
	custom_expenses: []
});

export const funding = writable({
	has_fl_prepaid: 'nothing',
	has_green_gold: 'nothing',
	when_purchased: 'nothing',
	prepaid_plan: 'nothing',
	bright_futures: 'nothing',
	green_gold_award: 'nothing',
	grants: 0,
	loans: 0,
	scholarships: [],
	jobs: [],
	other_funding: 0
});

export const notes = writable([]);
export const lookAheadWithoutFunding = writable(false);

export let tuition_fees_total = derived(
	[tuition_fees, student_information, funding, static_vars],
	([$tuition_fees, $student_information, $funding, $static_vars]) => {
		let credit_cost = 0;
		let flat_fees = 0;

		// If the student is in state or out of state check if they are a graduate or undergraduate
		// student and set the correct credit cost.
		if (($student_information.tuition === "out_of_state" || $student_information.tuition === "international") && $funding.has_fl_prepaid === 'prepaid_yes') {
			credit_cost = $static_vars[$student_information.level]['in_state'];
		} else {
			credit_cost = $static_vars[$student_information.level][$student_information.tuition];
		}

		// Set the flat fee for the student based on the campus they pick.
		if ($tuition_fees.credit_hours !== 0) {
			if ($student_information.campus === 'nothing') {
				flat_fees += $static_vars.flat_fees.nothing;
			} else {
				flat_fees += $static_vars.flat_fees.value;
			}
		}

		// Return the credit hours multiplied by the credit cost with the other tuition fees
		// and flat fee added on.
		return (
			$tuition_fees.credit_hours * credit_cost +
			$tuition_fees.lab_fees +
			$tuition_fees.other_fees +
			flat_fees
		);
	}
);

export let housing_food_total = derived(
	[housing_food, housing_cost, llc_cost, semester_months, student_information, food_plan_cost],
	([
		$housing_food,
		$housing_cost,
		$llc_cost,
		$semester_months,
		$student_information,
		$food_plan_cost
	]) => {
		let housing_food = 0;

		// Add the food plan to the initial cost since it can be picked no matter if you're on
		// campus or not
		housing_food += $food_plan_cost[$housing_food.food_plan];

		// If the student is living on campus add the housing cost and llc
		// cost to the total.
		if ($housing_food.living_plan === 'on_campus') {
			if ($student_information.campus != 'sarasota') {
				housing_food += $housing_cost[$housing_food.on_campus.housing];
			}
			if ($student_information.semester === 'fall' || $student_information.semester === 'spring') {
				housing_food += $llc_cost[$housing_food.on_campus.llc];
			}
		}
		// If the student is living off campus with parents/family we add
		// any utility fees they might pay.
		else if ($housing_food.living_plan === 'off_campus_parents') {
			housing_food +=
				$housing_food.off_campus_parents.utility_fees *
				$semester_months[$student_information.semester];
		}
		// If the student is living off campus alone add any related utility
		// and rent that they might pay.
		else if ($housing_food.living_plan === 'off_campus_alone') {
			housing_food +=
				($housing_food.off_campus_alone.cable +
					$housing_food.off_campus_alone.electric +
					$housing_food.off_campus_alone.internet +
					$housing_food.off_campus_alone.natural_gas +
					$housing_food.off_campus_alone.phone +
					$housing_food.off_campus_alone.rent +
					$housing_food.off_campus_alone.water) *
				$semester_months[$student_information.semester];
		}

		return housing_food;
	}
);

export let books_supplies_total = derived([books_supplies], ([$books_supplies]) => {
	// Adding the books and supplies field to the total.
	return $books_supplies.books + $books_supplies.supplies;
});

export let transportation_total = derived(
	[transportation, student_information, semester_months, parking_permits],
	([$transportation, $student_information, $semester_months, $parking_permits]) => {
		let transportation = 0;

		// If the student is bringing a vehicle we add all related fields to the total.
		if ($transportation.has_vehicle === 'vehicle_yes') {
			let tp = $transportation;
			transportation =
				tp.parking_pass === "nothing" ? 0 : $parking_permits[tp.parking_pass] +
				(tp.car_payment + tp.insurance + tp.gas + tp.maintenance) *
				$semester_months[$student_information.semester];
		}
		// If the student is not bringing a vehicle we only add the other transport field
		// to the total.
		else if ($transportation.has_vehicle === 'vehicle_no') {
			transportation =
				$transportation.other_transport * $semester_months[$student_information.semester];
		}

		return transportation;
	}
);

export let personal_total = derived(
	[personal, student_information, semester_months],
	([$personal, $student_information, $semester_months]) => {
		let personal = 0;

		// Adding all of the fields together and multiplying by the current semester months.
		personal =
			($personal.takeout_coffee +
				$personal.groceries +
				$personal.phone_bill +
				$personal.subscriptions_memberships) *
			$semester_months[$student_information.semester];

		if ($personal.custom_expenses.length != 0) {
			$personal.custom_expenses.forEach((expense) => {
				if (expense.concurrency === 'semesterly') {
					personal += expense.amount;
				} else if (expense.concurrency === 'monthly') {
					personal += expense.amount * $semester_months[$student_information.semester];
				}
			});
		}

		return personal;
	}
);

export let funding_total = derived(
	[
		funding,
		tuition_fees,
		student_information,
		bright_futures_cost,
		florida_prepaid_cost,
		green_gold_cost,
		semester_months,
		static_vars
	],
	([
		$funding,
		$tuition_fees,
		$student_information,
		$bright_futures_cost,
		$florida_prepaid_cost,
		$green_gold_cost,
		$semester_months,
		$static_vars
	]) => {
		let funding = 0;

		// Initial funding values that dont rely on other fields.
		funding = $funding.grants + $funding.loans;

		// If Florida prepaid is yes, then we multiply the plan value by the chosen credit hours.
		if ($funding.has_fl_prepaid === 'prepaid_yes') {
			funding +=
				$florida_prepaid_cost[$funding.prepaid_plan] * $tuition_fees.credit_hours;
			if ($funding.prepaid_plan !== 'nothing' && $tuition_fees.credit_hours !== 0) {
				funding += $static_vars.prepaid_fee;
			}
			if ($funding.when_purchased === 'prepaid_plan_before') {
				funding += $static_vars.tuition_diff * $tuition_fees.credit_hours;
			}
		}

		// Add the flat fee for bright futures if it is picked.
		if ($funding.bright_futures === 'fms' && $tuition_fees.credit_hours !== 0) {
			funding += $bright_futures_cost.fms_fee;
		} else if ($funding.bright_futures === 'fas' && $tuition_fees.credit_hours !== 0) {
			funding += $bright_futures_cost.fas_fee;
		}

		// If the student is out of state and doesn't have florida prepaid we ask if they are receiving
		// a green and gold scholarship. If yes, then we add the cost of their pick.
		if (
			($student_information.tuition === 'out_of_state' || $student_information.tuition === 'international') &&
			$student_information.level === 'undergraduate' &&
			($student_information.semester === 'fall' || $student_information.semester === 'fall') &&
			$funding.has_fl_prepaid === 'prepaid_no'
		) {
			if ($funding.has_green_gold === 'gg_yes') {
				if ($tuition_fees.credit_hours > 11) {
					if ($funding.green_gold_award != 'nothing') {
						funding += $green_gold_cost[$funding.green_gold_award][$tuition_fees.credit_hours];
					}
				}
			}
		}

		// If the student has out of state tuition, we exclude the option for bright futures
		if (
			$student_information.tuition === 'in_state' &&
			$student_information.level === 'undergraduate'
		) {
			funding += $bright_futures_cost[$funding.bright_futures] * $tuition_fees.credit_hours;
		}

		// Adding the correct funding for each added scholarship by checking if it is monthly or
		// semesterly and adding the amount to the total.
		if ($funding.scholarships.length != 0) {
			$funding.scholarships.forEach((scholarship) => {
				if (scholarship.concurrency === 'semesterly') {
					funding += scholarship.amount;
				} else if (scholarship.concurrency === 'monthly') {
					funding += scholarship.amount * $semester_months[$student_information.semester];
				}
			});
		}

		return funding;
	}
);

export const total = derived(
	[
		tuition_fees_total,
		housing_food_total,
		books_supplies_total,
		transportation_total,
		personal_total,
		funding_total
	],
	([
		$tuition_fees_total,
		$housing_food_total,
		$books_supplies_total,
		$transportation_total,
		$personal_total,
		$funding_total
	]) => {
		// Returning the sum of all sections with a subtraction of the funding since its positive income.
		return (
			$tuition_fees_total +
			$housing_food_total +
			$books_supplies_total +
			$transportation_total +
			$personal_total -
			$funding_total
		);
	}
);

export const validated = derived([student_information], ($student_information) => {
	let error = {};

	let si_keys = Object.keys($student_information[0]);

	si_keys.forEach((key) => {
		if ($student_information[0][key] === 'nothing') {
			error[key] = 'invalid';
		}
	});

	return error;
});
