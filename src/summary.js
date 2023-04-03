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
import { dropdownOptions } from './constants';

function searchObj(obj, value) {
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

export const review_data = derived(
	[
		dropdownOptions,
		student_information,
		tuition_fees,
		housing_food,
		books_supplies,
		transportation,
		personal,
		funding
	],
	([
		$dropdownOptions,
		$student_information,
		$tuition_fees,
		$housing_food,
		$books_supplies,
		$transportation,
		$personal,
		$funding
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
					).label
				},
				{
					question: {
						mobile: 'Level:',
						desktop: 'What kind of student are you?'
					},
					value: $dropdownOptions.student_information.level.find(
						(i) => i.value === $student_information.level
					).label
				},
				{
					question: {
						mobile: 'Tuition:',
						desktop: 'What tuition do you need?'
					},
					value: $dropdownOptions.student_information.tuition.find(
						(i) => i.value === $student_information.tuition
					).label
				},
				{
					question: {
						mobile: 'Semester:',
						desktop: 'What semester are you going into?'
					},
					value: $dropdownOptions.student_information.semester.find(
						(i) => i.value === $student_information.semester
					).label
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
						mobile: 'Additional fees',
						desktop: 'Do you have any additional fees?'
					},
					value: '$' + $tuition_fees.other_fees + '/sem'
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
							$dropdownOptions.housing_food.housing[$student_information.campus],
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
						$dropdownOptions.housing_food.llc.find((i) => i.value === $housing_food.on_campus.llc)
							?.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Food plan:',
						desktop: 'What food plan are you going to have?'
					},
					value:
						searchObj(
							$dropdownOptions.housing_food.food_plan[$student_information.campus],
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
						$dropdownOptions.transportation.find((i) => i.value === $transportation.has_vehicle)
							.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Parking pass:',
						desktop: 'How much is your parking pass?'
					},
					value: '$' + $transportation.parking_pass + '/sem'
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
						mobile: 'Health care:',
						desktop: 'What are you spending on health care?'
					},
					value: '$' + $personal.health_care + '/mo'
				},
				{
					question: {
						mobile: 'Personal care:',
						desktop: 'What are you spending on personal care?'
					},
					value: '$' + $personal.personal_care + '/mo'
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
						mobile: 'Entertainment & social life:',
						desktop: 'What are you spending on entertainment and social life?'
					},
					value: '$' + $personal.entertainment_social + '/mo'
				},
				{
					question: {
						mobile: 'Travel & trips:',
						desktop: 'What are you travel and trips?'
					},
					value: '$' + $personal.travel_trips + '/mo'
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
						mobile: 'Clothing & accessories:',
						desktop: 'What are you spending on clothing and accessories?'
					},
					value: '$' + $personal.clothing + '/mo'
				},
				{
					question: {
						mobile: 'Family expenses:',
						desktop: 'What are you spending on family expenses?'
					},
					value: '$' + $personal.family_expenses + '/mo'
				},
				{
					question: {
						mobile: 'Organization dues:',
						desktop: 'What are you spending on organization dues?'
					},
					value: '$' + $personal.org_dues + '/mo'
				},
				{
					question: {
						mobile: 'Hobbies:',
						desktop: 'What are you spending on hobbies?'
					},
					value: '$' + $personal.hobbies + '/mo'
				},
				{
					question: {
						mobile: 'Pets:',
						desktop: 'What are you spending on pets?'
					},
					value: '$' + $personal.pets + '/mo'
				},
				{
					question: {
						mobile: 'Holidays & gifts:',
						desktop: 'What are you spending on holidays and gifts?'
					},
					value: '$' + $personal.holidays_gifts + '/mo'
				},
				{
					question: {
						mobile: 'Laundry:',
						desktop: 'What are you spending on laundry?'
					},
					value: '$' + $personal.laundry + '/mo'
				}
			],
			funding: [
				{
					question: {
						mobile: 'Has Florida prepaid:',
						desktop: 'Do you have a Florida prepaid plan?'
					},
					value:
						$dropdownOptions.funding.fl_prepaid.find((i) => i.value === $funding.has_fl_prepaid)
							.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'When purchased:',
						desktop: 'When did you purchase your Florida prepaid plan?'
					},
					value:
						$dropdownOptions.funding.prepaid_purchase.find(
							(i) => i.value === $funding.when_purchased
						).label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Prepaid plan:',
						desktop: 'Which plan did you purchase?'
					},
					value:
						$dropdownOptions.funding[$funding.when_purchased].find(
							(i) => i.value === $funding.prepaid_plan
						).label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				},
				{
					question: {
						mobile: 'Bright futures:',
						desktop: 'Do you qualify for the Bright Futures award?'
					},
					value:
						$dropdownOptions.funding.bright_futures.find((i) => i.value === $funding.bright_futures)
							.label || 'None picked',
					style: function () {
						return this.value === 'None picked' ? 'text-red-700' : '';
					}
				}
			]
		};
	}
);
