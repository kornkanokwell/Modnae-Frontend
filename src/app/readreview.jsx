import React from "react";
import "./readreview.css";
import moderr from "../assets/moderror.png";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import { useSelector } from "react-redux";
import ReviewCard from "../components/readReviewCard";
import axios from "axios";
const getUser = (state) => ({ ...state.user });
export function ReadReview() {
  const user = useSelector(getUser);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://modnae-m7lm.onrender.com/ReadReview${
            selectedSubject ? `?subject=${selectedSubject}` : ""
          }`
        );
        const reversedReviews = response.data.reverse();
        setReviews(reversedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [selectedSubject]);

  return (
    <>
      <Navbar />
      <div className="readreview-container">
        <Sidenav onSelectSubject={handleSelectSubject} />

        <div className="readreview-wrapper">
          <div className="header-container">
            <p className="header-container-p">
              <b>คุณกำลังอ่านรีวิวในวิชา </b>
              <span>
                <b className="subject-name">
                  {selectedSubject !== "" ? selectedSubject : "ทั้งหมด"}
                </b>
              </span>
            </p>
          </div>
          {reviews.length > 0 ? (
            <div>
              {reviews.map((review, index) => {
                return (
                  <ReviewCard
                    key={index}
                    subject={review.subject}
                    year={review.year}
                    teacher={review.teacher}
                    description={review.descriptions}
                    selectedSubject={selectedSubject}
                    id={review.userId.role}
                    reviewId={review._id}
                    initialLikes={review.likes}
                    userEmail={user.email}
                  />
                );
              })}
            </div>
          ) : (
            <div className="mod-error flex-row center">
              <p className="err-text">วิชานี้ยังไม่มีรีวิว</p>
              <img src={moderr} alt="error" className="moderr" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
