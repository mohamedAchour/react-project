import React from 'react';

type FormInputType = {
  name: string;
  error?: string;
};

export const FormInput = (
  props: FormInputType &
    Omit<React.HTMLProps<HTMLInputElement>, keyof FormInputType>
) => {
  const { name, error, ...rest } = props;
  return (
    <div className="form-group mb-3 col-md-4">
      <label htmlFor={name} className="form-label">
        {name && name?.charAt(0).toUpperCase() + name?.slice(1)}
      </label>
      <input className="form-control" name={name} id={name} {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
