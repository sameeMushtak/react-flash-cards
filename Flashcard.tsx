import React from "react";
import "./bootstrap.css";

interface IFlashcard {
  subject: string;
  frontSide: string;
  backSide: string;
}

export interface IFlashcardProps {
  currentCard: IFlashcard;
  onFrontSide: boolean;
}
interface IFlashcardState {}

class Flashcard extends React.Component<IFlashcardProps, IFlashcardState> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card m-1">
        <div className="card-body">
          <h4 className="card-title">{this.props.currentCard.subject}</h4>
          <p className="card-text">
            {this.props.onFrontSide
              ? this.props.currentCard.frontSide
              : this.props.currentCard.backSide}
          </p>
        </div>
      </div>
    );
  }
}

export { Flashcard };
