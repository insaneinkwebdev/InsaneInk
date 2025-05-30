import React, { useState } from "react";
import "./Guide.css";

function Guide() {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "456") {
      setAuthenticated(true);
    }
  };

  return (
    <div className="container">
      {!authenticated ? (
        <div className="centered-wrapper">
          <form className="password-box fade-in" onSubmit={handleSubmit}>
            <h2>Enter Password</h2>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
            />
            <button className="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="guide-wrapper fade-in">
          <div className="webdev-guide">
            <h1>WebDev Guide</h1>
            <p className="intro">
              Congratulations on being chosen as the next WebDev for Insane Ink! In this guide we
              will try to make the setup process as simple as possible. Of course, a lot of your job
              will require you to come up with solutions and problem-solve on your own. In any case,
              let's get started.
            </p>

            <div className="toc">
              <h3>Table of Contents</h3>
              <ul>
                <li>
                  <a href="#section1">Section 1: What You’ll Learn</a>
                </li>
              </ul>
            </div>

            <div className="section" id="section1">
              <h2>Section 1: What You’ll Learn</h2>
              <ul className="bullets">
                <li>General Object-Oriented Programming</li>
                <li>
                  Dynamic & Static JavaScript / JavaScript Frameworks (Node.js, React.js, Express.js)
                </li>
                <li>
                  HTML/CSS to intermediate proficiency (Responsive CSS, Positioning/Sizing, Page &
                  Object Structuring)
                </li>
                <li>HTTP/HTTPS Requests (GET/POST) & how to secure them</li>
                <li>Uploading/maintaining a server (FileZilla)</li>
                <li>How to use an IDE (Hopefully you already know this, I didn’t)</li>
                <li>UI/UX & Graphic Design</li>
              </ul>
              <p>
                The basic skills needed for this job are some proficiency in JavaScript, CSS (you
                definitely should know this), and GitHub. This is your base knowledge to actually
                code and save changes.
              </p>
              <p>
                Everything else is VERY important to actually managing and uploading to the site.
                You may or may not already know this. If you don’t already know how to use it, the
                next sections will explain how to download them and set it all up to be ready to
                edit.
              </p>
              <p>
                A small disclaimer: Varun and I did this months ago and likely forgot a few minor
                details or finicky things. If I forget to add it here, I'm sorry — look at it as
                your first challenge.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guide;