import React from "react";

const Smurf = props => {
  console.log(props);
  return (
    <div className="user">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
