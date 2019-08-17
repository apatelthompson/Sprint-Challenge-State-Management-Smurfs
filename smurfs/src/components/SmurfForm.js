import React from "react";
import { connect } from "react-redux";
import { postSmurfData } from "../actions";

const SmurfForm = props => {
  console.log("props from SmurfForm", props);
  return (
    <form className="smurf-form">
      <input
        type="text"
        name="name"
        value={props.smurfName}
        placeholder="Name"
      />

      <input type="number" name="age" value={props.age} placeholder="Age" />

      <input
        type="text"
        name="height"
        value={props.height}
        placeholder="Height in cm"
      />

      <button onClick={props.postSmurfData}>Submit</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    name: state.smurfName,
    age: state.age,
    height: state.height
  };
};
export default connect(
  mapStateToProps,
  { postSmurfData }
)(SmurfForm);
