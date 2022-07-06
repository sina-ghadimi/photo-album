import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPics } from "../actions";
import "./PicsRender.css";
import PicsCard from "./PicsCard";

class PicsRender extends Component {
  renderList = () => {
    return this.props.pics.map((pic) => {
      return <PicsCard key={pic.id} pic={pic} />;
    });
  };

  render() {
    return <div className="pics-render">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { pics: state.pics };
};

export default connect(mapStateToProps, { fetchPics })(PicsRender);
