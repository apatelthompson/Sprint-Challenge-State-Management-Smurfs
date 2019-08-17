import React from "react";

const Smurf = props => {
  console.log(props.smurf);
  return (
    <div className="user">
      <h2>{props.smurfName}</h2>
      <p>{props.age}</p>
      <p>{props.height}</p>
    </div>
  );
};

export default Smurf;
