import { useState } from 'react';
import { propertyValidate } from '../utils/propertyValidate';
import Joi from 'joi';
import { formValidate } from '../utils/formValidate';

interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

interface UseFormOptions<T extends FormValues> {
  initialValues: T;
  onSubmit: (values: T) => void;
  schema?: Joi.ObjectSchema<any>;
}

export const useForm = <T extends FormValues>(params: UseFormOptions<T>) => {
  const { initialValues, onSubmit, schema } = params;

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });

    if (schema) {
      const errorsTmp = { ...errors };
      const error = propertyValidate(name, value, schema.extract([name]));

      if (error) errorsTmp[name] = error;
      else delete errorsTmp[name];
      setErrors(errorsTmp);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    schema && formValidate(values, schema);

    setIsSubmitting(true);
    onSubmit(values);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
