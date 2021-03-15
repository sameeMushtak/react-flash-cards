import React from "react";
import "./bootstrap.css";
import { CardForm } from "./CardForm";

interface INewButtonProps {
  onSubjectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFrontSideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBackSideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}
interface INewButtonState {
  formOpen: boolean;
}

class NewButton extends React.Component<INewButtonProps, INewButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false
    };
  }

  toggleForm = () => {
    this.setState({ formOpen: !this.state.formOpen });
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary m-1" onClick={this.toggleForm}>
          New Card
        </button>
        {this.state.formOpen ? (
          <CardForm
            onSubjectChange={this.props.onSubjectChange}
            onFrontSideChange={this.props.onFrontSideChange}
            onBackSideChange={this.props.onBackSideChange}
            onAdd={this.props.onAdd}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export { NewButton };
