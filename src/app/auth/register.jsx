import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/navbar";
import "./login.css";
import { Link } from "react-router-dom";
import regimg from "../../assets/reg.png";
export function Register() {
  const [value, setValue] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    Cpassword: "",
  });
  const [log, setLog] = useState("");
  const [isKmutt, setIsKmutt] = useState(false);
  const allowedDomains = ["mail.kmutt.ac.th"];

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    const email = e.target.value;
    const regex = /@(.+)$/;
    const domain = email.match(regex)[1];

    if (!allowedDomains.includes(domain)) {
      setIsKmutt(false);
    } else {
      setLog(""); // Clear error message
      setIsKmutt(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.username || !value.firstname || !value.lastname) {
      setLog("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (!isKmutt) {
      setLog("อีเมลของท่านต้องลงท้ายด้วย @mail.kmutt.ac.th");
    } else if (!value.password) {
      setLog("กรุณาตั้งรหัสผ่าน");
    } else if (value.password != value.Cpassword) {
      setLog("รหัสผ่านไม่ตรงกัน");
    } else {
      axios
        .post("https://modnae-m7lm.onrender.com/api/register", value)
        .then((response) => {
          console.log(response);
          setLog("กรุณาตรวจสอบกล่องจดหมายเข้าในอีเมลของคุณ");
        })
        .catch((error) => {
          console.error(error);
          setLog("บัญชีนี้ถูกลงทะเบียนแล้ว");
        });
    }
  };
  return (
    <>
      <div className="loginCenterRegister">
        <div className="loginContentRegister">
          <div className="loginMain">
            <h1 className="headRegister">สร้างบัญชี</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="allName">
                <div className="inputContainerName">
                  <svg
                    className="inputIconUser"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <input
                    className="inputName"
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    placeholder="ชื่อจริง"
                  />
                </div>

                <div className="inputContainerLast">
                  <input
                    className="inputLast"
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    placeholder="นามสกุล"
                  />
                </div>
              </div>

              <div className="inputContainer">
                <svg
                  className="inputIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                <input
                  className="loginInput"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="รหัสประจำตัว"
                />
              </div>

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
                  placeholder="email@mail.kmutt.ac.th"
                  onChange={handleChange}
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

              <div className="inputContainer">
                <svg
                  className="inputIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                </svg>
                <input
                  className="loginInput"
                  type="password"
                  name="Cpassword"
                  onChange={handleChange}
                  placeholder="ยืนยันรหัสผ่าน"
                />
              </div>

              <p className="p0-m0">{log}</p>
              <button className="loginButton">สร้างบัญชี</button>
              <p>
                มีบัญชีอยู่แล้ว?{" "}
                <Link to="/login" className="toRegister">
                  เข้าสู่ระบบ
                </Link>
              </p>
            </form>
          </div>

          <div className="registerPicture">
            <img src={regimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
