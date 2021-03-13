import React from "react";
import "./bootstrap.css";

interface INextButtonProps {
  onNext: () => void;
}
interface INextButtonState {}

class NextButton extends React.Component<INextButtonProps, INextButtonState> {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary m-1" onClick={this.props.onNext}>
          Next Card
        </button>
      </React.Fragment>
    );
  }
}

export { NextButton };
