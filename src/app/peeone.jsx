import React from "react";
import "./allpee.css";
import { Navbar } from "../components/navbar";
import { Subject } from "../components/subject";

export function PeeOne() {
  return (
    <>
      <Navbar />
      <div className="syllabus-center">
        <div className="syllabus-response">
          <div className="syllabus-header">
            <h1>วิชาเรียน ปี 1</h1>
            <hr />
          </div>
          <div className="syllabus-content">
            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 1</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Dw1Qial-F79k0E8SyU1nn7J5YNgPpTmX/view?usp=sharing"
                  initialText="CSS111 Exploring Computer Science"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1gd4vl6KF6wz_xWz_543-YPZYUMsv3E2w/view?usp=sharing"
                  initialText="CSS 112 Computer Programming"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1kRRdHUAWW5Kr7i6mIkl8vxUvmKTEOKvc/view?usp=sharing"
                  initialText="CSS 113 Discrete Mathematics for Computer Scientists"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Rmlgx_Y5f6dIeYH1K3X7Ikpm5h-0T2Nk/view?usp=sharing"
                  initialText="GEN 111 Man and Ethics of Living"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1jY_C4IXl0DapZwrwopiC_M2qYQFu4-4h/view?usp=sharing"
                  initialText="MTH 111 Calculus I"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1p9WNx41Y8TV50QqFdbKAcndRtNB-HdiY/view?usp=sharing"
                  initialText="LNG 120 General English"
                />
              </div>
            </div>

            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 2</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1MjC3KJzI47Y3K40JQX707ZV7x4RcG8Qb/view?usp=sharing"
                  initialText="CSS 114 Liear Algebra for Computing"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1qpPmEOVEVZ06F0iP9Mkf6OI3P0tGI2HF/view?usp=sharing"
                  initialText="CSS 131 Theory of Programming Laguages"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/15kMy_2dSwqTn8Q7H2WtrKrPvK7KKVNFn/view?usp=sharing"
                  initialText="CSS 121 Design and Analysis of data Structures and Algorithms"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1G38E1MO8FTs4zA7834bouW-SpeRRj5Gr/view?usp=sharing"
                  initialText="CSS 151 Computer Architecture and Organization"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/13QBo_SOJa_icIUlK_a66LAQGDyv64n_j/view?usp=sharing"
                  initialText="LNG 220 Academic English"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
