import { writable } from 'svelte/store';

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
		living: '',
		housing: '',
		llc: '',
		food_plan: ''
	},
	books_supplies: {
		books: '',
		supplies: ''
	},
	transportation: {
		has_car: 'No',
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
		grants: '',
		scholarships: '',
		loans: '',
		other: '',
		job_1: {
			hourly_wage: '',
			hours_per_week: ''
		},
		job_1: {
			hourly_wage: '',
			hours_per_week: ''
		},
		other_job: ''
	}
});
