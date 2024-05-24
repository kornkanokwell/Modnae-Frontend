import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./subcontact.css";

export function SubContact({ initialText, isActive, onItemClick }) {
  const [text, setText] = useState(initialText);

  return (
    <>
      <div
        className={`sub-contact ${isActive ? "active" : ""}`}
        onClick={onItemClick}
      >
        <div className="select-contact-option">
          <p>{text}</p>
          <div>
            <FontAwesomeIcon icon={isActive ? faChevronLeft : faChevronRight} />
          </div>
        </div>
      </div>
    </>
  );
}
