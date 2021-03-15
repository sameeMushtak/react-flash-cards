import React from "react";
import "./bootstrap.css";
import { CardForm } from "./CardForm";

interface INewButtonProps {
  onSubjectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFrontSideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBackSideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  formOpen: boolean;
  onToggleForm: () => void;
}
interface INewButtonState {}

class NewButton extends React.Component<INewButtonProps, INewButtonState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary m-1"
          onClick={this.props.onToggleForm}
        >
          New Card
        </button>
        {this.props.formOpen ? (
          <CardForm
            onSubjectChange={this.props.onSubjectChange}
            onFrontSideChange={this.props.onFrontSideChange}
            onBackSideChange={this.props.onBackSideChange}
            onAdd={this.props.onAdd}
            onToggleForm={this.props.onToggleForm}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export { NewButton };
