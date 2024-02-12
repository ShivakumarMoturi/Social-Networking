// Registration.js

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [state, statechange] = useState("");
  const [gender, genderchange] = useState("male");
  const navigate=useNavigate()
  const IsValidate = () => {
    let isproceed = true;
    let errmsge = "Please enter the ";

    if (id === null || id === '') {
      isproceed = false;
      errmsge += "Id";
    }

    if (name === null || name === '') {
      isproceed = false;
      errmsge += " Name";
    }
    if (email === null || email === '') {
      isproceed = false;
      errmsge += " Email";
    }
    if (password === null || password === '') {
      isproceed = false;
      errmsge += " Password";
    }
    if (!isproceed) {
      toast.warning(errmsge);
    } else {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, state, gender };
    console.log(regobj);
    if (IsValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regobj)
      })
        .then((res) => {
          navigate('/')
          toast.success('Registered successfully.');
        })
        .catch((err) => {
          toast.error('Registration Failed: ' + err.message);
        });
    }
  };

  return (
    <div className='Registration-BGPIC'>
      <div className="Registration-container">
        <div className="Registration-header1">
          <h1>REGISTRATION</h1>
        </div>

        <div className='Registration-Body'>
          <form onSubmit={handlesubmit}>
            <div className="Registration-elements">
              <div className="Registration-input-group">
                <label className='Registration-l1'>Username</label>
                <input
                  className="Registration-input-field"
                  value={id}
                  onChange={e => idchange(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="Registration-input-group">
                <label className='Registration-l1'>Password</label>
                <input
                  className="Registration-input-field"
                  value={password}
                  onChange={e => passwordchange(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="Registration-input-group">
                <label className='Registration-l1'>FullName</label>
                <input
                  className="Registration-input-field"
                  value={name}
                  onChange={e => namechange(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="Registration-input-group">
                <label className='Registration-l1'>Email</label>
                <input
                  className="Registration-input-field"
                  value={email}
                  onChange={e => emailchange(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="Registration-input-group">
                <label className='Registration-l1'>State</label>
                <select
                  value={state}
                  onChange={e => statechange(e.target.value)}
                  className="Registration-input-field"
                >
                  <option value="Telangana">Telangana</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="TamilNadu">TamilNadu</option>
                </select>
              </div>
              <div className="Registration-input-group">
                <label className='Registration-l1'>GENDER</label>
                <div className="Registration-radio-group">
                  <input
                    type="radio"
                    checked={gender === 'male'}
                    onChange={() => genderchange('male')}
                    value="Male"
                    name="gender"
                  />
                  <label className='Registration-l1'>Male</label>
                  <input
                    type="radio"
                    checked={gender === 'female'}
                    onChange={() => genderchange('female')}
                    value="Female"
                    name="gender"
                  />
                  <label className='Registration-l1'>Female</label>
                </div>
              </div>
              <button type="submit" className="Registration-submit-button">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
