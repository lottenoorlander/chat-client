import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
// import { allMessages } from "./actions";
import superagent from "superagent";

class App extends Component {
  state = {
    text: ""
  };

  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount() {
    this.stream.onmessage = event => {
      const parsed = JSON.parse(event.data);
      // this.props.allMessages(parsed);
      this.props.dispatch(parsed);
      // console.log("parsed: ", parsed);
    };
  }

  onChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ text: value });
  };

  onSubmit = async event => {
    event.preventDefault();
    const url = "http://localhost:4000/message";
    const response = await superagent.post(url).send(this.state);
    this.setState({ text: " " });
    console.log("this is response", response);
  };

  render() {
    const { messages } = this.props;
    const list = messages.map(message => {
      return <p key={message.id}>{message.text}</p>;
    });

    return (
      <main className="App">
        <h1>
          Chatapp
          <br />
        </h1>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button className="button">Submit</button>
        </form>
        <br />
        <div className="chatbox">{list}</div>
      </main>
    );
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
