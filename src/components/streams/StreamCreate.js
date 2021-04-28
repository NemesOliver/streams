import React, { Component } from "react";
import { connect } from "react-redux";
import { createStreams } from "../../actions/index";

import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formProps) => {
    this.props.createStreams(formProps);
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStreams })(StreamCreate);
