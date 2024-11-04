import { useContext, useState } from 'react'
import './App.css'
import Castle from './components/Castle';
import { TextContext } from './context/TextContext';


function App() {
  const { replyText, message } = useContext(TextContext);

  return (
    <div>
      <p>Message For me: {message}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className='text-red-800'>
          {replyText ? replyText : "Waiting for a reply..."}
        </span>
      </p>
      <Castle />
    </div>
  );
}

export default App
