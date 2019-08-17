import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

import { getSmurfData } from "../actions";

const SmurfList = props => {
  console.log(props);
  console.log(props.smurfs);
  return (
    <div className="smurf-list">
      <button className="show-button" onClick={props.getSmurfData}>
        Show Smurf Village
      </button>
      {props.smurfs.map(indiv => (
        <Smurf
          key={indiv.id}
          smurfName={indiv.name}
          age={indiv.age}
          height={indiv.height}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getSmurfData }
)(SmurfList);
