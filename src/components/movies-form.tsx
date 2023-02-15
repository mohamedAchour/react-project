import React from "react";

export const MoviesForm = (props: any) => {
  const { match, history } = props;

  const handleSave = () => {
    history.push("/movies");
  };
  return (
    <div>
      <h1>Movies Form {match.params.id}</h1>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
