import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Link to={"/collections/omb"}>
          <h2>OMB</h2>
        </Link>
        <Link to={"/collections/quantum_cats"}>
          <h2>QUANTUM CATS</h2>
        </Link>
      </div>
    </>
  );
};

export default Landing;
