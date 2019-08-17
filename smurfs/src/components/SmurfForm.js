import React from "react";
import { connect } from "react-redux";
import { postSmurfData } from "../actions/smurfActions";

const SmurfForm = props => {
  return (
    <form className="smurf-form">
      <input type="text" name="name" placeholder="Name" />

      <input type="text" name="age" placeholder="Age" />

      <input type="text" name="height" placeholder="Height" />

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
