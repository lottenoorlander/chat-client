import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

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

function mapStateToProps(state) {
  return {
    messages: state
  };
}

export default connect(mapStateToProps)(App);
