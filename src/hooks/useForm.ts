import { useState } from 'react';
import { propertyValidate } from '../utils/propertyValidate';

interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

interface UseFormOptions<T extends FormValues> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate?: (values: T) => FormErrors | null;
}

export const useForm = <T extends FormValues>(params: UseFormOptions<T>) => {
  const { initialValues, onSubmit, validate } = params;

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setValues({ ...values, [name]: value });

    const errorsTmp = { ...errors };
    const error = propertyValidate(name, value);

    if (error) errorsTmp[name] = error;
    else delete errorsTmp[name];
    setErrors(errorsTmp);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate) {
      const formErrors = validate(values);
      setErrors(formErrors || {});

      if (Object.keys(formErrors || {}).length > 0) {
        return;
      }
    }

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
