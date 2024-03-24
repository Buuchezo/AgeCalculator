import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import { basicSchema } from "./schemas/indexscema";
import CurrentDate from "./components/currentDate";

export default function App() {
  // ---------------------------------STATES-----------------------------------------

  const [finalDay, setFinalDay] = useState("");
  const [finalMonth, setFinalMonth] = useState("");
  const [finalYear, setFinalYear] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  // ------------------FORM VALIDATION----------------------------------------------------

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, isValid } =
    useFormik({
      initialValues: {
        day: "",
        month: "",
        year: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  // ------------------------------MY VARIABLE---------------------------------------

  const birth_date = new Date(
    `${values.month}/${values.day}/${values.year} 00:00:00`
  );
  const milliseconds = birth_date.getTime();
  const current_date = new Date();
  const getMilli = current_date.getTime();
  const result = getMilli - milliseconds;

  // -----------------------Main calculation---------------------------------------

  const years = Math.floor(result / 31563000000);
  const months = Math.floor((result % 31563000000) / 2592000000);
  const days = Math.floor(((result % 31563000000) % 2592000000) / 86400000);

  function handleConvert() {
    handleSubmit();
    if (!values.day || !values.month || !values.year || !isValid) {
      return;
    }

    setIsTrue(false);
    setFinalDay(days);
    setFinalMonth(months);
    setFinalYear(years);
  }

  return (
    <div className="container">
      <div className="app">
        <CurrentDate
          onClick={handleConvert}
          finalDay={finalDay}
          finalMonth={finalMonth}
          finalYear={finalYear}
          isTrue={isTrue}
          onSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          values={values}
        />
      </div>
    </div>
  );
}
