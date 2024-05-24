import React from "react";
import "./allpee.css";
import { Navbar } from "../components/navbar";
import { Subject } from "../components/subject";
import moderr from "../assets/moderror.png";
export function PeeFour() {
  return (
    <>
      <Navbar />
      <div className="syllabus-center">
        <div className="syllabus-response">
          <div className="syllabus-header">
            <h1>วิชาเรียน ปี 4</h1>
            <hr />
          </div>
          <div className="syllabus-content">
            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 1</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1QS5oYMHfzYj7lZLbavbSwKD6Ib7XLtEG/view?usp=sharing"
                  initialText="CSS 474 Geographic Information System"
                />
              </div>
            </div>

            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 2</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1kP8patdQhVD8mTNa8NkqGteJjUgWh3lv/view?usp=sharing"
                  initialText="CSS 383 Digital Startup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
