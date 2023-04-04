import { readable, writable } from 'svelte/store';

export const current_step = writable(0);

const defaultData = readable({
	student_information: {
		campus: 'tampa',
		level: 'undergraduate',
		tuition: 'in_state',
		semester: 'fall'
	},
	tuition_fees: {
		credit_hours: 0,
		lab_fees: 0,
		other_fees: 0
	},
	housing_food: {
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
	},
	books_supplies: {
		books: 0,
		supplies: 0
	},
	transportation: {
		has_vehicle: 'vehicle_no',
		parking_pass: 0,
		car_payment: 0,
		insurance: 0,
		gas: 0,
		maintenance: 0,
		other_transport: 0
	},
	personal: {
		takeout_coffee: 0,
		groceries: 0,
		health_care: 0,
		personal_care: 0,
		phone_bill: 0,
		entertainment_social: 0,
		travel_trips: 0,
		subscriptions_memberships: 0,
		clothing: 0,
		family_expenses: 0,
		org_dues: 0,
		hobbies: 0,
		pets: 0,
		holidays_gifts: 0,
		laundry: 0
	},
	funding: {
		has_fl_prepaid: 'prepaid_no',
		has_green_gold: 'nothing',
		when_purchased: 'prepaid_plan_before',
		prepaid_plan: 'tuition_plan_before',
		bright_futures: 'bf_no',
		green_gold_award: 'gg_no',
		grants: 0,
		loans: 0,
		scholarships: [],
		jobs: [],
		other_funding: 0
	}
});

export const calculator_data = writable(defaultData);
