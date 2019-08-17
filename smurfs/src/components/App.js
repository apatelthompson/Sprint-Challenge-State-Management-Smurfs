import React from "react";
import "./App.css";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
  return (
    <div className="App">
      <h1>Here are the Smurfs of your Smurf Village:</h1>
      <SmurfList />
      <h2>Add another Smurf to the Village:</h2>
      <SmurfForm />
    </div>
  );
};

export default App;
