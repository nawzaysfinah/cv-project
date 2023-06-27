import React from "react";
import "../styles/main.css";

class SubmitButton extends React.Component {
  render() {
    return <button onClick={this.props.onSubmit}>Submit CV</button>;
  }
}

export default SubmitButton;
