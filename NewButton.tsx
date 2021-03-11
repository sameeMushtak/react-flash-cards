import React from "react";
import "./bootstrap.css";

interface NewButtonProps {}
interface NewButtonState {}

class NewButton extends React.Component<NewButtonProps, NewButtonState> {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary">New Card</button>
      </React.Fragment>
    );
  }
}

export { NewButton };
