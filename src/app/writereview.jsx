import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import "./writereview.css";
import "../components/sendBtn.css";
import axios from "axios";
import { useSelector } from "react-redux";
const getUser = (state) => ({ ...state.user });
export function WriteReview() {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [input, setInput] = useState({
    subject: "",
    year: "",
    teacher: "",
    descriptions: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  useEffect(() => {
    handleChange({ target: { name: "subject", value: selectedSubject } });
  }, [selectedSubject]);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  function handleClick(event) {
    axios
      .post("https://modnae-m7lm.onrender.com/WriteReview", {
        email: user.email,
        subject: input.subject,
        year: input.year,
        teacher: input.teacher,
        descriptions: input.descriptions,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Navbar />

      <div className="writereview-container">
        <Sidenav onSelectSubject={handleSelectSubject} />
        {selectedSubject != "" ? (
          <div className="writereview-wrapper">
            <form onSubmit={handleClick}>
              <div className="header-container">
                <p className="header-container-p">
                  <b>คุณกำลังเขียนรีวิวในวิชา </b>
                  <span>
                    <b className="subject-name">
                      {selectedSubject !== ""
                        ? selectedSubject
                        : "กรุณาเลือกวิชา"}
                    </b>
                  </span>
                </p>
              </div>

              <div className="write-review-container">
                <p>
                  <b>ปีการศึกษา </b>
                  <span>
                    <input
                      name="year"
                      className="subject-name"
                      placeholder="ระบุปีการศึกษา"
                      onChange={handleChange}
                      value={input.year}
                      required
                    ></input>
                  </span>
                </p>
                <p>
                  <b>อาจารย์ผู้สอน </b>
                  <span>
                    <input
                      type="text"
                      className="subject-name"
                      placeholder="กรุณาระบุผู้สอน"
                      name="teacher"
                      onChange={handleChange}
                      value={input.teacher}
                      required
                    />
                    {/* <select className="subject-name" defaultChecked="">
                    <option value="none" selected disabled hidden>
                      กรุณาระบุผู้สอน
                    </option>
                    <option>ผศ.ดร.วิบูลศักดิ์ วัฒายุ</option>
                    <option>ดร.ศุวิล ชมชัยยา</option>
                    <option>รศ.ชูเกียรติ วรสุชีพ</option>
                    <option>ดร.วรินทร์ วัฒนพรพรหม</option>
                    <option>ดร.ปริเวท วรรณโกวิท</option>
                    <option>ดร.วิธวินท์ สุสุทธิ</option>
                    <option>ดร.ฐิตาภรณ์ กนกรัตน</option>
                  </select> */}
                  </span>
                </p>
                <p>
                  <b>คำรีวิว</b>
                </p>
                <textarea
                  placeholder="รีวิว"
                  className="textarea-field"
                  name="descriptions"
                  onChange={handleChange}
                  value={input.descriptions}
                  required
                ></textarea>
                <br />
                <div className="flex center">
                  <button className="send-btn flex" type="submit" name="submit">
                    ยืนยัน
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="writereview-wrapper">
            <form onSubmit={handleClick}>
              <div className="header-container">
                <p className="header-container-p">
                  <b>คุณกำลังเขียนรีวิวในวิชา </b>
                  <span>
                    <b className="subject-name">
                      {selectedSubject !== ""
                        ? selectedSubject
                        : "กรุณาเลือกวิชา"}
                    </b>
                  </span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
