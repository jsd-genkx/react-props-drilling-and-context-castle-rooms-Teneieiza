import { useState } from 'react'
import './App.css'
import Castle from './components/Castle';

function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  }

  const message1 = "Do You Love me?";

  return (
    <div>
      <p>Message For me: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className='text-red-800'>
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Castle message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default App
