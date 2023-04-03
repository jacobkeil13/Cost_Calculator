import { readable } from 'svelte/store';

export const enums = {
	WEEKS_IN_MONTH: 4
};

export const static_vars = readable({
	graduate: {
		in_state: 438.83,
		out_of_state: 880.25
	},
	undergraduate: {
		in_state: 211.19,
		out_of_state: 578.09
	},
	tampa_flat: 37,
	sarasota_manatee_flat: 17
});

export const semester_months = readable({
	spring: 4.5,
	fall: 4.5,
	summer_a: 1,
	summer_b: 1,
	summer_c: 2.5,
	summer_ab: 3,
	summer_ac: 2.5,
	summer_abc: 3
});

export const florida_prepaid_cost = readable({
	tuition_plan_before: 117.08,
	tuition_local_before: 153.56,
	tuition_plan_after: 117.08,
	tuition_local_after: 153.56,
	tuition_diff_after: 163.96,
	tuition_local_diff_after: 200.44
});

export const housing_cost = readable({
	nothing: 0,
	beta_castor_hall: 3070,
	greek_village: 3070,
	village_single: 4088,
	village_double: 5538,
	cjmph_double: 3900,
	cjmph_corner_double: 4960,
	village_suite_single: 4710,
	village_suite_double: 4963,
	village_suite_des: 6158,
	km_apartment: 4148,
	chkm_apartment: 4648,
	holly_apartment: 5148,
	two_shared: 4505,
	three_shared: 2922,
	four_apartment: 4671,
	two_studio: 4505,
	triple_pelican: 2922,
	three_ss: 4671,
	four_ss: 4671,
	four_ds: 4505,
	triple_osprey: 2922
});

export const bright_futures_cost = readable({
	nothing: 0,
	bf_no: 0,
	fms: 1890.99,
	fas: 2521.28
});

export const green_gold_cost = readable({
	nothing: 0,
	presidential: 4365.84,
	directors: 4365.84,
	scholars: 3000
});

export const food_plan_cost = readable({
	nothing: 0,
	no_food_plan: 0,
	open_access: 2275,
	any_15: 2150,
	bull_175: 1900,
	bull_60: 925,
	bull_32: 620,
	dd_300: 300,
	dd_500: 500,
	dd_1000: 1000,
	gold_plan: 248,
	green_plan: 157,
	rocky_plan: 94,
	gdd_100: 100,
	gdd_300: 300,
	gdd_500: 500,
	sp_open_access: 2275,
	sp_any_15: 2150,
	sp_bull_175: 1900
});

export const llc_cost = readable({
	nothing: 0,
	llc_no: 0,
	honors: 125,
	engineering: 125,
	education: 125,
	bull_business: 125,
	pre_nursing: 125
});

export const steps = readable([
	'Student Information',
	'Tuition & Fees',
	'Housing & Food',
	'Books & Supplies',
	'Transportation',
	'Personal',
	'Funding',
	'Summary'
]);

export const dropdownOptions = readable({
	student_information: {
		campus: [
			{ value: 'tampa', label: 'Tampa' },
			{ value: 'st_pete', label: 'St. Pete' },
			{ value: 'sarasota', label: 'Sarasota Manatee' }
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
			{ value: 'fall', label: 'Fall' },
			{ value: 'spring', label: 'Spring' },
			{ value: 'summer_a', label: 'Summer A' },
			{ value: 'summer_b', label: 'Summer B' },
			{ value: 'summer_c', label: 'Summer C' },
			{ value: 'summer_ab', label: 'Summer AB' },
			{ value: 'summer_ac', label: 'Summer AC' },
			{ value: 'summer_abc', label: 'Summer ABC' },
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
			},
			sarasota: {
				None: [
					{ value: 'nothing', label: 'Sarasota Manatee has no housing', cost: '0' }
				]
			}
		},
		llc: [
			{ value: 'llc_no', label: "I don't live in an LLC", cost: '0' },
			{ value: 'honors', label: 'Honors', cost: '125' },
			{ value: 'engineering', label: 'Engineering', cost: '125' },
			{ value: 'education', label: 'Education', cost: '125' },
			{ value: 'bull_business', label: 'Bulls Business Community (BBC)', cost: '225' },
			{ value: 'pre_nursing', label: 'Pre-Nursing', cost: '225' }
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
					{ value: 'sp_open_access', label: 'Open Access', cost: '2275' },
					{ value: 'sp_any_15', label: 'Any 15', cost: '2150' },
					{ value: 'sp_bull_175', label: 'BULL Block 175', cost: '1900' }
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
			{ value: 'prepaid_plan_before', label: 'Before January 1st, 2007' },
			{ value: 'prepaid_plan_after', label: 'After January 1st, 2007' }
		],
		prepaid_plan_before: [
			{ value: 'tuition_plan_before', label: 'Tuition Plan ($117.08)' },
			{
				value: 'tuition_local_before',
				label: 'Tuition and Local Fee Plan ($153.56)'
			}
		],
		prepaid_plan_after: [
			{ value: 'tuition_plan_after', label: 'Tuition Plan ($117.08)' },
			{
				value: 'tuition_local_after',
				label: 'Tuition and Local Fee Plan ($153.56)'
			},
			{
				value: 'tuition_diff_after',
				label: 'Tuition and Differential Fee Plan ($163.96)'
			},
			{
				value: 'tuition_local_diff_after',
				label: 'Tuition, Differential, Local Fee Plan ($200.44)'
			}
		],
		bright_futures: [
			{ value: 'bf_no', label: "I Don't Qualify" },
			{ value: 'fms', label: 'Florida Medallion Scholars' },
			{ value: 'fas', label: 'Florida Academic Scholars' }
		],
		gg_scholarship: {
			has_scholarship: [
				{ value: 'gg_no', label: 'No' },
				{ value: 'gg_yes', label: 'Yes' }
			],
			gg_options: [
				{ value: 'presidential', label: 'Presidential Award' },
				{ value: 'directors', label: 'Directors Award' },
				{ value: 'scholars', label: 'Scholars Award' }
			]
		}
	}
});
