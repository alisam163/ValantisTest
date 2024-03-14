import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <Spinner animation="grow" />
    </div>
  );
};

export default LoadingSpinner;
