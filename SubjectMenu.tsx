import React from "react";
import "./bootstrap.css";

interface ISubjectMenuProps {
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
interface ISubjectMenuState {}

class SubjectMenu extends React.Component<
  ISubjectMenuProps,
  ISubjectMenuState
> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group m-1">
        <label>Choose subject to study:</label>
        <select className="form-control" onChange={this.props.onSelect}>
          <option>Biology</option>
          <option>Mathematics</option>
        </select>
      </div>
    );
  }
}

export { SubjectMenu };
