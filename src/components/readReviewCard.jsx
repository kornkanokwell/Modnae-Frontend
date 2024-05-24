import React from "react";
import { useState, useEffect } from "react";
import "../app/readreview.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewCard({
  subject,
  year,
  teacher,
  description,
  selectedSubject,
  id,
  reviewId,
  initialLikes,
  userEmail,
}) {
  const [showMore, setShowMore] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [likedByUser, setLikedByUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://modnae-m7lm.onrender.com/Readreview/like-status/${reviewId}?email=${userEmail}`
      )
      .then((response) => {
        setLikedByUser(response.data.likedByUser);
      })
      .catch((error) => console.error("Error fetching like status:", error));
  }, [reviewId, userEmail]);

  const handleLike = () => {
    axios
      .post(`https://modnae-m7lm.onrender.com/Readreview/like/${reviewId}`, {
        email: userEmail,
      })
      .then((response) => {
        setLikes(response.data.likes);
        setLikedByUser(!likedByUser); // Toggle the likedByUser state
      })
      .catch((error) => console.error("Error liking review:", error));
    if (!userEmail) {
      alert("please login");
      navigate("/login");
    }
  };

  return (
    <div className="readreview-wrapper">
      {id === "teacher" ? (
        <div className="review-container gold-frame">
          <div className="row between">
            <div className="identify-res">
              <p className="m-0-p-0">อาจารย์</p>
              <div className="like center flex-row align-center">
                <div className="m0-p0" onClick={handleLike}>
                  {likedByUser ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ecb96a"
                      className="w-4-h-4 "
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
                      className="w-4-h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  )}
                </div>
                <p className="p0-m0">{likes}</p>
              </div>
            </div>
            <div>
              <p>
                <b>วิชา</b>
                <span>
                  <b className="subject-name">{subject}</b>
                </span>
              </p>
              <p>
                <b>ปีการศึกษา</b>
                <span>
                  <b className="subject-name">{year}</b>
                </span>
              </p>
              <p>
                <b>ผู้สอน</b>
                <span>
                  <b className="subject-name">{teacher}</b>
                </span>
              </p>
            </div>
          </div>

          {showMore ? (
            <p className="review-text">
              {description}
              <button
                className="showbtn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
              </button>
            </p>
          ) : description.length > 450 ? (
            <p className="review-text">
              {description.substring(0, 400)}
              <button
                className="showbtn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
              </button>
            </p>
          ) : (
            <p className="review-text">{description}</p>
          )}
        </div>
      ) : (
        <div className="review-container">
          <div className="row between">
            <div className="m0-p0 like-std">
              <div className=" center flex-row">
                <div className="m0-p0" onClick={handleLike}>
                  {likedByUser ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ecb96a"
                      className="w-4-h-4 "
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
                      className="w-4-h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  )}
                </div>
                <p className="p0-m0">{likes}</p>
              </div>
            </div>
            <div>
              <p>
                <b>วิชา</b>
                <span>
                  <b className="subject-name">{subject}</b>
                </span>
              </p>
              <p>
                <b>ปีการศึกษา</b>
                <span>
                  <b className="subject-name">{year}</b>
                </span>
              </p>
              <p>
                <b>ผู้สอน</b>
                <span>
                  <b className="subject-name">{teacher}</b>
                </span>
              </p>
            </div>
          </div>

          {showMore ? (
            <p className="review-text">
              {description}
              <button
                className="showbtn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
              </button>
            </p>
          ) : description.length > 450 ? (
            <p className="review-text">
              {description.substring(0, 400)}
              <button
                className="showbtn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
              </button>
            </p>
          ) : (
            <p className="review-text">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
