import React from "react";
import mod from "../assets/mod.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import axios from "axios";
const getUser = (state) => ({ ...state.user });
import "./coursesyllabus.css";
import "./account.css";
export const Account = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setLog] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let currpass = e.target.elements["current_password"].value;
    let pass_new = e.target.elements["new_password"].value;
    if (pass_new === e.target.elements["confirm_password"].value) {
      axios
        .post("https://modnae-m7lm.onrender.com/api/updateUser", {
          email: user.email,
          password: currpass,
          newpassword: pass_new,
        })
        .then((response) => {
          setLog("เปลี่ยนรหัสผ่านสำเร็จ");
          // console.log(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.data === "Password invalid") {
            setLog("รหัสผ่านเก่าไม่ถูกต้อง");
          }
        });
    } else if (pass_new != e.target.elements["confirm_password"].value) {
      setLog("รหัสผ่านใหม่ไม่ตรงกัน");
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };
  // console.log("account user", user);
  return (
    <>
      <Navbar />
      <main className="account-wrapper">
        <div className="account-container row">
          {/* <div className="left-info">
            <div className="h-100">
              <div className="info-wrapper">
                <img src={mod} alt="" className="modProfile-big" />
                <p className="mb-05 mt-1">รหัสประจำตัว</p>
                <h4 className="mb-05">{user.username}</h4>
              </div>
              {/* <div className="logout" onClick={logout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4-h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>

                <Link className="logout-btn">ออกจากระบบ</Link>
              </div> 
            </div>
          </div> */}
          <div className="flex-col right-info">
            <div className="right-info-wrapper">
              <h2>ตั้งค่าบัญชี</h2>
              <div className="row gap-5 text-field">
                <div className="flex-col w-full">
                  <label>รหัสประจำตัว</label>
                  <p className="text-info ">{user.username}</p>
                </div>
                <div className="flex-col w-full">
                  <label>อีเมล</label>
                  <p className="text-info ">{user.email}</p>
                </div>
              </div>
              <div className="row gap-5 text-field">
                <div className="flex-col w-full">
                  <label>ชื่อจริง</label>
                  <p className="text-info">{user.firstname}</p>
                </div>
                <div className="flex-col  w-full">
                  <label>นามสกุล</label>
                  <p className="text-info">{user.lastname}</p>
                </div>
              </div>
              <form onSubmit={HandleSubmit}>
                <div className="flex-col text-field">
                  <label>รหัสผ่านเก่า</label>
                  <input
                    type="password"
                    placeholder="รหัสผ่านเก่า"
                    className="text-info-input"
                    name="current_password"
                    required
                  />
                </div>
                <div className="flex-col text-field">
                  <label>รหัสผ่านใหม่</label>
                  <input
                    type="password"
                    placeholder="รหัสผ่านใหม่"
                    className="text-info-input"
                    name="new_password"
                    required
                  />
                </div>
                <div className="flex-col text-field">
                  <label>ยืนยันรหัสผ่าน</label>
                  <input
                    type="password"
                    placeholder="ยืนยันรหัสผ่าน"
                    className="text-info-input"
                    name="confirm_password"
                    required
                  />
                </div>
                <p className="p0-m0 red">{log}</p>
                <div className="pt-02 res-center pb-03">
                  <button className="send-btn flex" type="submit" name="submit">
                    บันทึก
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
