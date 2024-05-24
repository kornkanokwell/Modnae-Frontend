import "./calendar.css";
import { useState } from "react";
import { PDFViewer } from "../components/pdfview";
import { Navbar } from "../components/navbar";
import PDF from "../assets/Calendar2024-2567_TH.pdf";

export function Calendar() {
  const [pdfSrc, setPdfSrc] = useState(PDF);

  return (
    <>
      <Navbar />
      <div className="pdf-iframe">
        <h1>ปฏิทินมหาวิทยาลัย</h1>
        <div className="top-iframe">
          <h4 className="calendar-header">ปฏิทินปีการศึกษา 2567</h4>
          <a href={PDF} download="ปฏิทินปีการศึกษา_2566">
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
