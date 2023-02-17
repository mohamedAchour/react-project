import Joi from 'joi';

export const propertyValidate = (name: string, value: string) => {
  const property = { [name]: value };
  const schema = Joi.object({
    [name]: Joi.string()
      .required()
      .label(name.charAt(0).toUpperCase() + name.slice(1)),
  });

  // in this case, we indeed need aborting early
  const { error } = schema.validate(property);

  return error ? error.details[0].message : null;
};
