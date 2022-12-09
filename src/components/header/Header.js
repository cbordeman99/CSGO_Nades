import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav>
      <ul id="header">
        <li className="headerEle">
          <Link to="/"> Home</Link>
        </li>
        <li className="headerEle">
          <Link to="Maps">Maps</Link>
        </li>
        <li className="headerEle">
          <Link to="SubmitNade">Submit Nade</Link>
        </li>
        <li className="headerEle">
          <Link to="Test">Test</Link>
        </li>
      </ul>
    </nav>
  );
}
