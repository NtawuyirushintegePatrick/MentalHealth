import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {

const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")

// const loginData = {
//   email: Email,
//   password: Password,
// }


// const showToastMessage = () => {
//   toast.success("Successfully logged in !", {
//     position: toast.POSITION.TOP_RIGHT,
//   });
// };


// async function submitHandler(e) {
//   e.preventDefault();
//   await axios
//     .post("http://mentalhealthyapi.herokuapp.com/api/login", loginData)
//     .then((res) => {
//       console.log(res);
//       showToastMessage();
      
//     });




  return (
    <>
  <div className="layer" />
  <main className="page-center">
    <article className="sign-up">
      {/* <h1 className="sign-up__title">Welcome back!</h1> */}
      <Link to="/"><b>Back to Home </b></Link>
      <p className="sign-up__subtitle">Sign in to your account to continue</p>
      {/* <ToastContainer /> */}
      <form className="sign-up-form form" action="" method="" style={{height:"50%",width:"500px"}}>
        <label className="form-label-wrapper">
          <p className="form-label">Email</p>
          <input
            className="form-input"
            type="email"
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Enter your email"
            required=""
          />
        </label>
        <label className="form-label-wrapper">
          <p className="form-label">Password</p>
          <input
            className="form-input"
            type="password"
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Enter your password"
            required=""
          />
        </label>
        <a className="link-info forget-link" href="##">
          Forgot your password?
        </a>
        <label className="form-checkbox-wrapper">
          <input className="form-checkbox" type="checkbox" required="" />
          <span className="form-checkbox-label">Remember me next time</span>
        </label>
        <button className="form-btn primary-default-btn transparent-btn"
          //  onClick={submitHandler}
           >
          Sign in
        </button>
        <p1 className='register'> 
          If you don't have account <Link to="/signup">Register</Link>
        </p1>
      </form>
    </article>
  </main>
</>
  )
}


export default Signin;