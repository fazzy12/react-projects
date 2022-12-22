import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })


  const [submit, setSubmit ] = useState(false)
  const [valid, setValid] = useState(false)

  const handleSummit = (event) => {
    event.preventDefault()
    if(val.firstName && val.lastName && val.email){
      setValid(true)
    }
    setSubmit(true)
  }



const firstNameInputChange = (event) => {
   setVal({...val, firstName: event.target.value})
}
const lastNameInputChange = (event) => {
   setVal({...val, lastName: event.target.value})
}
const emailNameInputChange = (event) => {
   setVal({...val, email: event.target.value})
}

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSummit}>
        {submit && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={firstNameInputChange}
          value={val.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submit && !val.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          onChange={lastNameInputChange}
          value={val.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submit && !val.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          onChange={emailNameInputChange}
          value={val.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submit && !val.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}