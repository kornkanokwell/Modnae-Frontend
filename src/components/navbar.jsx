import React from "react";
import "./navbar.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import mod from "../assets/mod.png";
import { useSelector } from "react-redux";
const getUser = (state) => state.user;

function hamMenu() {
  const ham = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".navbar-nav");
  if (ham.classList.contains("active")) {
    menu.style.display = "none";
    ham.classList.remove("active");
  } else {
    menu.style.display = "block";
    ham.classList.add("active");
  }
}

// เพิ่มฟังก์ชั่นเพิ่มเติมเพื่อปิดเมนูเมื่อหน้าจอขยาย
function closeMenuOnResize() {
  const menu = document.querySelector(".navbar-nav");
  const ham = document.querySelector(".navbar-toggle");
  if (window.innerWidth > 650) {
    menu.style.display = "flex";
    ham.classList.add("active");
  } else {
    menu.style.display = "none";
    ham.classList.remove("active");
  }
}

// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบการขยายหน้าจอเมื่อโหลดหน้าเว็บ
window.addEventListener("load", closeMenuOnResize);

// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบการขยายหน้าจอเมื่อปรับขนาดหน้าจอ
window.addEventListener("resize", closeMenuOnResize);

export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };

  return (
    <>
      {user ? (
        <nav className="navbar">
          <div className="first">
            <a className="logo" href="/">
              Modnae
            </a>
            <div className="navbar-toggle" onClick={hamMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/writereview" className="nav-link">
                เขียนรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/readreview" className="nav-link">
                อ่านรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menudocument" className="nav-link">
                เอกสาร
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/topic" className="nav-link">
                กระทู้
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/account" className="nav-link">
                บัญชีของฉัน
              </Link>
            </li>
            <li className="nav-item " onClick={logout}>
              <Link className="nav-link">ออกจากระบบ</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="first">
            <a className="logo" href="/">
              Modnae
            </a>
            <div className="navbar-toggle" onClick={hamMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/writereview" className="nav-link">
                เขียนรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/readreview" className="nav-link">
                อ่านรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menudocument" className="nav-link">
                เอกสาร
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/topic" className="nav-link">
                กระทู้
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                เข้าสู่ระบบ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
