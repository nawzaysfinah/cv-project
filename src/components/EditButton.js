import React from "react";
import "../styles/main.css";

class EditButton extends React.Component {
  render() {
    return <button onClick={this.props.onEdit}>Edit CV</button>;
  }
}

export default EditButton;
