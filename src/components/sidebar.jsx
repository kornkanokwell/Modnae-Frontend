import React from "react";
import "./sidebar.css";
import { useState, useEffect } from "react";
import search from "../assets/search-icon.png";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import axios from "axios";

//เปิดปิด sidebar ตอน responsive
function toggleSidenav() {
  const sidenav = document.getElementById("sidenav");
  const hideBtn = document.getElementById("hide-btn");
  if (sidenav.style.display === "none") {
    sidenav.style.display = "flex";
    hideBtn.classList.remove("active");
  } else {
    sidenav.style.display = "none";
    hideBtn.classList.add("active");
  }
}

function closeMenuOnResize() {
  const sidenav = document.getElementById("sidenav");
  const hideBtn = document.getElementById("hide-btn");
  if (window.innerWidth > 720) {
    sidenav.style.display = "flex";
    hideBtn.classList.add("active");
  } else {
    sidenav.style.display = "none";
    hideBtn.classList.add("active");
  }
}
// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบการขยายหน้าจอเมื่อโหลดหน้าเว็บ
window.addEventListener("DOMContentLoaded", closeMenuOnResize);

// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบการขยายหน้าจอเมื่อปรับขนาดหน้าจอ
window.addEventListener("resize", closeMenuOnResize);
export function Sidenav({ onSelectSubject }) {
  //เปิด-ปิด dropdown วิชาต่างๆ
  const [opened, setOpened] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const sidenav = document.getElementById("sidenav");
  const toggleButton = (index) => {
    setOpened((prevOpened) => ({
      ...prevOpened,
      [index]: !prevOpened[index],
    }));
  };
  const handleItemClick = (subject) => {
    setSelectedSubject(subject);
    onSelectSubject(subject);
  };

  const allSubject = [
    {
      title: "วิชาแกน",
      list: [
        "CSS 111 Exploring Computer Science",
        "CSS 112 Computer Programming",
        "CSS 113 Discrete Mathematics for Computer Scientists",
        "CSS 114 Liear Algebra for Computing",
      ],
    },
    {
      title: "กลุ่มโครงสร้างพื้นฐานระบบ",
      list: [
        "CSS 121 Design and Analysis of data Structures and Algorithms",
        "CSS 222 Database Systems",
        "CSS 223 Operating Systems",
        "CSS 324 Network Computing",
      ],
    },
    {
      title: "กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์",
      list: [
        "CSS 131 Theory of Programming Laguages",
        "CSS 232 Object-Oriented Programming",
        "CSS 233 Web Programming I",
        "CSS 234 Web Programming II",
        "CSS 334 Software Engineering I",
        "CSS 335 Software Engineering II",
      ],
    },
    {
      title: "กลุ่มเทคโนโลยีเพื่องานประยุกต์",
      list: [
        "CSS 241 Artificial Intelligence and Machine Learning",
        "CSS 342 Data Science and Data Engineering",
      ],
    },
    {
      title: "กลุ่มฮาร์ดแวร์และสถาปัตยกรรม",
      list: ["CSS 151 Computer Architecture and Organization"],
    },
    {
      title: "กลุ่มวิชาชีพ สัมมนา และโครงงาน",
      list: [
        "CSS 291 Capstone Project",
        "CSS 391 Seminar in Applied Computer Science",
        "CSS 399 Industrial Training",
        "CSS 491 Project Proposal",
        "CSS 491 Project Study",
      ],
    },
    {
      title: "กลุ่มวิชาวิทยาการคอมพิวเตอร์",
      list: [
        "CSS 361 Mobile Application Development",
        "CSS 362 Human-Computer Interaction",
        "CSS 363 Image Processing and Computer Vision",
        "CSS 364 Parallel and Distributed Computing",
        "CSS 465 Computer Graphic",
        "CSS 466 Edge Computing and Internet of Things",
        "CSS 467 Cybersecurity",
        "CSS 468 Blockchain Technology",
      ],
    },
    {
      title: "กลุ่มวิชาวิทยาศาสตร์ข้อมูล",
      list: [
        "CSS 371 Natural Language Processing and Generation",
        "CSS 372 Data Vitualization and Communication",
        "CSS 473 Data Modeling and Computation",
        "CSS 474 Geographic Information System",
        "CSS 475 Business Intelligence",
        "CSS 476 Computational Intelligence",
        "CSS 477 Numeric Computaion",
        "CSS 478 Big Data Analytics",
      ],
    },
    {
      title: "กลุ่มวิชาธุรกิจดิจิทัล",
      list: [
        "CSS 381 Management of Maketing and Operation",
        "CSS 382 Accounting and Finance",
        "CSS 383 Digital Startup",
        "CSS 484 Enterprise Resource Planning System",
        "CSS 485 Electronic Commerce System and Digital Marketing",
        "CSS 486 Logistics and Supply Chain Management",
        "CSS 487 Digital Transformation",
      ],
    },
    {
      title: "กลุ่มวิชาเลือกทั่วไป",
      list: [
        "CSS 495 Industrial Cooperative Learning",
        "CSS 496 Special Topics I",
        "CSS 497 Special Topics II",
        "CSS 498 Special Topics III",
        "CSS 499 Special Topics IV",
      ],
    },
  ];
  const allGen = [
    {
      title: "กลุ่มวิชาสุขพลานามัย",
      list: [
        "GEN 101 Physical Education",
        "GEN 201 Art and Science of Cooking and Eating",
        "GEN 301 Holistic Health Development",
      ],
    },
    {
      title: "กลุ่มวิชาคุณธรรม จริยธรรมในกาาดำเนินชีวิต",
      list: [
        "GEN 111 Man and Ethics of Living",
        "GEN 211 The Philosospy of Sufficiency Economy",
        "GEN 212 Mind Development through Buddihism for a Fulfilling Life",
        "GEN 311 Ethics in Science-based Society",
        "GEN 411 Personaluty Development and Public Speaking",
        "GEN 412 Science and Art of Living and Working",
      ],
    },
    {
      title: "กลุ่มวิชาการเรียนรู้ตลอดชีวิต",
      list: [
        "GEN 121 Learning and Problem Solving Skills",
        "GEN 222 Thai Society, Culture and Contemporary Issues",
        "GEN 223 Diaster Preparedness",
        "GEN 224 Liveable City",
        "GEN 225 Reflective Journal Writing for Self-Improvement",
        "GEN 226 Small Things We Call Polymers",
        "GEN 321 The History of Civilization",
        "GEN 421 Integrative Socail Sciences",
      ],
    },
    {
      title: "กลุ่มวิชาการคิดอย่างมีระบบ",
      list: [
        "GEN 231 Miracle of Thinking",
        "GEN 232 Community Based Research and Innovation",
        "GEN 331 Man and Reasoning",
        "GEN 332 Science Storytelling",
      ],
    },
    {
      title: "กลุ่มวิชาคุณค่าและความงาม",
      list: [
        "GEN 241 Beauty of Life",
        "GEN 242 Chinese Philosophy and Ways of Life",
        "GEN 341 Thai Indigenous Knowledge",
        "GEN 441 Culture and Excursion",
      ],
    },
    {
      title: "กลุ่มวิชาเทคโนโลยี นวัตกรรมและการจัดการ",
      list: [
        "GEN 351 Modern Management and Leadership",
        "GEN 352 Technology and Innovation for Sustainable Development",
        "GEN 353 Managerial Psychology",
      ],
    },
  ];
  const allLNG = [
    {
      title: "กลุ่มวิชาภาษาและการสื่อสาร",
      list: [
        "LNG 120 General English",
        "LNG 220 Academic English",
        "LNG 223 English for Workplace Communication",
        "LNG 224 Oral Communication",
        "LNG 250 Thai for Communication",
        "LNG 251 Speaking Skills in Thai",
        "LNG 252 Writing Skills in Thai",
        "LNG 328 Basic Translation",
        "LNG 329 English through Independent Learning",
        "LNG 330 Experience-based English Learning",
        "LNG 332 Business English",
        "LNG 333 English for Community Work",
        "LNG 421 Critical Reading",
        "LNG 422 Reading Appreciation",
        "LNG 425 Intercultural Communication",
      ],
    },
  ];
  const allMTH = [
    {
      title: "กลุ่มวิชาคณิตศาสตร์",
      list: ["MTH 111 Calculus I"],
    },
  ];
  const allNST = [
    {
      title: "กลุ่มวิชาวิทยาศาสตร์ทั่วไป",
      list: [
        "NST 311 Computer Science for Contemporary Science and Technology",
      ],
    },
  ];
  const allSTD = [
    {
      title: "กลุ่มวิชาสถิติและวิทยาการข้อมูล",
      list: ["STD 214 Probability and Statics"],
    },
  ];
  const [view, setView] = useState("default");
  const [searchSubject, setSearchSubject] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const handleSearchClick = () => {
    setView("search");
    console.log(searchSubject);
    handleSearch();
  };

  const handleChangeSearch = (event) => {
    setSearchSubject(event.target.value);
  };

  const handleSearch = () => {
    axios
      .post("https://modnae-m7lm.onrender.com/Search", { searchSubject })
      .then((response) => {
        setResultSearch(response.data);
        console.log(resultSearch);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  document.addEventListener("click", (event) => {
    const mainElement = document.getElementById("sidenav");

    if (!mainElement.contains(event.target)) {
      setView("default");
    }
  });

  return (
    <>
      <nav className="sidebar" id="sidebar">
        <div className="side-w-btn">
          <main className="sidenav " id="sidenav">
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="ค้นหาวิชาเรียน"
                  aria-label="Search"
                  value={searchSubject}
                  onChange={handleChangeSearch}
                />
                <button
                  type="submit"
                  onClick={handleSearchClick}
                  className="searchButton"
                >
                  <img src={search}></img>
                </button>
              </div>
            </div>
            {view === "default" ? (
              <div className="btn-wrapper">
                <ul className="main-buttons">
                  <li className="categories">
                    <i className="fa "></i>
                    CSS
                    <ul className="hidden choice-wrapper">
                      {allSubject.map((item, index) => (
                        <li
                          key={index}
                          title={item.title}
                          className="subject-categories"
                          onClick={() => toggleButton(index)}
                        >
                          {item.title}
                          {opened[index] && (
                            <ul className="sub-hidden">
                              {item.list.map((subject, subIndex) => (
                                <li
                                  key={`${index}-${subIndex}`}
                                  onClick={() => handleItemClick(subject)}
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="categories">
                    <i className="fa "></i>
                    GEN
                    <ul className="hidden choice-wrapper">
                      {allGen.map((item, index) => (
                        <li
                          key={index}
                          title={item.title}
                          className="subject-categories"
                          onClick={() => toggleButton(index)}
                        >
                          {item.title}
                          {opened[index] && (
                            <ul className="sub-hidden">
                              {item.list.map((subject, subIndex) => (
                                <li
                                  key={`${index}-${subIndex}`}
                                  onClick={() => handleItemClick(subject)}
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="categories">
                    <i className="fa "></i>
                    LNG
                    <ul className="hidden choice-wrapper">
                      {allLNG.map((item, index) => (
                        <li
                          key={index}
                          title={item.title}
                          className="subject-categories"
                          onClick={() => toggleButton(index)}
                        >
                          {item.title}
                          {opened[index] && (
                            <ul className="sub-hidden">
                              {item.list.map((subject, subIndex) => (
                                <li
                                  key={`${index}-${subIndex}`}
                                  onClick={() => handleItemClick(subject)}
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="categories">
                    <i className="fa "></i>
                    MTH
                    <ul className="hidden choice-wrapper">
                      {allMTH.map((item, index) => (
                        <li
                          key={index}
                          title={item.title}
                          className="subject-categories"
                          onClick={() => toggleButton(index)}
                        >
                          {item.title}
                          {opened[index] && (
                            <ul className="sub-hidden">
                              {item.list.map((subject, subIndex) => (
                                <li
                                  key={`${index}-${subIndex}`}
                                  onClick={() => handleItemClick(subject)}
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="categories">
                    <i className="fa "></i>
                    NST
                    <ul className="hidden choice-wrapper">
                      {allNST.map((item, index) => (
                        <li
                          key={index}
                          title={item.title}
                          className="subject-categories"
                          onClick={() => toggleButton(index)}
                        >
                          {item.title}
                          {opened[index] && (
                            <ul className="sub-hidden">
                              {item.list.map((subject, subIndex) => (
                                <li
                                  key={`${index}-${subIndex}`}
                                  onClick={() => handleItemClick(subject)}
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="categories">
                    <i className="fa "></i>
                    STD
                    <ul className="hidden choice-wrapper">
                      {allSTD.map((item, index) => (
                        <li
                          key={index}
                          title={item.title}
                          className="subject-categories"
                          onClick={() => toggleButton(index)}
                        >
                          {item.title}
                          {opened[index] && (
                            <ul className="sub-hidden">
                              {item.list.map((subject, subIndex) => (
                                <li
                                  key={`${index}-${subIndex}`}
                                  onClick={() => handleItemClick(subject)}
                                >
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className={
                  resultSearch && resultSearch.length > 0
                    ? "choice-wrapperNew"
                    : "notFound"
                }
              >
                {resultSearch && resultSearch.length > 0 ? (
                  resultSearch.map((resultSearch, index) => (
                    <li
                      className="searchSubject"
                      onClick={() => handleItemClick(resultSearch.name)}
                      key={index}
                    >
                      {resultSearch.name}
                    </li>
                  ))
                ) : (
                  <p>ไม่พบวิชาที่ค้นหา</p>
                )}
              </div>
            )}
          </main>
          <button onClick={toggleSidenav} id="hide-btn" className="hide-btn">
            <IoChevronForwardSharp />
          </button>
        </div>
      </nav>
    </>
  );
}
