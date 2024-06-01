import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import "./writereview.css";
import "../components/sendBtn.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  // function which is called when
  // button is clicked
  const notify = () => {
    // Calling toast method by passing string
    toast("โพสต์รีวิวสำเร็จ");
  };
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
    event.preventDefault();

    axios
      .post("https://modnae-m7lm.onrender.com/WriteReview", {
        email: user.email,
        subject: input.subject,
        year: input.year,
        teacher: input.teacher,
        descriptions: input.descriptions,
      })
      .then((response) => {
        window.location.href = "/readreview";
        notify();
        // console.log(response.data);
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
                      placeholder="ระบุปีการศึกษา (256X)"
                      onChange={handleChange}
                      value={input.year}
                      required
                    ></input>
                  </span>
                </p>
                <p>
                  <b>อาจารย์ผู้สอน </b>
                  <span>
                    {/* <input
                      type="text"
                      className="subject-name"
                      placeholder="กรุณาระบุผู้สอน"
                      name="teacher"
                      onChange={handleChange}
                      value={input.teacher}
                      required
                    /> */}
                    <select
                      className="subject-name"
                      name="teacher"
                      onChange={handleChange}
                      value={input.teacher}
                      required
                    >
                      <option disabled selected value="">
                        กรุณาระบุผู้สอน
                      </option>
                      <option value="Dummy teacher">Dummy teacher</option>
                      <option value="ผศ.ดร.วิบูลศักดิ์ วัฒายุ">
                        ผศ.ดร.วิบูลศักดิ์ วัฒายุ
                      </option>
                      <option value="ดร.ศุวิล ชมชัยยา">ดร.ศุวิล ชมชัยยา</option>
                      <option value="รศ.ชูเกียรติ วรสุชีพ">
                        รศ.ชูเกียรติ วรสุชีพ
                      </option>
                      <option value="ดร.วรินทร์ วัฒนพรพรหม">
                        ดร.วรินทร์ วัฒนพรพรหม
                      </option>
                      <option value="ดร.ปริเวท วรรณโกวิท">
                        ดร.ปริเวท วรรณโกวิท
                      </option>
                      <option value="ดร.วิธวินท์ สุสุทธิ">
                        ดร.วิธวินท์ สุสุทธิ
                      </option>
                      <option value="ดร.ฐิตาภรณ์ กนกรัตน">
                        ดร.ฐิตาภรณ์ กนกรัตน
                      </option>
                      <option value="ดร.พรรณราย ศิริเจริญ">
                        ดร.พรรณราย ศิริเจริญ
                      </option>
                      <option value="อาจารย์วิริยะ ไตรปัญญาศาสตร์">
                        อาจารย์วิริยะ ไตรปัญญาศาสตร์
                      </option>
                      <option value="รศ.ดร.วรสิทธิ์ ชูชัยวัฒนา">
                        รศ.ดร.วรสิทธิ์ ชูชัยวัฒนา
                      </option>
                      <option value="พ.ต.ท.วงศ์ยศ เกิดศรี">
                        พ.ต.ท.วงศ์ยศ เกิดศรี
                      </option>
                    </select>
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
