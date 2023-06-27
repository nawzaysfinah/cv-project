import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SubmitButton from "./components/SubmitButton";
import EditButton from "./components/EditButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      education: {
        school: "",
        studyTitle: "",
        studyDate: "",
      },
      experience: {
        company: "",
        position: "",
        tasks: "",
        fromDate: "",
        toDate: "",
      },
      isEditing: false,
    };
  }

  handleGeneralInfoSubmit = (name, email, phoneNumber) => {
    this.setState({
      generalInfo: { name, email, phoneNumber },
      isEditing: false,
    });
  };

  handleEducationSubmit = (school, studyTitle, studyDate) => {
    this.setState({
      education: { school, studyTitle, studyDate },
      isEditing: false,
    });
  };

  handleExperienceSubmit = (company, position, tasks, fromDate, toDate) => {
    this.setState({
      experience: { company, position, tasks, fromDate, toDate },
      isEditing: false,
    });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleCVSubmit = () => {
    // Perform any action to submit the CV, e.g., API call
    console.log("CV submitted!");
  };

  render() {
    const { generalInfo, education, experience, isEditing } = this.state;

    return (
      <div className="container">
        <h1>CV Application</h1>
        <GeneralInfo
          name={generalInfo.name}
          email={generalInfo.email}
          phoneNumber={generalInfo.phoneNumber}
          onSubmit={this.handleGeneralInfoSubmit}
        />
        <Education
          school={education.school}
          studyTitle={education.studyTitle}
          studyDate={education.studyDate}
          onSubmit={this.handleEducationSubmit}
        />
        <Experience
          company={experience.company}
          position={experience.position}
          tasks={experience.tasks}
          fromDate={experience.fromDate}
          toDate={experience.toDate}
          onSubmit={this.handleExperienceSubmit}
        />
        {isEditing ? (
          <SubmitButton onSubmit={this.handleCVSubmit} />
        ) : (
          <EditButton onEdit={this.handleEdit} />
        )}
      </div>
    );
  }
}

export default App;
