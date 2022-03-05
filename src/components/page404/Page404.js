import React from "react";
import { Link } from "react-router-dom";

import NotFound from "../../assets/images/not_found.svg";

const Page404 = () => {
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img style={{maxWidth: 554}} src={NotFound} className="w-100-p" alt="Page Not Found" />
      <p>
        This is not the page that you are looking for!
      </p>
      <Link type="button" className="btn btn-outline-secondary" to="/">Go Home</Link>
      </div>
    </>
  );
};

export default Page404;
