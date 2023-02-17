import { AccountErrors, AccountState } from '../types/types';
import Joi from 'joi';

export const formValidate = (account: AccountState) => {
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  });

  const options = { abortEarly: false };
  const { error } = schema.validate(account, options);

  if (!error) return null;

  const errors: AccountErrors = {};
  error.details.forEach((err) => {
    errors[err.path[0]] = err.message;
  });

  return errors;
};
