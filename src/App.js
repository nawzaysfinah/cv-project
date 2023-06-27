import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SubmitButton from "./components/SubmitButton";
import EditButton from "./components/EditButton";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    studyDate: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    tasks: "",
    fromDate: "",
    toDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleGeneralInfoSubmit = (name, email, phoneNumber) => {
    setGeneralInfo({ name, email, phoneNumber });
    setIsEditing(false);
  };

  const handleEducationSubmit = (school, studyTitle, studyDate) => {
    setEducation({ school, studyTitle, studyDate });
    setIsEditing(false);
  };

  const handleExperienceSubmit = (
    company,
    position,
    tasks,
    fromDate,
    toDate
  ) => {
    setExperience({ company, position, tasks, fromDate, toDate });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCVSubmit = () => {
    // Perform any action to submit the CV, e.g., API call
    console.log("CV submitted!");
  };

  return (
    <div className="container">
      <h1>CV Application</h1>
      <GeneralInfo
        name={generalInfo.name}
        email={generalInfo.email}
        phoneNumber={generalInfo.phoneNumber}
        onSubmit={handleGeneralInfoSubmit}
      />
      <Education
        school={education.school}
        studyTitle={education.studyTitle}
        studyDate={education.studyDate}
        onSubmit={handleEducationSubmit}
      />
      <Experience
        company={experience.company}
        position={experience.position}
        tasks={experience.tasks}
        fromDate={experience.fromDate}
        toDate={experience.toDate}
        onSubmit={handleExperienceSubmit}
      />
      {isEditing ? (
        <SubmitButton onSubmit={handleCVSubmit} />
      ) : (
        <EditButton onEdit={handleEdit} />
      )}
    </div>
  );
}

export default App;
