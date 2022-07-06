import React from "react";
import InputBox from "./InputBox";
import PicsRender from "./PicsRender";
import { fetchPics } from "./../actions";
import { connect } from "react-redux";

class App extends React.Component {
  onSubmit = (formValues) => {
    this.props.fetchPics(formValues);
  };
  render() {
    return (
      <div className="ui container">
        <InputBox onSubmit={this.onSubmit} />
        <PicsRender />
      </div>
    );
  }
}

export default connect(null, { fetchPics })(App);
