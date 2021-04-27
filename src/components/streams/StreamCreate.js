import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStreams } from "../../actions/index";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formProps) => {
    this.props.createStreams(formProps);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title*" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description*"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const errors = {};
  if (!formProps.title) {
    errors.title = "You Must Enter a Title";
  }

  if (!formProps.description) {
    errors.description = "You Must Enter a Description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "createStream",
  validate,
})(StreamCreate);

export default connect(null, { createStreams })(formWrapped);
