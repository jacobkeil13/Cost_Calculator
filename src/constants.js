import { readable, writable } from 'svelte/store';

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
	summer_ab: 2,
	summer_c: 2.5
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
	fas: 2521.28,
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
	'Review'
]);
