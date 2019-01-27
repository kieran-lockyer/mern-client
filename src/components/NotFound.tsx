import React from "react";
import * as Errors from "../styles/AppStyles";

const Error = () => {
  return (
    <Errors.Container>
      <h1>Error 404</h1>
      <p>The page you are looking for could not be found.</p>
    </Errors.Container>
  );
};

export default Error;
