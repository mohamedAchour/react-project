import React from "react";
import { Link } from "react-router-dom";

interface FormInputType {
  [key: string]: any;
  name: string;
  label?: string;
  error?: string;
}

export const FormInput = (props: FormInputType) => {
  const { name, error, label, options, ...rest } = props;

  return (
    <div className="form-group mb-3 col-md-4">
      <div className="input-group mb-3 col-md-3">
        <label htmlFor={label} className="form-label">
          {label && label?.charAt(0).toUpperCase() + label?.slice(1)}
        </label>
        <input className="form-control" name={name} id={name} {...rest} />

        {options && (
          <>
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              {options.map((option: any) => (
                <li key={option}>
                  <Link className="dropdown-item" to="#">
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
