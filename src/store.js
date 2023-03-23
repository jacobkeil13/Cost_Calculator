import { writable } from 'svelte/store';

export const current_slide = writable(0);

export const steps = writable([
	'Student',
	'Tuition & Fees',
	'Housing & Food',
	'Books & supplies',
	'Transportation',
	'Personal',
	'Review'
]);

export const dropdownOptions = writable({
	student_information: {
		level: [
			{ value: 'graduate', label: 'Graduate' },
			{ value: 'undergraduate', label: 'Undergraduate' }
		],
		tuition: [
			{ value: 'in-state', label: 'In-State' },
			{ value: 'out-of-state', label: 'Out-Of-State' }
		],
		semester: [
			{ value: 'spring', label: 'Spring' },
			{ value: 'fall', label: 'Fall' },
			{ value: 'summer-a', label: 'Summer A' },
			{ value: 'summer-b', label: 'Summer B' },
			{ value: 'summer-ab', label: 'Summer AB' },
			{ value: 'summer-c', label: 'Summer C' }
		]
	},
	housing_food: {
		living: [
			{ value: 'on-campus', label: 'On-Campus' },
			{ value: 'off-campus-parents', label: 'Off-Campus with parents/family' },
			{ value: 'off-campus-alone', label: 'Off-Campus without parents/family' }
		],
		housing: []
	}
});

export const cc_data = writable({
	student_information: {
		level: '',
		tuition: '',
		semester: ''
	},
	tuition_fees: {
		credit_hours: '',
		lab_fees: '',
		other_fees: ''
	},
	housing_food: {
		living: {
			on_campus: {
				housing: '',
				llc: ''
			},
			off_campus_parents: {
				utility_fees: ''
			},
			off_campus_alone: {
				rent: '',
				electric: '',
				water: '',
				natural_gas: '',
				internet: '',
				cable: '',
				phone: ''
			}
		},
		food_plan: ''
	},
	books_supplies: {
		books: '',
		supplies: ''
	},
	transportation: {
		vehicle: {
			has_vehicle: 'No',
			car_payment: '',
			insurance: '',
			gas: '',
			maintenance: ''
		},
		other_transport: ''
	},
	personal_expenses: {
		takeout_coffee: '',
		groceries: '',
		health_care: '',
		personal_care: '',
		phone_bill: '',
		entertainment_social: '',
		travel_trips: '',
		subscriptions_memberships: '',
		clothing: '',
		family_expenses: '',
		org_dues: '',
		hobbies: '',
		pets: '',
		holidays_gifts: '',
		laundry: ''
	},
	funding: {
		fl_prepaid: {
			has_fl_prepaid: 'No',
			when_purchased: '',
			prepaid_plan: ''
		},
		grants: '',
		scholarships: '',
		loans: '',
		other: '',
		job_1: {
			hourly_wage: '',
			hours_per_week: ''
		},
		job_2: {
			hourly_wage: '',
			hours_per_week: ''
		},
		other_job: ''
	}
});
