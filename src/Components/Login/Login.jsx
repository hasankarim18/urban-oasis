import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [show, setShow] = useState(false)
    const {loginWithEmailPassword} = useContext(AuthContext)
    const navigate = useNavigate()

    const signInSuccessToast = (userName)=> toast(`Hello ${userName}`)
    const signInErrorToast = (userName) => toast(`Login Error`);
  


    const handleLogin = (event) => {
          event.preventDefault();
          const form = event.target;
         
          const email = form.email.value;
          const password = form.password.value;

          loginWithEmailPassword(email,password)
          .then((res)=> {
            const loggedInUser = res.user 
            const userName = loggedInUser.email.split('@')[0]
            
            signInSuccessToast(userName)
            form.reset()
            navigate('/')
          })
          .catch(error => {
            signInErrorToast()
            console.log(error);
          })


    };

    return (
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <small
              className="cursor-pointer hover:text-myorange "
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
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
            </small>
          </div>
          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p>
          <small>
            New to Ema-john?{" "}
            <Link className="text-myorange " to="/signup">
              Create New Account
            </Link>
          </small>
        </p>
      </div>
    );
};

export default Login;