import { derived } from 'svelte/store';
import {
	student_information,
	tuition_fees,
	housing_food,
	books_supplies,
	transportation,
	personal,
	funding
} from './store';
import { dropdownOptions, static_vars } from './constants';

function searchObj(obj, value) {
	if (obj === undefined || value === 'nothing') {
		return undefined;
	} else {
		let keys = Object.keys(obj);
		let label = '';

		keys.forEach((key, i) => {
			obj[key].forEach((item, k) => {
				if (item.value === value) {
					label = item.label;
				}
			});
		});

		return label;
	}
}

export const review_data = derived(
	[
		dropdownOptions,
		student_information,
		tuition_fees,
		housing_food,
		books_supplies,
		transportation,
		personal,
		funding,
		static_vars
	],
	([
		$dropdownOptions,
		$student_information,
		$tuition_fees,
		$housing_food,
		$books_supplies,
		$transportation,
		$personal,
		$funding,
		$static_vars
	]) => {
		return {
			student_information: [
				{
					question: {
						mobile: 'Campus:',
						desktop: 'What campus are you going to?'
					},
					value: $dropdownOptions.student_information.campus.find(
						(i) => i.value === $student_information.campus
					)?.label || "None Picked"
				},
				{
					question: {
						mobile: 'Level:',
						desktop: 'What kind of student are you?'
					},
					value: $dropdownOptions.student_information.level.find(
						(i) => i.value === $student_information.level
					)?.label || "None Picked"
				},
				{
					question: {
						mobile: 'Tuition:',
						desktop: 'What tuition do you need?'
					},
					value: $dropdownOptions.student_information.tuition.find(
						(i) => i.value === $student_information.tuition
					)?.label || "None Picked"
				},
				{
					question: {
						mobile: 'Semester:',
						desktop: 'What semester are you going into?'
					},
					value: $dropdownOptions.student_information.semester.find(
						(i) => i.value === $student_information.semester
					)?.label || "None Picked"
				}
			],
			tuition_fees: [
				{
					question: {
						mobile: 'Credit hours:',
						desktop: 'How many credit hours are you taking?'
					},
					value: $tuition_fees.credit_hours
				},
				{
					question: {
						mobile: 'Lab fees:',
						desktop: 'Do you have any lab fees?'
					},
					value: '$' + $tuition_fees.lab_fees + '/sem'
				},
				{
					question: {
						mobile: 'Additional fees:',
						desktop: 'Do you have any additional fees?'
					},
					value: '$' + $tuition_fees.other_fees + '/sem'
				},
				{
					question: {
						mobile: 'Campus fees:',
						desktop: 'Campus fees:'
					},
					value: '$' + $static_vars.flat_fees.value + '/sem'
				}
			],
			housing_food: [
				{
					question: {
						mobile: 'Living arrangement:',
						desktop: 'Where are you living during the semester?'
					},
					value:
						$dropdownOptions.housing_food.living.find((i) => i.value === $housing_food.living_plan)
							?.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Housing:',
						desktop: 'What housing are you staying in?'
					},
					value:
						searchObj(
							$dropdownOptions.housing_food.housing[$student_information.campus][$student_information.semester],
							$housing_food.on_campus.housing
						) || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Living learning community:',
						desktop: 'What Living Learning Community are you a part of?'
					},
					value:
						$dropdownOptions.housing_food.llc[$student_information.campus].find((i) => i.value === $housing_food.on_campus.llc)
							?.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Rent and utilities::',
						desktop: 'How much are you paying for rent and utilities?'
					},
					value: '$' + $housing_food.off_campus_parents.utility_fees + '/mo'
				},
				{
					question: {
						mobile: 'Rent:',
						desktop: 'How much are you paying for rent?'
					},
					value: '$' + $housing_food.off_campus_alone.rent + '/mo'
				},
				{
					question: {
						mobile: 'Electric:',
						desktop: 'How much are you paying for electric?'
					},
					value: '$' + $housing_food.off_campus_alone.electric + '/mo'
				},
				{
					question: {
						mobile: 'Water:',
						desktop: 'How much are you paying for water?'
					},
					value: '$' + $housing_food.off_campus_alone.water + '/mo'
				},
				{
					question: {
						mobile: 'Natural gas:',
						desktop: 'How much are you paying for natural gas?'
					},
					value: '$' + $housing_food.off_campus_alone.natural_gas + '/mo'
				},
				{
					question: {
						mobile: 'Internet:',
						desktop: 'How much are you paying for internet?'
					},
					value: '$' + $housing_food.off_campus_alone.internet + '/mo'
				},
				{
					question: {
						mobile: 'Cable:',
						desktop: 'How much are you paying for cable?'
					},
					value: '$' + $housing_food.off_campus_alone.cable + '/mo'
				},
				{
					question: {
						mobile: 'Phone:',
						desktop: 'How much are you paying for phone?'
					},
					value: '$' + $housing_food.off_campus_alone.phone + '/mo'
				},
				{
					question: {
						mobile: 'Food plan:',
						desktop: 'What food plan are you going to have?'
					},
					value:
						searchObj(
							$dropdownOptions.housing_food.food_plan[$student_information.campus][$student_information.semester],
							$housing_food.food_plan
						) || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				}
			],
			books_supplies: [
				{
					question: {
						mobile: 'Books:',
						desktop: 'How much are you planning to spend on books?'
					},
					value: '$' + $books_supplies.books + '/sem'
				},
				{
					question: {
						mobile: 'Course supplies:',
						desktop: 'How much are you planning to spend on course-specific supplies?'
					},
					value: '$' + $books_supplies.supplies + '/sem'
				}
			],
			transportation: [
				{
					question: {
						mobile: 'Bringing vehicle:',
						desktop: 'Are you bringing a vehicle to campus?'
					},
					value:
						$dropdownOptions.transportation.has_car.find((i) => i.value === $transportation.has_vehicle)
							.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Parking pass:',
						desktop: 'Which parking pass do you have?'
					},
					value:
						$dropdownOptions.transportation.parking_permits[$student_information.campus].find((i) => i.value === $transportation.parking_pass)
							?.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Car payment:',
						desktop: 'How much is your car payment?'
					},
					value: '$' + $transportation.car_payment + '/mo'
				},
				{
					question: {
						mobile: 'Car insurance:',
						desktop: 'How much are is you car insurance?'
					},
					value: '$' + $transportation.insurance + '/mo'
				},
				{
					question: {
						mobile: 'Gasoline:',
						desktop: 'How much do you spend on gas?'
					},
					value: '$' + $transportation.gas + '/mo'
				},
				{
					question: {
						mobile: 'Car maintenance:',
						desktop: 'How much are you spending on car maintenance?'
					},
					value: '$' + $transportation.maintenance + '/mo'
				},
				{
					question: {
						mobile: 'Other transportation:',
						desktop: 'What other transportation do you have?'
					},
					value: '$' + $transportation.other_transport + '/mo'
				}
			],
			personal: [
				{
					question: {
						mobile: 'Takeout & coffee:',
						desktop: 'What are you spending on takeout & coffee?'
					},
					value: '$' + $personal.takeout_coffee + '/mo'
				},
				{
					question: {
						mobile: 'Groceries:',
						desktop: 'What are you spending on groceries?'
					},
					value: '$' + $personal.groceries + '/mo'
				},
				{
					question: {
						mobile: 'Cell phone bill:',
						desktop: 'What are you spending on cell phone bill?'
					},
					value: '$' + $personal.phone_bill + '/mo'
				},
				{
					question: {
						mobile: 'Subscriptions & memberships:',
						desktop: 'What are you spending on subscriptions and memberships?'
					},
					value: '$' + $personal.subscriptions_memberships + '/mo'
				},
				{
					question: {
						mobile: 'Expenses:',
						desktop: 'Do you have any expenses?'
					},
					value: $personal.custom_expenses
				}
			],
			funding: [
				{
					question: {
						mobile: 'Has Florida prepaid:',
						desktop: 'Do you have a Florida prepaid plan?'
					},
					value: function () {
						try {
							return $dropdownOptions.funding.fl_prepaid.find((i) => i.value === $funding.has_fl_prepaid)
								.label;
						} catch (error) {
							return "None picked"
						}
					},
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'When purchased:',
						desktop: 'When did you purchase your Florida prepaid plan?'
					},
					value: function () {
						try {
							return $dropdownOptions.funding.prepaid_purchase.find(
								(i) => i.value === $funding.when_purchased
							).label;
						} catch (error) {
							return "None picked"
						}
					},
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Prepaid plan:',
						desktop: 'Which plan did you purchase?'
					},
					value: function () {
						try {
							return $dropdownOptions.funding[$funding.when_purchased].find(
								(i) => i.value === $funding.prepaid_plan
							).label;
						} catch (error) {
							return "None picked"
						}
					},
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Bright futures:',
						desktop: 'Do you qualify for the Bright Futures award?'
					},
					value: function () {
						try {
							return $dropdownOptions.funding.bright_futures.find((i) => i.value === $funding.bright_futures)
								.label;
						} catch (error) {
							return "None picked"
						}
					},
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Green and gold:',
						desktop: 'Do you qualify for the Green and Gold scholarship?'
					},
					value: function () {
						try {
							if ($funding.green_gold_award === 'nothing') return "None Picked";
							return searchObj($dropdownOptions.funding.gg_scholarship.gg_options, $funding.green_gold_award)
						} catch (error) {
							return "None picked"
						}
					},
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Grants:',
						desktop: 'Do you have any grants?'
					},
					value: '$' + $funding.grants + '/sem'
				},
				{
					question: {
						mobile: 'Loans:',
						desktop: 'Do you have any loans?'
					},
					value: '$' + $funding.loans + '/sem'
				},
				{
					question: {
						mobile: 'Scholarships:',
						desktop: 'Do you have any scholarships?'
					},
					value: $funding.scholarships
				},
				{
					question: {
						mobile: 'Jobs:',
						desktop: 'Do you have any jobs?'
					},
					value: $funding.jobs
				}
			]
		};
	}
);
