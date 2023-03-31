import { derived } from "svelte/store";
import { student_information, tuition_fees, housing_food } from "./store";
import { dropdownOptions } from "./constants";

function searchObj(obj, value) {
  let keys = Object.keys(obj);
  let label = '';

  keys.forEach((key, i) => {
    obj[key].forEach((item, k) => {
      if (item.value === value) {
        label = item.label
      }
    });
  });

  return label;
}

export const review_data = derived([
  dropdownOptions,
  student_information,
  tuition_fees,
  housing_food
],
  ([
    $dropdownOptions,
    $student_information,
    $tuition_fees,
    $housing_food
  ]) => {
    return ({
      student_information: [
        {
          question: {
            mobile: "Campus:",
            desktop: "What campus are you going to?"
          },
          value: $dropdownOptions.student_information.campus
            .find(i => i.value === $student_information.campus).label
        },
        {
          question: {
            mobile: "Level:",
            desktop: "What kind of student are you?"
          },
          value: $dropdownOptions.student_information.level
            .find(i => i.value === $student_information.level).label
        },
        {
          question: {
            mobile: "Tuition:",
            desktop: "What tuition do you need?"
          },
          value: $dropdownOptions.student_information.tuition
            .find(i => i.value === $student_information.tuition).label
        },
        {
          question: {
            mobile: "Semester:",
            desktop: "What semester are you going into?"
          },
          value: $dropdownOptions.student_information.semester
            .find(i => i.value === $student_information.semester).label
        }
      ],
      tuition_fees: [
        {
          question: {
            mobile: "Credit hours:",
            desktop: "How many credit hours are you taking?"
          },
          value: $tuition_fees.credit_hours
        },
        {
          question: {
            mobile: "Lab fees:",
            desktop: "Do you have any lab fees?"
          },
          value: "$" + $tuition_fees.lab_fees + "/sem"
        },
        {
          question: {
            mobile: "Additional fees",
            desktop: "Do you have any additional fees?"
          },
          value: "$" + $tuition_fees.other_fees + "/sem"
        }
      ],
      housing_food: [
        {
          question: {
            mobile: "Living arrangement:",
            desktop: "Where are you living during the semester?"
          },
          value: $dropdownOptions.housing_food.living
            .find(i => i.value === $housing_food.living_plan)?.label || "None picked",
          style: function () { return this.value === "None picked" ? "text-red-700" : "" }
        },
        {
          question: {
            mobile: "Housing:",
            desktop: "What housing are you staying in?"
          },
          value: searchObj($dropdownOptions.housing_food.housing[$student_information.campus], $housing_food.on_campus.housing) || "None picked",
          style: function () { return this.value === "None picked" ? "text-red-700" : "" }
        },
        {
          question: {
            mobile: "Living learning community:",
            desktop: "What Living Learning Community are you a part of?"
          },
          value: $dropdownOptions.housing_food.llc
            .find(i => i.value === $housing_food.on_campus.llc)?.label || "None picked",
          style: function () { return this.value === "None picked" ? "text-red-700" : "" }
        },
        {
          question: {
            mobile: "Food plan:",
            desktop: "What food plan are you going to have?"
          },
          value: searchObj($dropdownOptions.housing_food.food_plan[$student_information.campus], $housing_food.food_plan) || "None picked",
          style: function () { return this.value === "None picked" ? "text-red-700" : "" }
        }
      ],
      books_supplies: [
        { question: "", value: "" }
      ],
      transportation: [
        { question: "", value: "" }
      ],
      personal: [
        { question: "", value: "" }
      ],
      funding: [
        { question: "", value: "" }
      ],
    })
  });