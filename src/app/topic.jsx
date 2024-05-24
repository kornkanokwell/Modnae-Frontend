import React from "react";
import { Navbar } from "../components/navbar";
import "./topic.css";
import { CommentPanel } from "../components/commentPanel";
import { TopicPanel } from "../components/topicPanel";

export function Topic() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="content-wrapper">
        <div className=" topic-wrapper">
          <section id="section1" className="topic-header">
            <h1>กระทู้คำถาม</h1>
            <hr />
          </section>
          <section id="section2">
            <TopicPanel />
          </section>
          <section id="section3">
            <CommentPanel />
          </section>
        </div>
      </main>
    </>
  );
}
