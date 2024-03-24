import * as yup from "yup";
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

export const basicSchema = yup.object().shape({
  day: yup
    .number()
    .positive()
    .integer()
    .test("day-validation", "Not a valid date", function (value) {
      const month = this.parent.month; // takes the year and the month from the object we created
      const year = this.parent.year;
      if (
        month === currentMonth &&
        year === currentYear &&
        value > currentDay
      ) {
        return false; // Return false if the validation fails
      } else {
        return true; // Return true if the validation passes
      }
    })
    .max(31, "Not a valid date")
    .required("Day is required"),
  month: yup
    .number()
    .positive()
    .integer()
    .required("Month is required")
    .test("month-validation", "Not a valid date", function (value) {
      const year = this.parent.year;
      if (year === currentYear && value > currentMonth) {
        return false;
      } else {
        return true;
      }
    })
    .max(12, "Not a valid date"),
  year: yup
    .number()
    .positive()
    .min(1913, "Oops! That is way to early")
    .max(currentYear, "Oops! date can´t be in the future")
    .integer()
    .required("Year is required"),
});
