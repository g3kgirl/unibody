import React from "react";
import "../App.css";
const Text = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <p>{props.text1}</p>
    </>
  );
};

export default Text;
