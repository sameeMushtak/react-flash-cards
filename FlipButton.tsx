import React from "react";
import "./bootstrap.css";

interface IFlipButtonProps {
  onFlip: () => void
}
interface IFlipButtonState {}

class FlipButton extends React.Component<IFlipButtonProps, IFlipButtonState> {
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.props.onFlip}>Flip Card</button>
      </React.Fragment>
    );
  }
}

export { FlipButton };
