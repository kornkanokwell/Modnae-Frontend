import React, { useState, useEffect } from "react";
import "./pdf.css";
export function PDFViewer({ initialSrc }) {
  const [src, setSrc] = useState(initialSrc);

  useEffect(() => {
    setSrc(initialSrc);
  }, [initialSrc]);

  return (
    <>
      <iframe src={src} style={{ position: "absolute" }}></iframe>
    </>
  );
}
