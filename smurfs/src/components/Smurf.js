import React from "react";

const Smurf = props => {
  console.log(props);
  return (
    <div className="user">
      <h3>{props.smurfName}</h3>
      <p>Age: {props.age} years</p>
      <p>Height: {props.height}</p>
    </div>
  );
};

export default Smurf;
