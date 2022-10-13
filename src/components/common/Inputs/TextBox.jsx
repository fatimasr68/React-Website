import React from "react";
import "./TextBox.css";
import { Field, ErrorMessage, useFormikContext } from "formik";

const TextBox = ({ name, placeholder, label, type, className }) => {
const { errors, touched } = useFormikContext();

  return (
    <>
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={`textbox-input
                    ${className}
                    ${touched.name && errors.name ? "textbox-error" : ""}`
                  }
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </>
  );
};

export default TextBox;
