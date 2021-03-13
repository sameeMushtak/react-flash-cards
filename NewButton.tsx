import React from "react";
import "./bootstrap.css";

interface INewButtonProps {}
interface INewButtonState {}

class NewButton extends React.Component<INewButtonProps, INewButtonState> {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary">New Card</button>
      </React.Fragment>
    );
  }
}

export { NewButton };
