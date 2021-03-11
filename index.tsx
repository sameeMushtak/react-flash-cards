import React, { Component } from "react";
import { render } from "react-dom";
import { Flashcard } from "./Flashcard";
import { NextButton } from "./NextButton";
import { NewButton } from "./NewButton";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <h1>Study with Flashcards</h1>
        <Flashcard />
        <NextButton />
        <NewButton />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
