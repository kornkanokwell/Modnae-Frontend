import React, { useState, useEffect } from "react";

export function PDFViewer({ initialSrc }) {
  const [src, setSrc] = useState(initialSrc);

  useEffect(() => {
    setSrc(initialSrc);
  }, [initialSrc]);

  return (
    <>
      <iframe src={src} width="100%" height="900px"></iframe>
    </>
  );
}
