import React from "react";
import { Link } from "react-router-dom";

const Visitors = () => {
  return (
    <div>
      <Link to="/register">Student</Link>
      <Link to="/register">Staff</Link>
    </div>
  );
};

export default Visitors;
