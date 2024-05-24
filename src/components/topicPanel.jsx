import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../app/topic.css";
import { useSelector } from "react-redux";
const getUser = (state) => ({ ...state.user });
function toggleTopic() {
  const topicBtn = document.getElementById("topic");
  const hideBtn = document.getElementById("hideBtn");
  if (topicBtn.style.display === "none") {
    topicBtn.style.display = "block";
    hideBtn.style.display = "none";
  } else {
    topicBtn.style.display = "none";
    hideBtn.style.display = "block";
  }
}
export const TopicPanel = () => {
  const user = useSelector(getUser);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  console.log(user);
  function handleChange(evt) {
    const { name, value } = evt.target;

    if (evt.target.name == "title") {
      setCount(evt.target.value.length);
    }
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    axios
      .post("https://modnae-m7lm.onrender.com/Topic", {
        email: user.email,
        title: input.title,
        descriptions: input.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <div className=" flex center mb-1">
        <button id="hideBtn" className="topic-post-btn" onClick={toggleTopic}>
          + ตั้งกระทู้
        </button>
      </div>

      <div
        className="topic-panel mb-1"
        id="topic"
        style={{ display: " none " }}
      >
        <div className=" topic-content px-2-py-2">
          <form onSubmit={handleClick}>
            <div className=" mb-1">
              <label>
                ระบุคำถามของคุณ<span className="red">*</span>
              </label>
              <input
                type="text"
                placeholder="โปรดระบุคำถาม"
                maxLength="120"
                id="question"
                className="question-input"
                name="title"
                value={input.title}
                required
                onChange={handleChange}
              />
              <p id="character-count" className="text-sm">
                จำกัด 120 ตัวอักษร ({count}/120)
              </p>
            </div>
            <div>
              <label>
                รายละเอียดคำถาม<span className="red">*</span>
              </label>
              <textarea
                type="text"
                placeholder="รายละเอียดคำถามของคุณ"
                className="textarea-field"
                name="description"
                value={input.description}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex center">
              <button
                type="submit"
                name="submit"
                role="button"
                className="send-btn"
              >
                โพสต์
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
