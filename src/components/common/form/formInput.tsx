import React from "react";
import { Link } from "react-router-dom";
import { GenreState } from "../../movies";

interface FormInputType {
  [key: string]: any; //
  name: string;
  label?: string;
  error?: string;
}

export const FormInput = (props: FormInputType) => {
  const { name, error, label, options, onOption, onChange, ...rest } = props;

  return (
    <div className="form-group mb-3 col-md-4">
      <label htmlFor={label} className="form-label">
        {label && label?.charAt(0).toUpperCase() + label?.slice(1)}
      </label>
      <div className="input-group">
        {options ? (
          <>
            <input
              className="form-control"
              name={name}
              id={name}
              readOnly
              {...rest}
            />

            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              {options.map((option: GenreState) => (
                <li key={option._id}>
                  <Link
                    onClick={() => {
                      onOption(name, option._id, option.name);
                    }}
                    className="dropdown-item"
                    to="#"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <input
            className="form-control"
            name={name}
            id={name}
            onChange={onChange}
            {...rest}
          />
        )}
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
