export default function PersonalDetails({onFullName, onHandleFullName, onEmail, onHandleEmail, onPhone, onHandlePhone, onLocation, onHandleLocation}) {
    return (
        <form className="personal-details" action="get">
          <h1>Personal Details</h1>
          <label>Full Name</label>
          <input type="text" value={onFullName} onInput={onHandleFullName}/>
          <label>Email (required)</label>
          <input type="email" value={onEmail} onInput={onHandleEmail} required />
          <label>Phone Number (recommended)</label>
          <input type="tel" value={onPhone} onInput={onHandlePhone} />
          <label>Address (recommended)</label>
          <input type="text" value={onLocation} onInput={onHandleLocation} />
        </form>
    )
  }