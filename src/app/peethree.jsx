import React from "react";
import "./allpee.css";
import { Navbar } from "../components/navbar";
import { Subject } from "../components/subject";
import moderr from "../assets/moderror.png";

export function PeeThree() {
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
                  initialLink="https://drive.google.com/file/d/1y9gywGEQXrgre1ciCaizOzUWn3_AE_8g/view?usp=sharing"
                  initialText="CSS 361 Mobile Application Development"
                />

                <Subject
                  initialLink="https://drive.google.com/file/d/19u4qxf4z6mFRFDKttJf_nY47qKcm_AW7/view?usp=sharing"
                  initialText="CSS 362 Human-Computer Interaction"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1CDlGZ1JqJeBFdVCtV2MRYVAvKk6OQ6Lm/view?usp=sharing"
                  initialText="CSS 466 Edge Computing and Internet of Things"
                />
              </div>
            </div>

            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 2</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1a9gZIJfqoaAIV7htap0l20xQWDTstXhz/view?usp=sharing"
                  initialText="CSS 363 Image Processing and Computer Vision"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1RsOlHaUOjoO2ynelJN-b-33ow1WdHnO5/view?usp=sharing"
                  initialText="CSS 372 Data Vitualization and Communication"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1ecKUWFmI7m_ckCwLxKm45llydk35ZL4E/view?usp=sharing"
                  initialText="CSS 382 Accounting and Finance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
