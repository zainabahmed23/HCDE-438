import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic'
import NamePicker from "./namePicker";

function App() {
  const [showCamera, setShowCamera] = useState(false)
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Zainab",
    };

    setMessages([newMessage, ...messages]);
  }

  //Exercise 5.1, step 9
  function takePicture(img) {
    console.log(img);
    setShowCamera(true);
  }


  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>

      {/* // Exercise 5.1, step 8 */}
      <div className="App">
        {showCamera && <Camera takePicture={takePicture} />}
      </div>


      {/* sets showCamera to true */}
      <TextInput sendMessage={sendMessage} text={"test"} 
      showCamera={()=>setShowCamera(true)}
  />
    </div>

    
  );
}

export default App;
