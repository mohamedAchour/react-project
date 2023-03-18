import Joi from "joi";
import React from "react";
import { useForm } from "../hooks/useForm";
import { getGenres } from "../services/fakeGenreService";
import { formValidate } from "../utils/formValidate";
import { FormInput } from "./common/form/formInput";
import { SubmittButton } from "./common/form/submittButton";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { MovieState } from "./movies";

export const MovieForm = (props: any) => {
  const { history, match } = props;

  const movieId = match.params.id;
  const movieInDb = getMovie(movieId);

  console.log(movieId);
  console.log(movieInDb);

  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("NumberInStock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  });

  const submit = (movie: MovieState) => {
    //submit logic
    console.log("Registration form submitted:", movie);
    saveMovie(movie);
    // You could make a request to your server here to authenticate the user
    setTimeout(() => {
      history.push("/movies");
    }, 1000);
    //go back to movies page
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleOption,
    handleSubmit,
  } = useForm<MovieState>({
    initialValues: {
      _id: movieInDb?._id || "",
      title: movieInDb?.title || "",
      genre: movieInDb?.genre || { _id: "", name: "" },
      numberInStock: movieInDb?.numberInStock || "",
      dailyRentalRate: movieInDb?.dailyRentalRate || "",
    },
    onSubmit: (values) => submit(values),
    schema: schema,
  });

  const formFields = [
    {
      name: "title",
      title: "title",
      type: "text",
    },
    {
      name: "genre",
      title: "genre",
      options: getGenres(),
      type: "text",
    },
    {
      name: "numberInStock",
      title: "number in stock",
      type: "text",
    },
    {
      name: "dailyRentalRate",
      title: "rate",
      type: "text",
    },
  ];

  const { title, numberInStock, dailyRentalRate } = values;
  return (
    <div>
      <h1>Movie</h1>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        {formFields.map(({ name, options, title, type }) => (
          <FormInput
            key={name}
            label={title}
            name={name}
            value={name === "genre" ? values["genre"]["name"] : values[name]}
            type={type}
            onChange={handleChange}
            onOption={handleOption}
            error={errors[name]}
            options={options}
          />
        ))}
        <SubmittButton
          disabled={
            !!formValidate({ title, numberInStock, dailyRentalRate }, schema)
          }
          isSubmitting={isSubmitting}
          label="Save"
        />
      </form>
    </div>
  );
};
