import React from "react";
import { NavLink } from "react-router-dom";
import '../stylingcomp/main.css'
export default function Main() {
  return (
    <div className="Apps">
      <div className="appheader">
        <h1 className="appinsta">Instaclone</h1>
        <NavLink to={"/signin"}>
          <h4 className="appsignin">Signin</h4>
        </NavLink>
      </div>
    </div>
  );
}
