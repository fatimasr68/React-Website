import React from "react";
import "./CheckBox.css";
import { Field, useFormikContext } from "formik";

const CheckBox = ({ name, checked, label, className }) => {
  const { values, setFieldValue } = useFormikContext();
  // const [isChecked, setIsChecked] = useState(isCheckedd);

  return (
    <>
      <label className="d-flex">
        <Field
          type="checkbox"
          name={name}
          id={name}
          className={`checkbox-hidden ${className}`}
          checked={checked}
          // onChange={() => setIsChecked(!isChecked)}
          // OnChange={(e) => {setFieldValue(name,e.target.checked)}}
        />

        <svg
          className={`checkbox-input ${checked ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={checked ? "#fff" : "none"}
          />
        </svg>

        <label className="checkbox-label" htmlFor={name}>
          {label}
        </label>
      </label>
    </>
  );
};

export default CheckBox;
