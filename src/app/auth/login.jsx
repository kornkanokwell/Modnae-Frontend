import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import "./login.css";
import loginimg from "../../assets/login.png";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setLog] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      navigate("/");
    } else {
      navigate("/");
    }
  };
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://modnae-m7lm.onrender.com/api/login", value)
      .then((response) => {
        dispatch({
          type: "LOGIN",
          payload: {
            token: response.data.token,
            username: response.data.payload.user.username,
            firstname: response.data.payload.user.firstname,
            lastname: response.data.payload.user.lastname,
            email: response.data.payload.user.email,
            role: response.data.payload.user.role,
          },
        });
        localStorage.setItem("token", response.data.token);
        roleBaseRedirect(response.data.payload.user.role);
      })

      .catch((error) => {
        if (error.response && error.response.data === "Password invalid") {
          setLog("รหัสผ่านไม่ถูกต้อง");
        } else {
          setLog("กรุณายืนยันตัวตน");
        }
      });
  };
  return (
    <>
      <div className="loginCenter">
        <div className="loginContent">
          <div className="loginPicture">
            <img src={loginimg} alt="" />
          </div>

          <div className="loginMain">
            <h1 className="headLogin">เข้าสู่ระบบ</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="inputContainer">
                <svg
                  className="inputIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <input
                  className="loginInput"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="email@mail.kmutt.ac.th"
                />
              </div>

              <div className="inputContainer">
                <svg
                  className="inputIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                </svg>
                <input
                  className="loginInput"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="รหัสผ่าน"
                />
              </div>

              <p>{log}</p>
              <button className="loginButton">เข้าสู่ระบบ</button>
              <p>
                ยังไม่มีบัญชี?{" "}
                <Link to="/register" className="toRegister">
                  สร้างบัญชี
                </Link>
              </p>
            </form>

            {/* <button className="toRegister">
            <Link to="/register">
              Register
            </Link>
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
