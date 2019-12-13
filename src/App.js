import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
// import { allMessages } from "./actions";

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount() {
    this.stream.onmessage = event => {
      const parsed = JSON.parse(event.data);
      // this.props.allMessages(parsed);
      this.props.dispatch(parsed);
      // console.log("parsed: ", parsed);
    };
  }

  render() {
    const { messages } = this.props;
    const list = messages.map(message => {
      return <p key={message.id}>{message.text}</p>;
    });

    return <div>Client {list}</div>;
  }
}

function mapStateToProps(state) {
  return {
    messages: state
  };
}

// const mapDispatchToProps = {
//   allMessages //action can be dispatched by running this.props.allMessages
// };

export default connect(mapStateToProps)(App);
