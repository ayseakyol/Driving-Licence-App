import React from "react";

// name, surname, email, password parameters are coming from parent component (Signup)
function FormFields({ firstName, lastName, country, email, password }) {
  return (
    <div>
      <div className="form-group mt-4">
        <h6>What is your first name?*</h6>
        <input
          type="text"
          class="form-control"
          id="fname"
          placeholder="Enter first name"
          name="fname"
          required
          value={firstName.value}
          onChange={firstName.onChange}
        ></input>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">* Must be filled.</div>
      </div>
      <div className="form-group mt-4">
        <h6>What is your last name?*</h6>
        <input
          type="text"
          className="form-control"
          id="lname"
          placeholder="Enter last name"
          name="lname"
          required
          value={lastName.value}
          onChange={lastName.onChange}
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">* Must be filled.</div>
      </div>
      <div className="form-group mt-4">
        <h6>What is your country?*</h6>
        <input
          type="text"
          class="form-control"
          id="country"
          placeholder="Enter your country"
          name="country"
          required
          value={country.value}
          onChange={country.onChange}
        ></input>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">* Must be filled.</div>
      </div>
      <div className="form-group mt-4">
        <h6>What is your email address?*</h6>
        <input
          id="email"
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          value={email.value}
          onChange={email.onChange}
          name="email"
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">* Must be filled.</div>
      </div>
      <div class="form-group mt-4">
        <h6>Create a password*</h6>
        <input
          id="password"
          className="form-control"
          type="password"
          required
          value={password.value}
          onChange={password.onChange}
          name="up"
          placeholder="Password(at least 7 letters/numbers)"
        />
        <div className="valid-feedback"></div>
        <div className="invalid-feedback mb-4">* Must be filled.</div>
      </div>
    </div>
  );
}

export default FormFields;
