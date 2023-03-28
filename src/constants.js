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

export const florida_prepaid = readable({
  tuition_plan_before: 117.08,
  tuition_local_before: 153.56,
  tuition_plan_after: 117.08,
  tuition_local_after: 153.56,
  tuition_diff_after: 163.96,
  tuition_local_diff_after: 200.44
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