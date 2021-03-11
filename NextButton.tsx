import React from "react";
import "./bootstrap.css";

interface NextButtonProps {}
interface NextButtonState {}

class NextButton extends React.Component<NextButtonProps, NextButtonState> {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary">Next Card</button>
      </React.Fragment>
    );
  }
}

export { NextButton };
