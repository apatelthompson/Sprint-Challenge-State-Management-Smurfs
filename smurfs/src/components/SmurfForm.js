import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfData } from "../actions";

const SmurfForm = props => {
  console.log("props from SmurfForm", props);

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const handleChange = event => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.postSmurfData(smurf);
  };

  return (
    <form className="smurf-form">
      <input
        type="text"
        name="name"
        value={smurf.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        type="number"
        name="age"
        value={smurf.age}
        placeholder="Age"
        onChange={handleChange}
      />

      <input
        type="text"
        name="height"
        value={smurf.height}
        onChange={handleChange}
        placeholder="Height in cm"
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default connect(
  null,
  { postSmurfData }
)(SmurfForm);
