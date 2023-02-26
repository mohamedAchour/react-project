import Joi from 'joi';

export const propertyValidate = (
  name: string,
  value: string,
  propertySchemaLike: Joi.SchemaLike
) => {
  const property = { [name]: value };
  const schema = Joi.object({
    [name]: propertySchemaLike,
  });

  // in this case, we indeed need aborting early
  const { error } = schema.validate(property);

  return error ? error.details[0].message : null;
};
