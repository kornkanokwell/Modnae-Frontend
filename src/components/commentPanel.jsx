import React, { useEffect, useState } from "react";
import "../app/topic.css";
import moderr from "../assets/moderror.png";
import modnoi from "../assets/mod.png";
import axios from "axios";
import { FaCommentAlt } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useSelector } from "react-redux";
const getUser = (state) => ({ ...state.user });

export function CommentPanel() {
  const user = useSelector(getUser);
  const [topics, setTopics] = useState([]);
  const [opened, setOpened] = useState({});
  const [comments, setComments] = useState([]);
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

    if (user.email) {
      fetchData();
    }
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
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleLike = async (topicId) => {
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
                  <button className="flex-row comment-btn">
                    <div
                      className="center"
                      onClick={() => handleLike(topic._id)}
                    >
                      {topic.likedByUser ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ecb96a"
                          className="h-1-w-1"
                        >
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-1-w-1"
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
                    <FaCommentAlt className="comment-btn-icon" />
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
                          />
                          <button type="submit" className="send-comment-btn">
                            <TbSend className="send-comment-btn-icon" />
                          </button>
                        </div>
                      </div>
                    </form>
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
