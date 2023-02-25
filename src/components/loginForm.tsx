import React, { useRef, useState } from 'react';
import { AccountErrors, AccountState } from '../types/types';
import { FormInput } from './common/formInput';
import { formValidate } from '../utils/formValidate';
import { propertyValidate } from '../utils/propertyValidate';

export const LoginForm = () => {
  const [account, setAccount] = useState<AccountState>({
    username: '', // do not set this to null, otherwise you'll get an uncontrolled elment
    password: '',
  });

  const [errors, setErrors] = useState<AccountErrors>();

  const password = useRef<HTMLInputElement>();
  //SyntheticEvent: is the base event for all other events. Should be used when unsure about event type
  const handleSubmit = (e: React.SyntheticEvent) => {
    //This prevents the default behavior of the event, sending requests to the server --> full reload !!
    e.preventDefault();

    const errorsTmp = formValidate(account);
    setErrors(errorsTmp || {});

    if (errorsTmp) return;

    // Call the server, save the changes, redirect user to different page
    console.log('Form submitted');
  };

  const handleChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const errorsTmp = { ...errors };

    const error = propertyValidate(name, value);

    if (error) errorsTmp[name] = error;
    else delete errorsTmp[name];
    setErrors(errorsTmp);
    const accountTmp: AccountState = { ...account };
    const currentField = name;
    accountTmp[currentField] = value;
    setAccount(accountTmp);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <FormInput
          name="username"
          value={account.username}
          placeholder="addess@email.com"
          type="email"
          onChange={handleChange}
          error={errors?.username}
          required
        />

        <FormInput
          name="password"
          value={account.password}
          type="password"
          onChange={handleChange}
          inputRef={password}
          error={errors?.password}
          required
        />
        <button
          type="submit"
          disabled={!!formValidate(account)}
          className={`btn btn-primary`}
        >
          Login
        </button>
      </form>
    </div>
  );
};
