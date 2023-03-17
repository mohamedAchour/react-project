import Joi from "joi";
import React from "react";
import { useForm } from "../hooks/useForm";
<<<<<<< HEAD:src/components/registerForm.tsx
import { formValidate } from "../utils/formValidate";
=======
>>>>>>> dee9d08... code refactring:src/components/regisetrForm.tsx
import { FormInput } from "./common/form/formInput";
import { SubmittButton } from "./common/form/submittButton";

interface RegisterState {
  [key: string]: string;
  username: string;
  password: string;
  name: string;
}

export const RegistrForm = () => {
  const schema = Joi.object({
    username: Joi.string()
      .email({
        minDomainSegments: 2, // Make sure there is at least one dot in the domain
        tlds: { allow: ["com", "net", "org", "edu", "gov"] }, // Specify the list of allowed top-level domains
      })
      .required()
      .label("Username"),
    password: Joi.string().min(5).max(30).required().label("Password"),
    name: Joi.string().required().label("Name"),
  });

  const submit = (account: RegisterState) => {
    //submit logic
    console.log("Registration form submitted:", values);
    // You could make a request to your server here to authenticate the user
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm<RegisterState>({
      initialValues: {
        username: "", // do not set this to null, otherwise you'll get an uncontrolled element
        password: "",
        name: "",
      },
      onSubmit: (values) => submit(values),
      schema: schema,
    });

  const formFields = [
    {
      name: "username",
      type: "email",
      placeholder: "addess@email.com",
    },
    {
      name: "password",
      type: "password",
    },
    {
      name: "name",
      type: "text",
    },
  ];
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        {formFields.map(({ name, type, placeholder }) => (
          <FormInput
            key={name}
            name={name}
            value={values[name]}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            error={errors[name]}
          />
        ))}
        <SubmittButton isSubmitting={isSubmitting} label="Register" />
      </form>
    </div>
  );
};
