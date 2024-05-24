import "./contact.css";
import { Navbar } from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SubContact } from "../components/subcontact";
import { useState } from "react";
import { University } from "../components/university";
import { Gen } from "../components/gen";
import { Sola } from "../components/sola";
import { Health } from "../components/health";
import { Office } from "../components/office";
import { Sinfo } from "../components/sinfo";
import { Faculty } from "../components/faculty";
import { Activity } from "../components/activity";

export function Contact() {
  const [activeItem, setActiveItem] = useState(0);
  const [content, setContent] = useState(University);

  const handleItemClick = (index) => {
    const showcontent = index;
    setActiveItem(showcontent);
    if (window.innerWidth < 600) {
      const setActiveItem = "";
    }
    if (showcontent == 0) {
      setContent(University);
    } else if (showcontent == 1) {
      setContent(Sinfo);
    } else if (showcontent == 2) {
      setContent(Office);
    } else if (showcontent == 3) {
      setContent(Gen);
    } else if (showcontent == 4) {
      setContent(Sola);
    } else if (showcontent == 5) {
      setContent(Faculty);
    } else if (showcontent == 6) {
      setContent(Health);
    } else if (showcontent == 7) {
      setContent(Activity);
    }
  };

  return (
    <>
      <Navbar />
      <main className="contact-center">
        <div className="contact-content">
          <div className="contact-menu">
            <div className="response-menu">
              <SubContact
                initialText={"ติดต่อมหาวิทยาลัย"}
                isActive={activeItem === 0}
                onItemClick={() => handleItemClick(0)}
              />
              {activeItem === 0 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
            <div className="response-menu">
              <SubContact
                initialText={"ระบบสารสนเทศเพื่อการบริหารการศึกษา (Sinfo)"}
                isActive={activeItem === 1}
                onItemClick={() => handleItemClick(1)}
              />
              {activeItem === 1 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
            <div className="response-menu">
              <SubContact
                initialText={"สำนักงานอธิการบดี"}
                isActive={activeItem === 2}
                onItemClick={() => handleItemClick(2)}
              />
              {activeItem === 2 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
            <div className="response-menu">
              <SubContact
                initialText={"สำนักงานวิชาศึกษาทั่วไป (GEN)"}
                isActive={activeItem === 3}
                onItemClick={() => handleItemClick(3)}
              />
              {activeItem === 3 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
            <div className="response-menu">
              <SubContact
                initialText={"คณะศิลปศาสตร์ (SoLA)"}
                isActive={activeItem === 4}
                onItemClick={() => handleItemClick(4)}
              />
              {activeItem === 4 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
            <div className="response-menu">
              <SubContact
                initialText={"คณะวิทยาศาสตร์และภาควิชาคณิตศาสตร์"}
                isActive={activeItem === 5}
                onItemClick={() => handleItemClick(5)}
              />
              {activeItem === 5 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
            <div className="response-menu">
              <SubContact
                initialText={"หน่วยงานด้านสุขภาพ"}
                isActive={activeItem === 6}
                onItemClick={() => handleItemClick(6)}
              />
              {activeItem === 6 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>

            <div className="response-menu">
              <SubContact
                initialText={"สำนักงานกิจการนักศึกษา"}
                isActive={activeItem === 7}
                onItemClick={() => handleItemClick(7)}
              />
              {activeItem === 7 && (
                <div className="hide-content">
                  <div>{content}</div>
                </div>
              )}
            </div>
          </div>
          <div className="contact-detail">
            <div className="text-wrap">{content}</div>
          </div>
        </div>
      </main>
    </>
  );
}
