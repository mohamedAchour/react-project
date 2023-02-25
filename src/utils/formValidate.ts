import Joi from 'joi';

type FormData = {
  [key: string]: string;
};

type FormErrors = {
  [key: string]: string;
};

export const formValidate = (data: FormData, schema: Joi.ObjectSchema<any>) => {
  const options = { abortEarly: false };
  const { error } = schema.validate(data, options);

  //return imediatly if there are any errors, don't make nay api call...
  if (!error) return null;

  const errors: FormErrors = {};
  error.details.forEach((err) => {
    errors[err.path[0]] = err.message;
  });

  return errors;
};
