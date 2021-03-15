import React from "react";
import "./bootstrap.css";

interface ISubjectMenuProps {
  subjects: string[];
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
interface ISubjectMenuState {}

class SubjectMenu extends React.Component<
  ISubjectMenuProps,
  ISubjectMenuState
> {
  render() {
    return (
      <div className="form-group m-1">
        <label>Choose subject to study:</label>
        <select className="form-control" onChange={this.props.onSelect}>
          {this.props.subjects.map((s, i) => (
            <option key={s + i}>{s}</option>
          ))}
        </select>
      </div>
    );
  }
}

export { SubjectMenu };
