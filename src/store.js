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
		campus: [
			{ value: 'tampa', label: 'Tampa' },
			{ value: 'st-pete', label: 'St. Pete' }
		],
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
		housing: {
			tampa: {
				traditional: [
					{ value: 'beta-castor-hall', label: 'Beta Hall & Castor Hall (Double)', cost: '3070' },
					{ value: 'greek-village', label: 'Greek Village', cost: '3070' },
					{ value: 'village-single', label: 'The Village (Single)', cost: '4088' },
					{ value: 'village-double', label: 'The Village (Double)', cost: '5538' }
				],
				suite_style: [
					{ value: 'cjmph-double', label: 'Cypress/Juniper/Maple/Poplar Hall (Double)', cost: '3900' },
					{ value: 'cjmph-corner-double', label: 'Cypress/Juniper/Maple/Poplar Hall (Corner Double)', cost: '4960' },
					{ value: 'village-suite-single', label: 'The Village (Single)', cost: '4710' },
					{ value: 'village-suite-double', label: 'The Village (Double)', cost: '4963' },
					{ value: 'village-suite-des', label: 'The Village (Double End Suite)', cost: '6158' }
				],
				apartment_style: [
					{ value: 'km-apartment', label: 'Kosove/Magnolia Apartments (Double)', cost: '4148' },
					{ value: 'chkm-apartment', label: 'Cypress/Holly/Kosove/Magnolia Apartments (Single)', cost: '4648' },
					{ value: 'holly-apartment', label: 'Holly Apartments (2 Bedroom Single)', cost: '5148' }
				]
			},
			st_pete: {
				ibis_hall: [
					{ value: 'two-shared', label: '2 Person Shared Room', cost: '4505' },
					{ value: 'three-shared', label: '3 Person Shared Room', cost: '2922' }
				],
				pelican: [
					{ value: 'four-apartment', label: '4 Person Apartment Style', cost: '4671' },
					{ value: 'two-studio', label: '2 Person Studio Apartment', cost: '4505' },
					{ value: 'triple-pelican', label: 'Triple', cost: '2922' }
				],
				osprey: [
					{ value: 'three-ss', label: '3 Person Shared Room', cost: '4671' },
					{ value: 'four-ss', label: '4 Person Single Suite', cost: '4671' },
					{ value: 'four-ds', label: '4 Person Double Suite', cost: '4505' },
					{ value: 'triple_osprey', label: 'Triple', cost: '2922' }
				]
			}
		},
		llc: [
			{ value: 'no', label: 'I Don\'t Live is an LLC', cost: '0' },
			{ value: 'honors', label: 'Honors', cost: '125' },
			{ value: 'engineering', label: 'Engineering', cost: '125' },
			{ value: 'education', label: 'Education', cost: '125' },
			{ value: 'bull-business', label: 'Bulls Business Community (BBC)', cost: '225' },
			{ value: 'pre-nursing', label: 'Pre-Nursing', cost: '225' },
			{ value: 'other', label: 'Other', cost: '0' },
		],
		food_plan: {
			tampa: {
				first_time: [
					{ value: 'open-access', label: 'Open Access', cost: '2275' },
					{ value: 'any-15', label: 'Any 15', cost: '2150' },
					{ value: 'bull-175', label: 'BULL Block 175', cost: '1900' },
					{ value: 'bull-60', label: 'BULL Block 60', cost: '925' },
					{ value: 'bull-32', label: 'BULL Block 32', cost: '620' }
				],
				dining_dollars: [
					{ value: 'dd-300', label: 'Dining Dollars 300', cost: '300' },
					{ value: 'dd-500', label: 'Dining Dollars 500', cost: '500' },
					{ value: 'dd-1000', label: 'Dining Dollars 1000', cost: '1000' },
				],
				grad_students: [
					{ value: 'gold-plan', label: 'Gold Plan ', cost: '248' },
					{ value: 'green_plan', label: 'Green Plan', cost: '157' },
					{ value: 'rocky_plan', label: 'Rocky Plan', cost: '94' },
				],
				grad_dining_dollars: [
					{ value: 'gdd-100', label: 'DD 100', cost: '100' },
					{ value: 'gdd-300', label: 'DD 300', cost: '300' },
					{ value: 'gdd-500', label: 'DD 500', cost: '500' },
				],
			},
			st_pete: {
				first_time: [
					{ value: 'sp-open-access', label: 'Open Access', cost: '2275' },
					{ value: 'sp-any-15', label: 'Any 15', cost: '2150' },
					{ value: 'sp-bull-175', label: 'BULL Block 175', cost: '1900' },
				],
			}
		},
		transportation: [
			{ value: 'vehicle-no', label: 'No' },
			{ value: 'vehicle-yes', label: 'Yes' },
		],
		funding: {
			fl_prepaid: [
				{ value: 'prepaid-no', label: 'No' },
				{ value: 'prepaid-yes', label: 'Yes' }
			],
			prepaid_purchase: [
				{ value: 'before', label: 'Before January 1st, 2007' },
				{ value: 'after', label: 'After January 1st, 2007' }
			],
			prepaid_plan: [
				{ value: 'tuition-plan', label: 'Tuition Plan ($117.08 per credit hour)' },
				{ value: 'tuition-local', label: 'Tuition and Local Fee Plan ($153.56 per credit hour)' }
			],
			bright_futures: [
				{ value: 'no', label: 'I Don\'t Qualify' },
				{ value: 'fms', label: 'Florida Medallion Scholars' },
				{ value: 'fas', label: 'Florida Academic Scholars' }
			]
		}
	}
});

export const cc_data = writable({
	student_information: {
		campus: '',
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
