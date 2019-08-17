import React from "react";

const SmurfForm = () => {
  return (
    <form className="smurf-form">
      <input type="text" name="name" placeholder="Name" />

      <input type="text" name="age" placeholder="Age" />

      <input type="text" name="height" placeholder="Height" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SmurfForm;
