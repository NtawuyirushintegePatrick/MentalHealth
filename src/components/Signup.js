import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [Names, setNames] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [Gender, setGender] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const registerData = {
    name: Names,
    email: Email,
    role: Role,
    gender: Gender,
    phone: Phone,
    password: Password,
    password_confirmation: ConfirmPassword,
  };

  const showToastMessage = () => {
    toast.success("Successfully Registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  async function submitHandler(e) {
    e.preventDefault();
    await axios
      .post("http://mentalhealthyapi.herokuapp.com/api/register", registerData)
      .then((res) => {
        console.log(res);
        showToastMessage();
        
      });
    // try{
    //  await axios.post("http://mentalhealthyapi.herokuapp.com/api/register", registerData)
    //   console.log(response);
    // } catch(error) {
    //   console.log(error)
    // }
  }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log(registerData)
  //   fetch("http://mentalhealthyapi.herokuapp.com/api/register", {method: "POST", body: registerData, headers: {
  //     "accept": "application/json",
  //     "content-type": "application/json "
  //   }})
  //   .then((response)=>{
  //     console.log(response)
  //   })
  //   .catch((error)=> {
  //     console.log(error)
  //   })
  // }

  return (
    <>
      <div className="layer" />
      <main className="page-center">
        <article className="sign-up">
          <Link to="/signin">
            <b>Go Back</b>
          </Link>
          <h1 className="sign-up__title">Register</h1>
          <p className="sign-up__subtitle">
            {/* Start creating the best possible user experience for you customers */}
          </p>
          <ToastContainer />
          <form
            className="sign-up-form form"
            action=""
            method=""
            style={{ height: "40%", width: "500px" }}
          >
            <label className="form-label-wrapper">
              <p className="form-label">Names</p>
              <input
                className="form-input"
                value={Names}
                onChange={(e) => setNames(e.target.value)}
                type="text"
                placeholder="Enter your name"
                required=""
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Email</p>
              <input
                className="form-input"
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your Email"
                required=""
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Role</p>
              <input
                className="form-input"
                type="text"
                value={Role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                placeholder="Enter your role"
                required=""
              />
            </label>

            <label className="form-label-wrapper">
              <p className="form-label">Gender</p>
              <input
                className="form-input"
                type="text"
                value={Gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                placeholder="Enter your Gender"
                required=""
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Phone</p>
              <input
                className="form-input"
                type="number"
                value={Phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Enter your Phone Number"
                required=""
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Password</p>
              <input
                className="form-input"
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required=""
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Confirm Password</p>
              <input
                className="form-input"
                type="password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your Password"
                required=""
              />
            </label>
            <label className="form-checkbox-wrapper">
              <input className="form-checkbox" type="checkbox" required="" />
              <span className="form-checkbox-label">Remember me next time</span>
            </label>
            <button
              className="form-btn primary-default-btn transparent-btn"
              onClick={submitHandler}
            >
              Register
            </button>
            <p1 className="register">
              If you already have account <Link to="/signin">Login</Link>
            </p1>
          </form>
        </article>
      </main>
    </>
  );
};

export default Signup;
