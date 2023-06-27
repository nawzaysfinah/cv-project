import React from "react";
import "../styles/main.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      company: "",
      position: "",
      tasks: "",
      fromDate: "",
      toDate: "",
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
    const { company, position, tasks, fromDate, toDate } = this.state;
    // Submit the form or update the parent component's state
    // with the edited values
    this.props.onSubmit(company, position, tasks, fromDate, toDate);
    this.setState({
      isEditing: false,
      company: "",
      position: "",
      tasks: "",
      fromDate: "",
      toDate: "",
    });
  };

  render() {
    const { isEditing, company, position, tasks, fromDate, toDate } =
      this.state;

    if (isEditing) {
      return (
        <div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Position:</label>
            <input
              type="text"
              name="position"
              value={position}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Main Tasks:</label>
            <input
              type="text"
              name="tasks"
              value={tasks}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>From Date:</label>
            <input
              type="text"
              name="fromDate"
              value={fromDate}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>To Date:</label>
            <input
              type="text"
              name="toDate"
              value={toDate}
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
            <strong>Company:</strong> {this.props.company}
          </div>
          <div>
            <strong>Position:</strong> {this.props.position}
          </div>
          <div>
            <strong>Main Tasks:</strong> {this.props.tasks}
          </div>
          <div>
            <strong>From Date:</strong> {this.props.fromDate}
          </div>
          <div>
            <strong>To Date:</strong> {this.props.toDate}
          </div>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default Experience;
