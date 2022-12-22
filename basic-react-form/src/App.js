import React, { useState } from "react";
import "./index.css";

export default function App() {
  // Initialize the form values and functions to update them
  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Initialize state variables to track form submission and validity
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // If all form fields are filled, set form as valid
    if (val.firstName && val.lastName && val.email) {
      setValid(true);
    }

    // Set form as submitted
    setSubmit(true);
  };

  // Functions to update form values when input fields are changed
  const firstNameInputChange = (event) => {
    setVal({ ...val, firstName: event.target.value });
  };
  const lastNameInputChange = (event) => {
    setVal({ ...val, lastName: event.target.value });
  };
  const emailNameInputChange = (event) => {
    setVal({ ...val, email: event.target.value });
  };

  return (
    <div class="form-container">
      {/* Form for registering users */}
      <form class="register-form" onSubmit={handleSubmit}>
        {/* If form is valid and has been submitted, show success message */}
        {submit && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}

        {/* First name input field */}
        <input
          onChange={firstNameInputChange}
          value={val.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* If form has been submitted and first name is not filled, show error message */}
        {submit && !val.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}

        {/* Last name input field */}
        <input
          onChange={lastNameInputChange}
          value={val.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* If form has been submitted and last name is not filled, show error message */}
        {submit && !val.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        {/* Email input field */}
        <input
          onChange={emailNameInputChange}
          value={val.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* If form has been submitted and email is not filled, show error message */}
        {submit && !val.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        {/* Form submit button */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}