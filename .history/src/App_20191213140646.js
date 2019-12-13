import React, { Component } from "react";
import "./App.css";

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount() {
    this.stream.onmessage = event => {
      console.log(event);
    };
  }

  render() {
    return <div></div>;
  }
}

export default App;