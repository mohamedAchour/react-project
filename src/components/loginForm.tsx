import React, { useRef } from 'react';
import Joi from 'joi';

import { FormInput } from './common/formInput';
import { formValidate } from '../utils/formValidate';
import { useForm } from '../hooks/useForm';

interface AccountState {
  [key: string]: string;
  username: string;
  password: string;
}
export const LoginForm = () => {
  const password = useRef<HTMLInputElement>();
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  });

  const submit = (account: AccountState) => {
    //submit logic
    console.log('Login form submitted:', values);
    // You could make a request to your server here to authenticate the user
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm<AccountState>({
      initialValues: {
        username: '', // do not set this to null, otherwise you'll get an uncontrolled element
        password: '',
      },
      onSubmit: (values) => submit(values),
      validate: (values) => formValidate(values, schema),
    });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <FormInput
          name="username"
          value={values.username}
          type="email"
          placeholder="addess@email.com"
          onChange={handleChange}
          error={errors?.username}
        />

        <FormInput
          name="password"
          value={values.password}
          type="password"
          onChange={handleChange}
          inputRef={password}
          error={errors?.password}
        />
        <button
          type="submit"
          disabled={!!formValidate(values, schema)}
          className={`btn btn-primary`}
        >
          <span
            className={
              isSubmitting ? 'spinner-border spinner-border-sm me-2' : 'd-none'
            }
            role="status"
            aria-hidden="true"
          ></span>
          {isSubmitting ? 'Loging...' : 'Login'}
        </button>
      </form>
    </div>
  );
};
