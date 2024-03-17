import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Link to={"/collections/omb"}>
        <h1>OMB</h1>
      </Link>
      <Link to={"/collections/quantum_cats"}>
        <h2>QUANTUM CATS</h2>
      </Link>
    </>
  );
};

export default Landing;
