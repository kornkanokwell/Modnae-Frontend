import "./coursebook.css";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { PDFViewer } from "../components/pdfview";
import PDF2565 from "../assets/Coursebook2565.pdf";
import PDF2560 from "../assets/Coursebook2560.pdf";

export function CourseBook() {
  const [pdfSrc, setPdfSrc] = useState(PDF2565);
  const [selectedYear, setSelectedYear] = useState("");
  const [textDownload, setTextDownload] = useState("");

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    if (year === "2565") {
      setPdfSrc(PDF2565);
      setTextDownload("เล่มหลักสูตรปี_2565");
    } else if (year === "2560") {
      setPdfSrc(PDF2560);
      setTextDownload("เล่มหลักสูตรปี_2560");
    }
  };

  return (
    <>
      <Navbar />
      <div className="pdf-iframe">
        <h1 className="calendar-header mb-1">เอกสารหลักสูตร</h1>
        <div className="top-iframe">
          <div className="select-button">
            <h4 className="mb-1">ปีการศึกษา</h4>
            <select
              id="academicYear"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2565">2565</option>
              <option value="2560">2560</option>
            </select>
          </div>
          <a href={pdfSrc} download={textDownload}>
            <button>ดาวน์โหลดเอกสาร</button>
          </a>
        </div>
        <div className="set-iframe">
          <PDFViewer initialSrc={pdfSrc} />
        </div>
      </div>
    </>
  );
}
