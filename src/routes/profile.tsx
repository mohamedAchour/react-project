import React from "react";

export const Profile = (props: any) => {
  const handleSave = () => {
    props.history.push("/profiles");
    //this one is used for ex in login page, if the user is logged in, if he clicks on go back button,
    //he will not be go back to login page
    //props.history.replace("/profiles");
  };
  return (
    <div>
      <h1>Profile {props.match.params.id}</h1>
      <button className="btn btn-danger" onClick={handleSave}>
        Delete
      </button>
    </div>
  );
};
