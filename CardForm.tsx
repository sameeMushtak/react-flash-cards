import React from "react";
import "./bootstrap.css";

interface ICardFormProps {
  onSubjectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFrontSideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBackSideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  onToggleForm: () => void;
}
interface ICardFormState {
  formOpen: boolean;
}

class CardForm extends React.Component<ICardFormProps, ICardFormState> {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false
    };
  }

  toggleForm = () => {
    this.setState({ formOpen: !this.state.formOpen });
  };
  // Can I add validation to this form?
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="m-1">Subject</label>
          <input
            type="text"
            className="form-control m-1"
            onChange={this.props.onSubjectChange}
          />
        </div>
        <div className="form-group">
          <label className="m-1">Front Side</label>
          <input
            type="text"
            className="form-control m-1"
            onChange={this.props.onFrontSideChange}
          />
        </div>
        <div className="form-group">
          <label className="m-1">Back Side</label>
          <input
            type="text"
            className="form-control m-1"
            onChange={this.props.onBackSideChange}
          />
        </div>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            this.props.onAdd();
            this.props.onToggleForm();
          }}
        >
          Add Card
        </button>
      </div>
    );
  }
}

export { CardForm };
