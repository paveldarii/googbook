import React from "react";
import { Jumbotron } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron
      style={{
        backgroundImage:
          "url('https://content.fortune.com/wp-content/uploads/2016/06/171152625.jpg')",
        color: "#07575B",
      }}
    >
      <h1
        style={{
          background: "#C4DFE6",
          display: "inline",
          padding: "0px 10px 0px 10px",
          border: "3px dashed #07575B",
          borderRadius: "10px",
        }}
      >
        {props.title}
      </h1>
    </Jumbotron>
  );
}

export default Hero;
