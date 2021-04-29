import React from "react";
import history from "../../history";
import Modal from "../Modal";

class StreamDelete extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          onDismiss={() => history.push("/")}
          actions={this.renderActions()}
          header="Delete Stream"
          content="Are you sure you want to Delete this stream?"
        />
      </div>
    );
  }
}

export default StreamDelete;
