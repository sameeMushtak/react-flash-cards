import React, { Component } from "react";
import { render } from "react-dom";
import { Flashcard } from "./Flashcard";
import { FlipButton } from "./FlipButton";
import { NextButton } from "./NextButton";
import { NewButton } from "./NewButton";
import { SubjectMenu } from "./SubjectMenu";
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
  newCard: IFlashcard;
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
          subject: "Mathematics",
          frontSide: "What is the power series of (1-x)^(-1)?",
          backSide: "1+x+x^2+..."
        },
        {
          subject: "Biology",
          frontSide: "What does DNA stand for?",
          backSide: "Deoxyribonucleic acid"
        },
        {
          subject: "Mathematics",
          frontSide: "What is the integral of log(x)?",
          backSide: "x*log(x)-x+C"
        },
        {
          subject: "Biology",
          frontSide: "What is translation?",
          backSide: "The synthesis of a protein from an mRNA template"
        }
      ],
      currentIndex: 0,
      newCard: {
        subject: "",
        frontSide: "",
        backSide: ""
      }
    };
  }

  handleFlip = () => {
    this.setState({
      onFrontSide: !this.state.onFrontSide
    });
  };

  handleNext = (subject: string) => {
    let deck: IFlashcard[] = this.state.cards;
    let nextIndex: number = this.state.currentIndex;
    while (true) {
      nextIndex = (nextIndex + 1) % this.state.cards.length;
      if (deck[nextIndex].subject == subject) break;
    }
    this.setState({
      currentIndex: nextIndex,
      onFrontSide: true
    });
  };

  handleSubjectChange = (subject: string) => {
    this.setState({
      newCard: {
        subject: subject,
        frontSide: this.state.newCard.frontSide,
        backSide: this.state.newCard.backSide
      }
    });
  };

  handleFrontSideChange = (frontSide: string) => {
    this.setState({
      newCard: {
        subject: this.state.newCard.subject,
        frontSide: frontSide,
        backSide: this.state.newCard.backSide
      }
    });
  };

  handleBackSideChange = (backSide: string) => {
    this.setState({
      newCard: {
        subject: this.state.newCard.subject,
        frontSide: this.state.newCard.frontSide,
        backSide: backSide
      }
    });
  };

  handleAdd = () => {
    this.setState({
      cards: this.state.cards.concat(this.state.newCard),
      newCard: {
        subject: "",
        frontSide: "",
        backSide: ""
      }
    });
  };

  render() {
    var currentCard: IFlashcard = this.state.cards[this.state.currentIndex];
    return (
      <React.Fragment>
        <h1>Study with Flashcards</h1>
        <div>
          <SubjectMenu
            onSelect={event => this.handleNext(event.target.value)}
          />
        </div>
        <div>
          <Flashcard
            currentCard={currentCard}
            onFrontSide={this.state.onFrontSide}
          />
        </div>
        <div>
          <FlipButton onFlip={this.handleFlip} />
          <NextButton onNext={() => this.handleNext(currentCard.subject)} />
          <NewButton
            onSubjectChange={event =>
              this.handleSubjectChange(event.target.value)
            }
            onFrontSideChange={event =>
              this.handleFrontSideChange(event.target.value)
            }
            onBackSideChange={event =>
              this.handleBackSideChange(event.target.value)
            }
            onAdd={this.handleAdd}
          />
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
