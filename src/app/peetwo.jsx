import React from "react";
import "./allpee.css";
import { Navbar } from "../components/navbar";
import { Subject } from "../components/subject";

export function PeeTwo() {
  return (
    <>
      <Navbar />
      <div className="syllabus-center">
        <div className="syllabus-response">
          <div className="syllabus-header">
            <h1>วิชาเรียน ปี 2</h1>
            <hr />
          </div>
          <div className="syllabus-content">
            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 1</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/15VUq_LsgWjAInPKWvsg82HiLu9Cq0Pde/view?usp=sharing"
                  initialText="LNG 223 English for Workplace Communication"
                />
              </div>
            </div>

            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 2</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1awJyKxr1Aq1kMQC63lO3cqb_hZ76zE2i/view?usp=sharing"
                  initialText="STD 214 Probability and Statics"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1oJg3ojzaPNjEKmImEbCUtTJPesGiwpyg/view?usp=sharing"
                  initialText="CSS 234 Web Programming II"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
