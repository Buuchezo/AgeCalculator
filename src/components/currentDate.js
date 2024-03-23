import Image from "./image";
import RemainingYears from "./remainingYears";
import RemainingMonths from "./remaingMonths";
import RemainingDays from "./remainingDays";

export default function CurrentDate({
  onClick,
  finalDay,
  finalMonth,
  finalYear,
  isTrue,
  onSubmit,
  errors,
  touched,
  values,
  onChange,
}) {
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        {/* DAY */}
        <div className="input-container">
          <label className={errors.day ? "text-error" : ""}>DAY</label>
          <input
            id="day"
            type="number"
            placeholder="DD"
            value={values.day}
            onChange={onChange}
            className={errors.day && touched.day ? "error" : ""}
          ></input>
          {errors.day && <p className="text-error">{errors.day}</p>}
        </div>

        {/* MONTH */}
        <div className="input-container">
          <label className={errors.month ? "text-error" : ""}>MONTH</label>
          <input
            id="month"
            type="number"
            placeholder="MM"
            value={values.month}
            onChange={onChange}
            className={errors.month && touched.month ? "error" : ""}
          ></input>
          {errors.month && <p className="text-error">{errors.month}</p>}
        </div>
        {/* YEAR */}
        <div className="input-container">
          <label className={errors.year ? "text-error" : ""}>YEAR</label>
          <input
            id="year"
            type="number"
            placeholder="YYYY"
            value={values.year}
            onChange={onChange}
            className={errors.year && touched.year ? "error" : ""}
          ></input>
          {errors.year && <p className="text-error">{errors.year}</p>}
        </div>
      </form>

      <div className="result-convertion">
        <Image onClick={onClick} onSubmit={onSubmit} />
        <div className="converted">
          <RemainingYears finalYear={finalYear} isTrue={isTrue} />
          <RemainingMonths finalMonth={finalMonth} isTrue={isTrue} />
          <RemainingDays finalDay={finalDay} isTrue={isTrue} />
        </div>
      </div>
    </div>
  );
}
