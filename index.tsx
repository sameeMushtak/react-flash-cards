import React, { Component } from "react";
import { render } from "react-dom";
import { Flashcard } from "./Flashcard";
import { FlipButton } from "./FlipButton";
import { NextButton } from "./NextButton";
import { NewButton } from "./NewButton";
import "./style.css";

interface IFlashcard {
  subject: string;
  frontSide: string;
  backSide: string;
}

interface IAppProps {}
interface IAppState {
  onFrontSide: boolean;
  cards: IFlashcard[];
  currentIndex: number;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      onFrontSide: true,
      cards: [
        {
          subject: "Biology",
          frontSide: "What is the powerhouse of the cell?",
          backSide: "Mitochondria"
        },
        {
          subject: "Biology",
          frontSide: "What does DNA stand for?",
          backSide: "Deoxyribonucleic acid"
        }
      ],
      currentIndex: 0
    };
  }

  handleFlip = () => {
    this.setState({ onFrontSide: !this.state.onFrontSide });
  };

  handleNext = () => {
    this.setState({
      currentIndex:
        this.state.currentIndex == this.state.cards.length - 1
          ? 0
          : this.state.currentIndex + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Study with Flashcards</h1>
        <Flashcard
          currentCard={this.state.cards[this.state.currentIndex]}
          onFrontSide={this.state.onFrontSide}
        />
        <FlipButton onFlip={this.handleFlip} />
        <NextButton onNext={this.handleNext} />
        <NewButton />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
