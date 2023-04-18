import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState("")
    const [show, setShow] = useState(false)

    const handleSignUp = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value 
      const password = form.password.value 
      const confirm = form.confirm.value 

      if(password !== confirm){
          setError('Your password did not match')
          return 
      }else if(password.length < 6){
        setError("Password must be 6 charecter or longer")
        return 
      }

      console.log(email, password, confirm);
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
            <input type={show?'text':'password'} name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type={show?'text':'password'} name="confirm" id="" required />
          </div>
          <div>
            <p className="cursor-pointer hover:text-myorange " onClick={()=> { setShow(prev => !prev) }}>
              {!show ? (
                <span>
                  {" "}
                  Show Password <i className="fa-regular fa-eye"></i>{" "}
                </span>
              ) : (
                <span>
                  Hide password <i className="fa-regular fa-eye-slash"></i>
                </span>
              )}
            </p>
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          <small>
            Already have an account?{" "}
            <Link className="text-myorange" to="/login">
              Login
            </Link>
          </small>
        </p>
        <p className="text-error">{error}</p>
      </div>
    );
};

export default SignUp;