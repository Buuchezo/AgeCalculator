import * as yup from "yup";

export const basicSchema = yup.object().shape({
  day: yup
    .number()
    .positive()
    .integer()
    .max(31, "Not a valid date")
    .required("Day is required"),
  month: yup
    .number()
    .positive()
    .integer()
    .max(12, "Not a valid date")
    .required("Month is required"),
  year: yup
    .number()
    .positive()
    .min(1913, "Oops! That is ways to early")
    .max(2400, "Oops! out of scope")
    .integer()
    .required("Year is required"),
});
