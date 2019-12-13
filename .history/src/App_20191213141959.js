import React, { Component } from "react";
import "./App.css";

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount() {
    this.stream.onmessage = event => {
      const parsed = JSON.parse(event.data);
      console.log(parsed);
    };
  }

  render() {
    return <div>client</div>;
  }
}

export default App;
