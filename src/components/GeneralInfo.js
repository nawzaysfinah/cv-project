import "../styles/main.css";
import React from "react";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: props.name,
      email: props.email,
      phoneNumber: props.phoneNumber,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSubmit = () => {
    const { name, email, phoneNumber } = this.state;
    // Submit the form or update the parent component's state
    // with the edited values
    this.props.onSubmit(name, email, phoneNumber);
    this.setState({ isEditing: false });
  };

  render() {
    const { isEditing, name, email, phoneNumber } = this.state;

    if (isEditing) {
      return (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleInputChange}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>Phone Number:</strong> {phoneNumber}
          </div>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default GeneralInfo;
