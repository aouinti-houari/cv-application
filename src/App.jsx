import { useState } from "react";
import PersonalDetails from "./components/personalDetails";
import Education from "./components/education";
import Experience from "./components/experience";
import ResumeContainer from "./components/resumeContainer";
import ClearExample from "./components/clearExample";
import LoadExample from "./components/loadExample";

export default function App() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@mail.com"); 
  const [phone, setPhone] = useState("+44 3245 2612 6941");
  const [location, setLocation] = useState("USA, Las Vegas");
  const [school, setSchool] = useState("Harvard");
  const [degree, setDegree] = useState("Bachelor in Computer Science");
  const [educationStart, setEducationStart] = useState("2000-12-12");
  const [educationEnd, setEducationEnd] = useState("2010-05-02");
  const [educationLocation, setEducationLocation] = useState("New York");
  const [companyName, setCompanyName] = useState("Microsoft");
  const [positionTitle, setPositionTitle] = useState("CEO");
  const [companyStartDate, setCompanyStartDate] = useState("2011-08-11");
  const [companyEndDate, setCompanyEndDate] = useState("present");
  const [companyLocation, setCompanyLocation] = useState("Paris");
  const [companyDescription, setCompanyDescription] = useState("lorem ipsum dolor");

  function handleClear() {
    setFullName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setSchool("");
    setDegree("")
    setEducationStart("");
    setEducationEnd("");
    setEducationLocation("");
    setCompanyName("");
    setPositionTitle("");
    setCompanyStartDate("");
    setCompanyEndDate("");
    setCompanyLocation("");
    setCompanyDescription("");
  }

  function handleLoadExample() {
    setFullName("John Doe");
    setEmail("johndoe@mail.com");
    setPhone("+44 3245 2612 6941");
    setLocation("USA, Las Vegas");
    setSchool("Harvard");
    setDegree("Bachelor in Computer Science");
    setEducationStart("2000-12-12");
    setEducationEnd("2010-05-02");
    setEducationLocation("New York");
    setCompanyName("Microsoft");
    setPositionTitle("CEO");
    setCompanyStartDate("2011-08-11");
    setCompanyEndDate("present");
    setCompanyLocation("Paris");
    setCompanyDescription("lorem ipsum dolor");
  }

  return (
    <div className='container'>
      <div className="form-container">
        <ul className="manage-example">
          <ClearExample handleClear={handleClear} />
          <LoadExample handleLoadExample={handleLoadExample} />
        </ul>
        <PersonalDetails onFullName={fullName} onHandleFullName={e => setFullName(e.target.value)} 
                         onEmail={email} onHandleEmail={e => setEmail(e.target.value)}
                         onPhone={phone} onHandlePhone={e => setPhone(e.target.value)}
                         onLocation={location} onHandleLocation={e => setLocation(e.target.value)} />
        <Education onSchool={school} onHandleSchool={e => setSchool(e.target.value)}
                    onDegree={degree} onHandleDegree={e => setDegree(e.target.value)}
                    onEducationStart={educationStart} onHandleEducationStart={e => setEducationStart(e.target.value)}
                    onEducationEnd={educationEnd} onHandleEducationEnd={e => setEducationEnd(e.target.value)}
                    onEducationLocation={educationLocation} onHandleEducationLocation={e => setEducationLocation(e.target.value)}
         />
        <Experience onCompanyName={companyName} onHandleCompanyName={e => setCompanyName(e.target.value)} 
        onPositionTitle={positionTitle} onHandlePositionTitle={e => setPositionTitle(e.target.value)} 
        onCompanyStartDate={companyStartDate} onHandleCompanyStartDate={ e => setCompanyStartDate(e.target.value)} 
        onCompanyEndDate={companyEndDate} onHandleCompanyEndDate={e => setCompanyEndDate(e.target.value)}
        onCompanyLocation={companyLocation} onHandleCompanyLocation={e => setCompanyLocation(e.target.value)}
        onCompanyDescription={companyDescription} onHandleCompanyDescription={e => setCompanyDescription(e.target.value)} />
      </div>
      <ResumeContainer onFullName={fullName} onEmail={email} onPhone={phone} onLocation={location} onSchool={school} 
      onDegree={degree} onEducationEnd={educationEnd} onEducationStart={educationStart} onEducationLocation={educationLocation}
      onCompanyName={companyName} onPositionTitle={positionTitle} onCompanyStartDate={companyStartDate} onCompanyEndDate={companyEndDate} onCompanyLocation={companyLocation} onCompanyDescription={companyDescription} />
    </div>
  )
}
