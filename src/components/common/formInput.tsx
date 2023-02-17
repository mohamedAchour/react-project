import React from 'react';

type FormInputType = {
  name: string;
  value?: string | '';
  placeholder?: string | '';
  type?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement | undefined>;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = (
  props: FormInputType &
    Omit<React.HTMLProps<HTMLInputElement>, keyof FormInputType>
) => {
  const { name, value, placeholder, type, inputRef, error, onChange, ...rest } =
    props;
  return (
    <div className="form-group mb-3 col-md-4">
      <label htmlFor={name} className="form-label">
        {name && name?.charAt(0).toUpperCase() + name?.slice(1)}
      </label>
      <input
        className="form-control"
        name={name}
        value={value}
        placeholder={placeholder}
        id={name}
        type={type}
        onChange={onChange}
        {...rest}
        ref={inputRef as React.RefObject<HTMLInputElement>}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
