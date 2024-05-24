import React from "react";
import { Navbar } from "../components/navbar";
import "./menudocument.css";
import { Link } from "react-router-dom";
import { RateOurWebsite } from "../components/rateOurWebsite";

export function MenuDocument() {
  return (
    <>
      <Navbar />
      <main className="allcontent ">
        <div className="doc-menu">
          <div className="row-wrapper">
            <div className="row">
              <Link to="/coursesyllabus">
                <div className="column top-left"></div>
              </Link>
              <Link to="/coursebook">
                <div className="column top-right"></div>
              </Link>
            </div>
            <div className="row">
              <Link to="/calendar">
                <div className="column bot-left"></div>
              </Link>
              <Link to="/contact">
                <div className="column bot-right"></div>
              </Link>
            </div>
          </div>

          <RateOurWebsite />
        </div>
      </main>
    </>
  );
}
