import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ display: "flex", gap: "15px", position: "absolute", top: 0 }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default Navigation;
