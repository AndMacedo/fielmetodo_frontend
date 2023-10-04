/* eslint-disable no-unused-vars */
import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div className="notFound">
      <div className="leftError">
        <div className="errorCode">error code:</div>
        <div className="number">404</div>
      </div>
      <div className="rightError">
        <div className="oops">Oops!</div>
        <div className="pageNotFound">
          We can&apos;t seem to find the page you&apos;re looking for!
        </div>
        <Link to="/" className="takeMeBackButton">
          TAKE ME BACK
        </Link>
      </div>
    </div>
  );
};

export default notFound;
