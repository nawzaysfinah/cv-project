import "../styles/main.css";
import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      school: "",
      studyTitle: "",
      studyDate: "",
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
    const { school, studyTitle, studyDate } = this.state;
    // Submit the form or update the parent component's state
    // with the edited values
    this.props.onSubmit(school, studyTitle, studyDate);
    this.setState({
      isEditing: false,
      school: "",
      studyTitle: "",
      studyDate: "",
    });
  };

  render() {
    const { isEditing, school, studyTitle, studyDate } = this.state;

    if (isEditing) {
      return (
        <div>
          <div>
            <label>School:</label>
            <input
              type="text"
              name="school"
              value={school}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Title of Study:</label>
            <input
              type="text"
              name="studyTitle"
              value={studyTitle}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Date of Study:</label>
            <input
              type="text"
              name="studyDate"
              value={studyDate}
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
            <strong>School:</strong> {this.props.school}
          </div>
          <div>
            <strong>Title of Study:</strong> {this.props.studyTitle}
          </div>
          <div>
            <strong>Date of Study:</strong> {this.props.studyDate}
          </div>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default Education;
