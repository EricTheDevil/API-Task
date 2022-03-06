import "./App.css";
import react, { useState, useEffect, useRef } from "react";

function App() {
  const sendMessage = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Ping" }),
    };

    fetch("http://localhost:3001/posts/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const sendMessagee = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "eee" }),
    };

    fetch("http://localhost:3001/posts/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendMessage}> SEND PING</button>
        <button onClick={sendMessagee}> SEND anything</button>
      </header>
      <p></p>
    </div>
  );
}

export default App;
