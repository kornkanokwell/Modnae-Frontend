import React, { useState, useEffect } from "react";

export function PDFViewer({ initialSrc }) {
  const [src, setSrc] = useState(initialSrc);

  useEffect(() => {
    setSrc(initialSrc);
  }, [initialSrc]);

  return (
    <>
      <iframe src={src} width="90%" height="100%"></iframe>
    </>
  );
}
