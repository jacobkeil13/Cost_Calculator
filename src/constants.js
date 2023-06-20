import { readable } from 'svelte/store';

export const enums = {
	WEEKS_IN_MONTH: 4
};

export const static_vars = readable({
	nothing: {
		nothing: 0,
		in_state: 0,
		out_of_state: 0,
		international: 0
	},
	graduate: {
		nothing: 0,
		in_state: 431.43,
		out_of_state: 877.17,
		international: 877.17,
	},
	undergraduate: {
		nothing: 0,
		in_state: 211.19,
		out_of_state: 575.01,
		international: 575.01
	},
	flat_fees: {
		nothing: 0,
		value: 37
	},
	tuition_diff: 46.88,
	prepaid_fee: 17
});

export const semester_months = readable({
	nothing: 0,
	fall: 4.5,
	spring: 4.5,
	summer_a: 1.5,
	summer_b: 1.5,
	summer_bc: 2.75,
	summer_c_ac: 2.5,
	summer_ab_abc: 3
});

export const florida_prepaid_cost = readable({
	nothing: 0,
	tuition_plan: 117.08,
	tuition_local: 153.56,
	tuition_diff: 163.96,
	tuition_local_diff: 200.44
});

export const housing_cost = readable({
	nothing: 0,
	beta_castor_hall: 3070,
	greek_village: 3070,
	village_single: 5538,
	village_double: 4088,
	cjmph_double: 3900,
	cjmph_corner_double: 4960,
	village_suite_single: 6158,
	village_suite_double: 4963,
	village_suite_des: 4710,
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
	triple_osprey: 2922,
	endeavor_dt: 1555.74,
	endeavor_ds: 1888.56,
	endeavor_st: 2107.43,
	endeavor_ss: 2343.5,
	endeavor_dt_ab_abc: 3075.3,
	endeavor_ds_ab_abc: 3733.2,
	endeavor_st_ab_abc: 4165.85,
	endeavor_ss_ab_abc: 4632.5,
	endeavor_dt_c_ac: 2568.78,
	endeavor_ds_c_ac: 3118.32,
	endeavor_st_c_ac: 3479.71,
	endeavor_ss_c_ac: 3869.5,
	cypress_ds_b: 1483.93,
	hsa_b: 1768.59,
	hrsa_b: 1959.08,
	bcdt_b: 1168.31,
	btt_b: 1168.31,
	sp_four_bed: 1777.62,
	sp_four_ds: 1714.41,
	sp_four_bed_ab_abc: 3555.24,
	sp_four_ds_ab_abc: 3429.68,
	sp_four_bed_c_ac: 2935.14,
	sp_four_ds_c_ac: 2831.58
});

export const bright_futures_cost = readable({
	nothing: 0,
	bf_no: 0,
	fms: 156.51,
	fas: 208.69,
	fms_fee: 12.75,
	fas_fee: 17
});

export const green_gold_cost = readable({
	nothing: 0,
	presidential: {
		12: 4365.84,
		13: 4729.66,
		14: 5093.48,
		15: 5457.30,
		16: 5500.00,
		17: 5500.00,
		18: 5500.00
	},
	directors: {
		12: 4000.00,
		13: 4000.00,
		14: 4000.00,
		15: 4000.00,
		16: 4000.00,
		17: 4000.00,
		18: 4000.00
	},
	scholars: {
		12: 2500.00,
		13: 2500.00,
		14: 2500.00,
		15: 2500.00,
		16: 2500.00,
		17: 2500.00,
		18: 2500.00
	},
	student_scholarship: {
		12: 500.00,
		13: 500.00,
		14: 500.00,
		15: 500.00,
		16: 500.00,
		17: 500.00,
		18: 500.00
	}
});

export const food_plan_cost = readable({
	nothing: 0,
	no_food_plan: 0,
	open_access_vib: 2650,
	open_access_seven: 2545,
	open_access_summer_a_b: 1075,
	open_access_summer_c: 1655,
	open_access_summer_ab: 2150,
	any_14: 2350,
	bull_150_dd_450: 1948,
	bull_150_dd_300: 1813,
	bull_150_dd_150: 1673,
	bull_80_dd_450: 1265,
	bull_80_dd_300: 1120,
	bull_80_dd_150: 975,
	bull_50_dd_450: 975,
	bull_50_dd_300: 840,
	bull_50_dd_150: 695,
	bull_summer: 919,
	gold_plan: 248,
	green_plan: 157,
	rocky_plan: 94,
	gdd_100: 100,
	gdd_300: 300,
	gdd_500: 500
});

export const llc_cost = readable({
	nothing: 0,
	llc_no: 0,
	honors: 125,
	engineering: 125,
	education: 125,
	bull_business: 225,
	pre_nursing: 225
});

export const parking_permits = readable({
	nothing: 0,
	tampa_student_semester: 113,
	tampa_nonstudent_semester: 91,
	tampa_parknride_annual: 59,
	st_pete_student_semester: 118,
	st_pete_nonstudent_semester: 88,
	sarasota_student_semester: 50,
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
			{ value: 'out_of_state', label: 'Out-Of-State' },
			{ value: 'international', label: 'International' },
		],
		semester: [
			{ value: 'fall', label: 'Fall' },
			{ value: 'spring', label: 'Spring' },
			{ value: 'summer_a', label: 'Summer A' },
			{ value: 'summer_b', label: 'Summer B' },
			{ value: 'summer_bc', label: 'Summer BC' },
			{ value: 'summer_c_ac', label: 'Summer C or AC' },
			{ value: 'summer_ab_abc', label: 'Summer AB or ABC' }
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
				fall: {
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
				spring: {
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
				summer_a: {
					'Returning Students': [
						{ value: 'endeavor_dt', label: 'Endeavor Double Traditional', cost: '1555.74' },
						{ value: 'endeavor_ds', label: 'Endeavor Double Suite', cost: '1888.56' },
						{ value: 'endeavor_st', label: 'Endeavor Single Traditional', cost: '2107.43' },
						{ value: 'endeavor_ss', label: 'Endeavor Single Suite', cost: '2343.50' }
					]
				},
				summer_b: {
					'Returning Students': [
						{ value: 'endeavor_dt', label: 'Endeavor Double Traditional', cost: '1555.74' },
						{ value: 'endeavor_ds', label: 'Endeavor Double Suite', cost: '1888.56' },
						{ value: 'endeavor_st', label: 'Endeavor Single Traditional', cost: '2107.43' },
						{ value: 'endeavor_ss', label: 'Endeavor Single Suite', cost: '2343.50' }
					],
					Freshman: [
						{ value: 'cypress_ds_b', label: 'Cypress Double Suite', cost: '1483.93' },
						{ value: 'hsa_b', label: 'Holly Single Apartment', cost: '1768.59' },
						{ value: 'hrsa_b', label: 'Holly 2 Room Single Apartment', cost: '1959.08' },
						{ value: 'bcdt_b', label: 'Beta/Castor Double Traditional', cost: '1168.31' },
						{ value: 'btt_b', label: 'Beta Triple Traditional', cost: '1168.31' }
					]
				},
				summer_bc: {
					'Returning Students': [
						{ value: 'endeavor_dt_ab_abc', label: 'Endeavor Double Traditional', cost: '3075.30' },
						{ value: 'endeavor_ds_ab_abc', label: 'Endeavor Double Suite', cost: '3733.20' },
						{ value: 'endeavor_st_ab_abc', label: 'Endeavor Single Traditional', cost: '4165.85' },
						{ value: 'endeavor_ss_ab_abc', label: 'Endeavor Single Suite', cost: '4632.50' }
					]
				},
				summer_ab_abc: {
					'Returning Students': [
						{ value: 'endeavor_dt_ab_abc', label: 'Endeavor Double Traditional', cost: '3075.30' },
						{ value: 'endeavor_ds_ab_abc', label: 'Endeavor Double Suite', cost: '3733.20' },
						{ value: 'endeavor_st_ab_abc', label: 'Endeavor Single Traditional', cost: '4165.85' },
						{ value: 'endeavor_ss_ab_abc', label: 'Endeavor Single Suite', cost: '4632.50' }
					]
				},
				summer_c_ac: {
					'Returning Students': [
						{ value: 'endeavor_dt_c_ac', label: 'Endeavor Double Traditional', cost: '2568.78' },
						{ value: 'endeavor_ds_c_ac', label: 'Endeavor Double Suite', cost: '3118.32' },
						{ value: 'endeavor_st_c_ac', label: 'Endeavor Single Traditional', cost: '3479.71' },
						{ value: 'endeavor_ss_c_ac', label: 'Endeavor Single Suite', cost: '3869.50' }
					]
				}
			},
			st_pete: {
				fall: {
					'Ibis Hall': [
						{ value: 'two_shared', label: '2 Person Shared Room', cost: '4505' },
						{ value: 'three_shared', label: '3 Person Shared Room', cost: '2922' }
					],
					Pelican: [
						{ value: 'four_apartment', label: '4 Person Apartment Style', cost: '4671' },
						{ value: 'two_studio', label: '2 Person Studio Apartment', cost: '4505' },
						{ value: 'triple_pelican', label: 'Shared Bedroom', cost: '2922' }
					],
					Osprey: [
						{ value: 'three_ss', label: '3 Person Single Suite', cost: '4671' },
						{ value: 'four_ss', label: '4 Person Single Suite', cost: '4671' },
						{ value: 'four_ds', label: '4 Person Double Suite', cost: '4505' }
					]
				},
				spring: {
					'Ibis Hall': [
						{ value: 'two_shared', label: '2 Person Shared Room', cost: '4505' },
						{ value: 'three_shared', label: '3 Person Triple', cost: '2922' }
					],
					Pelican: [
						{ value: 'four_apartment', label: '4 Person Apartment Style', cost: '4671' },
						{ value: 'two_studio', label: '2 Person Studio Apartment', cost: '4505' },
						{ value: 'triple_pelican', label: 'Shared Bedroom', cost: '2922' }
					],
					Osprey: [
						{ value: 'three_ss', label: '3 Person Single Suite', cost: '4671' },
						{ value: 'four_ss', label: '4 Person Single Suite', cost: '4671' },
						{ value: 'four_ds', label: '4 Person Double Suite', cost: '4505' }
					]
				},
				summer_a: {
					'Returning Students': [
						{ value: 'sp_four_bed', label: '4 Person Private Bedroom', cost: '1777.62' },
						{ value: 'sp_four_ds', label: '4 Person Double Suite', cost: '1714.41' }
					]
				},
				summer_b: {
					'Returning Students': [
						{ value: 'sp_four_bed', label: '4 Person Private Bedroom', cost: '1777.62' },
						{ value: 'sp_four_ds', label: '4 Person Double Suite', cost: '1714.41' }
					]
				},
				summer_bc: {
					'Returning Students': [
						{ value: 'sp_four_bed_c_ac', label: '4 Person Private Bedroom', cost: '2935.14' },
						{ value: 'sp_four_ds_c_ac', label: '4 Person Double Suite', cost: '2831.58' }
					]
				},
				summer_ab_abc: {
					'Returning Students': [
						{ value: 'sp_four_bed_ab_abc', label: '4 Person Private Bedroom', cost: '3555.24' },
						{ value: 'sp_four_ds_ab_abc', label: '4 Person Double Suite', cost: '3429.68' }
					]
				},
				summer_c_ac: {
					'Returning Students': [
						{ value: 'sp_four_bed_c_ac', label: '4 Person Private Bedroom', cost: '2935.14' },
						{ value: 'sp_four_ds_c_ac', label: '4 Person Double Suite', cost: '2831.58' }
					]
				}
			},
			sarasota: {}
		},
		llc: {
			tampa: [
				{ value: 'llc_no', label: "I don't live in an LLC", cost: '0' },
				{ value: 'honors', label: 'Honors', cost: '125' },
				{ value: 'engineering', label: 'Engineering', cost: '125' },
				{ value: 'education', label: 'Education', cost: '125' },
				{ value: 'bull_business', label: 'Bulls Business Community (BBC)', cost: '225' },
				{ value: 'pre_nursing', label: 'Pre-Nursing', cost: '225' }
			],
			st_pete: [
				{ value: 'llc_no', label: "I don't live in an LLC", cost: '0' },
				{ value: 'honors', label: 'Honors', cost: '125' },
				{ value: 'bull_business', label: 'Bulls Business Community (BBC)', cost: '225' }
			],
			sarasota: []
		},
		food_plan: {
			tampa: {
				fall: {
					'First Time': [
						{ value: 'open_access_vib', label: 'Open Access VIB', cost: '2650' },
						{ value: 'open_access_seven', label: 'Open Access', cost: '2545' },
						{ value: 'any_14', label: 'Any 14', cost: '2350' },
					],
					'Bull Block': [
						{ value: 'bull_150_dd_450', label: 'Bull Block 150 (450 DD)', cost: '1948' },
						{ value: 'bull_150_dd_300', label: 'Bull Block 150 (300 DD)', cost: '1813' },
						{ value: 'bull_150_dd_150', label: 'Bull Block 150 (150 DD)', cost: '1673' },
						{ value: 'bull_80_dd_450', label: 'Bull Block 80 (450 DD)', cost: '1265' },
						{ value: 'bull_80_dd_300', label: 'Bull Block 80 (300 DD)', cost: '1120' },
						{ value: 'bull_80_dd_150', label: 'Bull Block 80 (150 DD)', cost: '975' },
						{ value: 'bull_50_dd_450', label: 'Bull Block 50 (450 DD)', cost: '975' },
						{ value: 'bull_50_dd_300', label: 'Bull Block 50 (300 DD)', cost: '840' },
						{ value: 'bull_50_dd_150', label: 'Bull Block 50 (150 DD)', cost: '695' }
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
				spring: {
					'First Time': [
						{ value: 'open_access_vib', label: 'Open Access VIB', cost: '2650' },
						{ value: 'open_access_seven', label: 'Open Access', cost: '2545' },
						{ value: 'any_14', label: 'Any 14', cost: '2350' },
					],
					'Bull Block': [
						{ value: 'bull_150_dd_450', label: 'Bull Block 150 (450 DD)', cost: '1948' },
						{ value: 'bull_150_dd_300', label: 'Bull Block 150 (300 DD)', cost: '1813' },
						{ value: 'bull_150_dd_150', label: 'Bull Block 150 (150 DD)', cost: '1673' },
						{ value: 'bull_80_dd_450', label: 'Bull Block 80 (450 DD)', cost: '1265' },
						{ value: 'bull_80_dd_300', label: 'Bull Block 80 (300 DD)', cost: '1120' },
						{ value: 'bull_80_dd_150', label: 'Bull Block 80 (150 DD)', cost: '975' },
						{ value: 'bull_50_dd_450', label: 'Bull Block 50 (450 DD)', cost: '975' },
						{ value: 'bull_50_dd_300', label: 'Bull Block 50 (300 DD)', cost: '840' },
						{ value: 'bull_50_dd_150', label: 'Bull Block 50 (150 DD)', cost: '695' }
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
				summer_a: {
					'First Time': [
						{ value: 'open_access_summer_a_b', label: 'Summer Open Access', cost: '1075' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' }
					]
				},
				summer_b: {
					'First Time': [
						{ value: 'open_access_summer_a_b', label: 'Summer Open Access', cost: '1075' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' }
					]
				},
				summer_bc: {
					'First Time': [
						{ value: 'open_access_summer_c', label: 'Summer Open Access', cost: '1655' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' },
					]
				},
				summer_ab_abc: {
					'First Time': [
						{ value: 'open_access_summer_ab', label: 'Summer Open Access', cost: '2150' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' },
					]
				},
				summer_c_ac: {
					'First Time': [
						{ value: 'open_access_summer_c', label: 'Summer Open Access', cost: '1655' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' },
					]
				}
			},
			st_pete: {
				fall: {
					'First Time': [
						{ value: 'open_access_vib', label: 'Open Access VIB', cost: '2650' },
						{ value: 'open_access_seven', label: 'Open Access', cost: '2545' },
						{ value: 'any_14', label: 'Any 14', cost: '2350' },
					],
					'Bull Block': [
						{ value: 'bull_150_dd_450', label: 'Bull Block 150 (450 DD)', cost: '1948' },
						{ value: 'bull_150_dd_300', label: 'Bull Block 150 (300 DD)', cost: '1813' },
						{ value: 'bull_150_dd_150', label: 'Bull Block 150 (150 DD)', cost: '1673' },
						{ value: 'bull_80_dd_450', label: 'Bull Block 80 (450 DD)', cost: '1265' },
						{ value: 'bull_80_dd_300', label: 'Bull Block 80 (300 DD)', cost: '1120' },
						{ value: 'bull_80_dd_150', label: 'Bull Block 80 (150 DD)', cost: '975' },
						{ value: 'bull_50_dd_450', label: 'Bull Block 50 (450 DD)', cost: '975' },
						{ value: 'bull_50_dd_300', label: 'Bull Block 50 (300 DD)', cost: '840' },
						{ value: 'bull_50_dd_150', label: 'Bull Block 50 (150 DD)', cost: '695' }
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
				spring: {
					'First Time': [
						{ value: 'open_access_vib', label: 'Open Access VIB', cost: '2650' },
						{ value: 'open_access_seven', label: 'Open Access', cost: '2545' },
						{ value: 'any_14', label: 'Any 14', cost: '2350' },
					],
					'Bull Block': [
						{ value: 'bull_150_dd_450', label: 'Bull Block 150 (450 DD)', cost: '1948' },
						{ value: 'bull_150_dd_300', label: 'Bull Block 150 (300 DD)', cost: '1813' },
						{ value: 'bull_150_dd_150', label: 'Bull Block 150 (150 DD)', cost: '1673' },
						{ value: 'bull_80_dd_450', label: 'Bull Block 80 (450 DD)', cost: '1265' },
						{ value: 'bull_80_dd_300', label: 'Bull Block 80 (300 DD)', cost: '1120' },
						{ value: 'bull_80_dd_150', label: 'Bull Block 80 (150 DD)', cost: '975' },
						{ value: 'bull_50_dd_450', label: 'Bull Block 50 (450 DD)', cost: '975' },
						{ value: 'bull_50_dd_300', label: 'Bull Block 50 (300 DD)', cost: '840' },
						{ value: 'bull_50_dd_150', label: 'Bull Block 50 (150 DD)', cost: '695' }
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
				summer_a: {
					'First Time': [
						{ value: 'open_access_summer_a_b', label: 'Summer Open Access', cost: '1075' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' }
					]
				},
				summer_b: {
					'First Time': [
						{ value: 'open_access_summer_a_b', label: 'Summer Open Access', cost: '1075' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' }
					]
				},
				summer_bc: {
					'First Time': [
						{ value: 'open_access_summer_c', label: 'Summer Open Access', cost: '1655' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' },
					]
				},
				summer_ab_abc: {
					'First Time': [
						{ value: 'open_access_summer_ab', label: 'Summer Open Access', cost: '2150' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' },
					]
				},
				summer_c_ac: {
					'First Time': [
						{ value: 'open_access_summer_c', label: 'Summer Open Access', cost: '1655' },
						{ value: 'bull_summer', label: 'BULL Block 75', cost: '919' },
					]
				}
			},
			sarasota: {}
		}
	},
	transportation: {
		has_car: [
				{ value: 'vehicle_no', label: 'No' },
				{ value: 'vehicle_yes', label: 'Yes' }
		],
		parking_permits: {
			tampa: [
				{ value: 'tampa_student_semester', label: 'Resident Student - Semester' },
				{ value: 'tampa_nonstudent_semester', label: 'Non Resident Student - Semester' },
				{ value: 'tampa_parknride_annual', label: 'Park-n-Ride - Annual' }
			],
			st_pete: [
				{ value: 'st_pete_student_semester', label: 'Resident Student - Semester' },
				{ value: 'st_pete_nonstudent_semester', label: 'Non Resident Student - Semester' },
			],
			sarasota: [
				{ value: 'sarasota_student_semester', label: 'Student Permit - Semester' },
			]
		}
	},
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
			{ value: 'tuition_plan', label: 'Tuition Plan ($117.08)' },
			{
				value: 'tuition_local',
				label: 'Tuition and Local Fee Plan ($153.56)'
			}
		],
		prepaid_plan_after: [
			{ value: 'tuition_plan', label: 'Tuition Plan ($117.08)' },
			{
				value: 'tuition_local',
				label: 'Tuition and Local Fee Plan ($153.56)'
			},
			{
				value: 'tuition_diff',
				label: 'Tuition and Differential Fee Plan ($163.96)'
			},
			{
				value: 'tuition_local_diff',
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
			gg_options: {
				'Green & Gold': [
					{ value: 'presidential', label: 'Presidential Award' },
					{ value: 'directors', label: 'Directors Award' },
					{ value: 'scholars', label: 'Scholars Award' },
				],
				'Scholarships': [
					{ value: 'student_scholarship', label: 'International Student Scholarship' }
				]
			}
		}
	}
});
