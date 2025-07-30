import "./register.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="type" name="password" placeholder="Password" />
          <button> Register</button>
          <Link to="/login"> Do you have an account</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
