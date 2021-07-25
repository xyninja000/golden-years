import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Navbar = () => {
  let { url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to={`${url}/myprofile`}> My Profile </Link>{" "}
        </li>
        <li>
          <Link to={`${url}/tests`}>Tests</Link>
        </li>
        <li>
          <Link to={`${url}/myperformance`}>My Performance</Link>
        </li>
        <li>
          <Link to={`${url}/FAQs`}>FAQs</Link>
        </li>
        <li>
          <Link to={`${url}/logout`}>Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
