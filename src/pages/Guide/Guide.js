import React, { useState } from "react";
import "./Guide.css";

function Guide() {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "67890") {
      setAuthenticated(true);
    }
  };

  return (
    <div className="container">
      {!authenticated ? (
        <form className="password-box fade-in" onSubmit={handleSubmit}>
          <h2>Enter Password</h2>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="webdev-guide fade-in">
          <h1>WebDev Guide</h1>
        </div>
      )}
    </div>
  );
}

export default Guide;