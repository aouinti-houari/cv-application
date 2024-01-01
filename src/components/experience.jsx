export default function Experience({ 
    onCompanyName, 
    onHandleCompanyName, 
    onPositionTitle, 
    onHandlePositionTitle, 
    onCompanyStartDate, 
    onHandleCompanyStartDate, 
    onCompanyEndDate, 
    onHandleCompanyEndDate, 
    onCompanyLocation, 
    onHandleCompanyLocation, 
    onCompanyDescription, 
    onHandleCompanyDescription 
  }) {
    return (
      <div className="experience-details">
      <h1>Experience</h1>
          <label>Company Name</label>
          <input type="text" value={onCompanyName} onInput={onHandleCompanyName}/>
          <label>Position Title</label>
          <input type="text" placeholder="Position title" value={onPositionTitle} onInput={onHandlePositionTitle} required />
          <label>Start Date</label>
          <input type="text" placeholder="Enter start date" value={onCompanyStartDate} onInput={onHandleCompanyStartDate} />
          <label>End Date</label>
          <input type="text" value={onCompanyEndDate} onInput={onHandleCompanyEndDate} placeholder="Enter end date" />
          <label>Location (optional)</label>
          <input type="text" value={onCompanyLocation} onInput={onHandleCompanyLocation} placeholder="Enter Location" />
          <label>Description (optional)</label>
          <textarea value={onCompanyDescription} onChange={onHandleCompanyDescription} placeholder="Enter description"></textarea>
      </div>
    )
  }