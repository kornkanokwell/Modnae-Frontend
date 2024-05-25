import React, { useEffect, useState } from "react";
import "../app/topic.css";
import moderr from "../assets/moderror.png";
import modnoi from "../assets/mod.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const getUser = (state) => ({ ...state.user });

export function CommentPanel() {
  const user = useSelector(getUser);
  const [topics, setTopics] = useState([]);
  const [opened, setOpened] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const toggleButton = (index) => {
    setOpened((prevOpened) => ({
      ...prevOpened,
      [index]: !prevOpened[index],
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://modnae-m7lm.onrender.com/ReadTopic"
        );
        const reversedTopics = response.data.reverse();
        const topicsWithComments = await Promise.all(
          reversedTopics.map(async (topic) => {
            if (user.email) {
              const likeStatusResponse = await axios.get(
                `https://modnae-m7lm.onrender.com/Topic/like-status/${topic._id}?email=${user.email}`
              );
              return {
                ...topic,
                comments: topic.comments || [],
                totalComments: topic.comments ? topic.comments.length : 0,
                likes: topic.likes || 0,
                likedByUser: likeStatusResponse.data.likedByUser,
              };
            } else {
              return {
                ...topic,
                comments: topic.comments || [],
                totalComments: topic.comments ? topic.comments.length : 0,
                likes: topic.likes || 0,
                likedByUser: false,
              };
            }
          })
        );

        setTopics(topicsWithComments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user.email]);

  const thaiDateTimeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    calendar: "buddhist",
    numberingSystem: "latn",
    month: "short",
    day: "numeric",
  };

  const submitComment = async (e, topicId) => {
    if (!user.email) {
      alert("กรุณาเข้าสู่ระบบ");
      navigate("/login");
    }
    e.preventDefault();
    const commentContent = e.target.comment.value;
    try {
      const response = await axios.post(
        `https://modnae-m7lm.onrender.com/Topic/${topicId}/comment`,
        {
          email: user.email,
          content: commentContent,
        }
      );

      setComments([...comments, response.data.comments[0]]);
      window.location.href = "/topic";
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleLike = async (topicId) => {
    if (!user.email) {
      alert("กรุณาเข้าสู่ระบบ");
      navigate("/login");
    }
    try {
      const response = await axios.post(
        `https://modnae-m7lm.onrender.com/Topic/like/${topicId}`,
        {
          email: user.email,
        }
      );

      setTopics((prevTopics) =>
        prevTopics.map((topic) =>
          topic._id === topicId
            ? {
                ...topic,
                likes: response.data.likes,
                likedByUser: !topic.likedByUser,
              }
            : topic
        )
      );
    } catch (error) {
      console.error("Error liking topic:", error);
    }
  };

  return (
    <>
      {topics.length > 0 ? (
        <div>
          {topics.map((topic, topicIndex, topicpanel) => (
            <main
              key={topic._id}
              className="flex-col topic-content px-2-py-2 mb-05"
            >
              <div>
                <div className="flex-row center flex-between mb-05">
                  <div className="flex-row center ">
                    <img src={modnoi} className="modProfile" />
                    <p className="ml-05">มดสงสัย</p>
                    <p className="text-sm text-gray">
                      •{" "}
                      {new Date(topic.createdAt).toLocaleDateString(
                        "th-TH",
                        thaiDateTimeOptions
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="topic-question">{topic.title}</h3>
                  <p className="mb-1">{topic.descriptions}</p>
                </div>
                <div className="flex-row gap-3">
                  <button className="flex-row comment-btn-like">
                    <div
                      className="center"
                      onClick={() => handleLike(topic._id)}
                    >
                      {topic.likedByUser ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ecb96a"
                          className="w21h21"
                        >
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#151515"
                          className="w21h21"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="p0-m0 ">{topic.likes} ถูกใจ</div>
                  </button>

                  <button
                    onClick={() => toggleButton(topicIndex)}
                    className="comment-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#151515"
                      class="comment-btn-icon w17h17"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="p0-m0">{topic.totalComments} ความคิดเห็น</p>
                  </button>
                </div>

                {opened[topicIndex] && (
                  <div key={topicIndex} className="comment">
                    <hr />
                    {topic.comments.map((comment, commentIndex) => (
                      <div key={comment._id}>
                        <div className="mb-1">
                          <div className="flex-row flex-between center p-0 m-0 mt-1">
                            <div className="flex-row center">
                              <img src={modnoi} className="modProfile" />
                              <div>
                                <p className="ml-05">
                                  ความคิดเห็นที่ {commentIndex + 1}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-gray">
                              {new Date(comment.createdAt).toLocaleDateString(
                                "th-TH",
                                thaiDateTimeOptions
                              )}
                            </p>
                          </div>
                          <p className="ml-3">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                    {user.email ? (
                      <form onSubmit={(e) => submitComment(e, topic._id)}>
                        <div>
                          <div className="flex-row ">
                            <img src={modnoi} className="modProfile" />
                            <div>
                              <label className="ml-05">แสดงความคิดเห็น</label>
                            </div>
                          </div>
                          <div className="align-center mt-1 ml-3">
                            <textarea
                              type="text"
                              placeholder="แสดงความคิดเห็น"
                              className="comment-field"
                              name="comment"
                              id="user_input"
                            />

                            <button type="submit" className="send-comment-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#151515"
                                className="send-comment-btn-icon z-10"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </main>
          ))}
        </div>
      ) : (
        <div className="mod-error flex-row center">
          <p className="err-text">ยังไม่มีกระทู้คำถาม</p>
          <img src={moderr} alt="error" className="moderr" />
        </div>
      )}
    </>
  );
}
