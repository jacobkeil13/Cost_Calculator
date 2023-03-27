import { derived, writable } from 'svelte/store';

export const current_step = writable(0);

export const static_vars = writable({
	credit_hour: 211.19
});

export const steps = writable([
	'Student Information',
	'Tuition & Fees',
	'Housing & Food',
	'Books & Supplies',
	'Transportation',
	'Personal',
	'Funding',
	'Review'
]);

export const dropdownOptions = writable({
	student_information: {
		campus: [
			{ value: 'tampa', label: 'Tampa' },
			{ value: 'st_pete', label: 'St. Pete' }
		],
		level: [
			{ value: 'undergraduate', label: 'Undergraduate' },
			{ value: 'graduate', label: 'Graduate' }
		],
		tuition: [
			{ value: 'in_state', label: 'In-State' },
			{ value: 'out_of_state', label: 'Out-Of-State' }
		],
		semester: [
			{ value: 'spring', label: 'Spring' },
			{ value: 'fall', label: 'Fall' },
			{ value: 'summer_a', label: 'Summer A' },
			{ value: 'summer_b', label: 'Summer B' },
			{ value: 'summer_ab', label: 'Summer AB' },
			{ value: 'summer_c', label: 'Summer C' }
		]
	},
	housing_food: {
		living: [
			{ value: 'on_campus', label: 'On-Campus' },
			{ value: 'off_campus_parents', label: 'Off-Campus with parents/family' },
			{ value: 'off_campus_alone', label: 'Off-Campus without parents/family' }
		],
		housing: {
			tampa: {
				Traditional: [
					{ value: 'beta_castor_hall', label: 'Beta Hall & Castor Hall (Double)', cost: '3070' },
					{ value: 'greek_village', label: 'Greek Village', cost: '3070' },
					{ value: 'village_single', label: 'The Village (Single)', cost: '4088' },
					{ value: 'village_double', label: 'The Village (Double)', cost: '5538' }
				],
				Suite: [
					{
						value: 'cjmph_double',
						label: 'Cypress/Juniper/Maple/Poplar Hall (Double)',
						cost: '3900'
					},
					{
						value: 'cjmph_corner_double',
						label: 'Cypress/Juniper/Maple/Poplar Hall (Corner Double)',
						cost: '4960'
					},
					{ value: 'village_suite_single', label: 'The Village (Single)', cost: '4710' },
					{ value: 'village_suite_double', label: 'The Village (Double)', cost: '4963' },
					{ value: 'village_suite_des', label: 'The Village (Double End Suite)', cost: '6158' }
				],
				Apartment: [
					{ value: 'km_apartment', label: 'Kosove/Magnolia Apartments (Double)', cost: '4148' },
					{
						value: 'chkm_apartment',
						label: 'Cypress/Holly/Kosove/Magnolia Apartments (Single)',
						cost: '4648'
					},
					{ value: 'holly_apartment', label: 'Holly Apartments (2 Bedroom Single)', cost: '5148' }
				]
			},
			st_pete: {
				'Ibis Hall': [
					{ value: 'two_shared', label: '2 Person Shared Room', cost: '4505' },
					{ value: 'three_shared', label: '3 Person Shared Room', cost: '2922' }
				],
				Pelican: [
					{ value: 'four_apartment', label: '4 Person Apartment Style', cost: '4671' },
					{ value: 'two_studio', label: '2 Person Studio Apartment', cost: '4505' },
					{ value: 'triple_pelican', label: 'Triple', cost: '2922' }
				],
				Osprey: [
					{ value: 'three_ss', label: '3 Person Shared Room', cost: '4671' },
					{ value: 'four_ss', label: '4 Person Single Suite', cost: '4671' },
					{ value: 'four_ds', label: '4 Person Double Suite', cost: '4505' },
					{ value: 'triple_osprey', label: 'Triple', cost: '2922' }
				]
			}
		},
		llc: [
			{ value: 'llc_no', label: "I don't live as an LLC", cost: '0' },
			{ value: 'honors', label: 'Honors', cost: '125' },
			{ value: 'engineering', label: 'Engineering', cost: '125' },
			{ value: 'education', label: 'Education', cost: '125' },
			{ value: 'bull_business', label: 'Bulls Business Community (BBC)', cost: '225' },
			{ value: 'pre_nursing', label: 'Pre-Nursing', cost: '225' },
			{ value: 'other', label: 'Other', cost: '0' }
		],
		food_plan: {
			tampa: {
				'First Time': [
					{ value: 'open_access', label: 'Open Access', cost: '2275' },
					{ value: 'any_15', label: 'Any 15', cost: '2150' },
					{ value: 'bull_175', label: 'BULL Block 175', cost: '1900' },
					{ value: 'bull_60', label: 'BULL Block 60', cost: '925' },
					{ value: 'bull_32', label: 'BULL Block 32', cost: '620' }
				],
				'Dining Dollars': [
					{ value: 'dd_300', label: 'Dining Dollars 300', cost: '300' },
					{ value: 'dd_500', label: 'Dining Dollars 500', cost: '500' },
					{ value: 'dd_1000', label: 'Dining Dollars 1000', cost: '1000' }
				],
				'Graduate Students': [
					{ value: 'gold_plan', label: 'Gold Plan ', cost: '248' },
					{ value: 'green_plan', label: 'Green Plan', cost: '157' },
					{ value: 'rocky_plan', label: 'Rocky Plan', cost: '94' }
				],
				'Graduate Dining Dollars': [
					{ value: 'gdd_100', label: 'DD 100', cost: '100' },
					{ value: 'gdd_300', label: 'DD 300', cost: '300' },
					{ value: 'gdd_500', label: 'DD 500', cost: '500' }
				]
			},
			st_pete: {
				'First Time': [
					{ value: 'sp_open-access', label: 'Open Access', cost: '2275' },
					{ value: 'sp_any-15', label: 'Any 15', cost: '2150' },
					{ value: 'sp_bull-175', label: 'BULL Block 175', cost: '1900' }
				]
			}
		}
	},
	transportation: [
		{ value: 'vehicle_no', label: 'No' },
		{ value: 'vehicle_yes', label: 'Yes' }
	],
	funding: {
		fl_prepaid: [
			{ value: 'prepaid_no', label: 'No' },
			{ value: 'prepaid_yes', label: 'Yes' }
		],
		prepaid_purchase: [
			{ value: 'before_date', label: 'Before January 1st, 2007' },
			{ value: 'after_date', label: 'After January 1st, 2007' }
		],
		prepaid_plan_before: [
			{ value: 'tuition_plan_before', label: 'Tuition Plan ($117.08 per credit hour)' },
			{
				value: 'tuition_local_before',
				label: 'Tuition and Local Fee Plan ($153.56 per credit hour)'
			}
		],
		prepaid_plan_after: [
			{ value: 'tuition_plan_after', label: 'Tuition Plan ($117.08 per credit hour)' },
			{
				value: 'tuition_local_after',
				label: 'Tuition and Local Fee Plan ($153.56 per credit hour)'
			},
			{
				value: 'tuition_diff_after',
				label: 'Tuition and Differential Fee Plan ($163.96 per credit hour)'
			},
			{
				value: 'tuition_local_diff_after',
				label: 'Tuition, Differential, Local Fee Plan ($200.44 per credit hour)'
			}
		],
		bright_futures: [
			{ value: 'bf_no', label: "I Don't Qualify" },
			{ value: 'fms', label: 'Florida Medallion Scholars' },
			{ value: 'fas', label: 'Florida Academic Scholars' }
		]
	}
});

export const cc_data = writable({
	student_information: {
		campus: 'nothing',
		level: 'nothing',
		tuition: 'nothing',
		semester: 'nothing'
	},
	tuition_fees: {
		credit_hours: '0',
		lab_fees: '0',
		other_fees: '0'
	},
	housing_food: {
		living: {
			living_plan: 'nothing',
			on_campus: {
				housing: 'nothing',
				llc: 'nothing'
			},
			off_campus_parents: {
				utility_fees: '0'
			},
			off_campus_alone: {
				rent: '0',
				electric: '0',
				water: '0',
				natural_gas: '0',
				internet: '0',
				cable: '0',
				phone: '0'
			}
		},
		food_plan: 'nothing'
	},
	books_supplies: {
		books: '0',
		supplies: '0'
	},
	transportation: {
		vehicle: {
			has_vehicle: 'nothing',
			parking_pass: '0',
			car_payment: '0',
			insurance: '0',
			gas: '0',
			maintenance: '0'
		},
		other_transport: '0'
	},
	personal_expenses: {
		takeout_coffee: '0',
		groceries: '0',
		health_care: '0',
		personal_care: '0',
		phone_bill: '0',
		entertainment_social: '0',
		travel_trips: '0',
		subscriptions_memberships: '0',
		clothing: '0',
		family_expenses: '0',
		org_dues: '0',
		hobbies: '0',
		pets: '0',
		holidays_gifts: '0',
		laundry: '0'
	},
	funding: {
		fl_prepaid: {
			has_fl_prepaid: 'nothing',
			when_purchased: 'nothing',
			prepaid_plan: 'nothing'
		},
		bright_futures: 'nothing',
		grants: '0',
		loans: '0',
		scholarships: [],
		jobs: [],
		other_funding: '0'
	}
});

export const total = derived([cc_data], ($cc_data) => {
	return parseInt($cc_data.books_supplies.books) + parseInt($cc_data.books_supplies.supplies);
});
