import "./App.css";
import { useState } from "react";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Zainab",
    };

    setMessages([newMessage, ...messages]);
  }

  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Vending Machine Content Viewer</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
    </div>

    
  );
}

export default App;
