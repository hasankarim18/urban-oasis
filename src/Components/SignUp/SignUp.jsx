import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState("")

    const handleSignUp = (event) => {
      
    };

    return (
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
        <p className="text-error">{error}</p>
      </div>
    );
};

export default SignUp;