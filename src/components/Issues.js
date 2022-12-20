import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Issues = (props) => {
  return (
    <div className="d-flex justify-content-center">
      Issues were detected, we hit a snag.
      <Button onClick={props.reset} variant="primary">
        Refresh
      </Button>
    </div>
  );
};

export default Issues;
