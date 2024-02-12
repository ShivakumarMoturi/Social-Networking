// Login.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(""); 
  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (Validate()) {
      console.log("passed");
      fetch("http://localhost:8000/user/" + username)
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error('Please enter a valid username');
          } else {
            if (resp.password === password) {
              toast.success('Login Successfully');
              setLoggedInUser(username); 
              navigate('/post');
            } else {
              toast.error('Please enter a valid password');
            }
          }
        })
        .catch((err) => {
          toast.error('Login Failed due to: ' + err.message);
        });
    }
  };

  const Validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter Username");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };

  return (
    <>
      <div className='background-image'>
        <div className="mainL">
          <div className='row1'>
            <form onSubmit={ProceedLogin} className='containerL'>
              <div className="Card1L">
                <div className="Card-Body1L">
                  <h1>Login</h1>
                  <div>
                    <label>UserName<span className="err"></span></label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='form-control1L'
                      placeholder='Enter your username'
                    ></input>
                  </div>
                  <br></br>
                  <div>
                    <label>Password<span className="err"></span></label>
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='form-control1L'
                      placeholder='Enter your password'
                    ></input>
                  </div>

                  <div>
                    <button className="btn1L" type="submit">
                      LOGIN
                    </button>

                    <Link className='usrL' to={'/Registration'}>
                      NEW USER{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Navbar loggedInUser={loggedInUser} /> Pass loggedInUser to Navbar */}
    </>
  );
};

export default Login;
