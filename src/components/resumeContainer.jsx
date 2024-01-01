export default function ResumeContainer({onFullName, onEmail, onPhone, onLocation, onSchool, onDegree, onEducationStart, onEducationEnd, onEducationLocation, onCompanyName, onPositionTitle, onCompanyStartDate, onCompanyEndDate, onCompanyLocation, onCompanyDescription}) {
    return (
      <div className="resume-container">
        <header>
          <h2>{onFullName}</h2>
          <span></span>
          <ul className="infos">
            <li>{onEmail}</li>
            <li>{onPhone}</li>
            <li>{onLocation}</li>
          </ul>
        </header>
        <h3>Education</h3>
        <div>
          <ul className="cv-infos">
            <li>{onEducationStart} – {onEducationEnd}</li>
            <li>{onEducationLocation}</li>
          </ul>
          <ul  className="cv-details">
            <li><strong>{onSchool}</strong></li>
            <li>{onDegree}</li>
          </ul>
        </div>
        <h3>Professional Education</h3>
        <div>
          <ul className="cv-infos">
            <li>{onCompanyStartDate} – {onCompanyEndDate}</li>
            <li>{onCompanyLocation}</li>
          </ul>
          <ul className="cv-details">
            <li><strong>{onCompanyName}</strong></li>
            <li>{onPositionTitle}</li>
            <li>{onCompanyDescription}</li>
          </ul>
        </div>
      </div>
    );
  }
  