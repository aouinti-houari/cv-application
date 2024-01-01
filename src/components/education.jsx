export default function Education({onSchool, onHandleSchool, onDegree, onHandleDegree, onEducationStart, onHandleEducationStart, onEducationEnd, onHandleEducationEnd, onEducationLocation, onHandleEducationLocation}) {
    return (
    <div className="education-details">
      <h1>Education</h1>
          <label>School</label>
          <input type="text" value={onSchool} onInput={onHandleSchool} />
          <label>Degree</label>
          <input type="text" value={onDegree} onInput={onHandleDegree} required />
          <label>Start Date</label>
          <input type="text" value={onEducationStart} onInput={onHandleEducationStart} />
          <label>End Date</label>
          <input type="text" value={onEducationEnd} onInput={onHandleEducationEnd} />
          <label>Location</label>
          <input type="text" value={onEducationLocation} onInput={onHandleEducationLocation} />
    </div>);
  }
  