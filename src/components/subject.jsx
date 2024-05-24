import { useState, useEffect } from "react";
import "./subject.css";

export function Subject({ initialLink, initialText }) {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setLink(initialLink);
    setText(initialText);
  }, [initialLink, initialText]);
  return (
    <>
      <li>
        <a href={link}>{text}</a>
      </li>
      <hr />
    </>
  );
}
