import React, { useContext, useState } from 'react'
import { TextContext } from '../context/TextContext';

const Secretroom = () => {
    const { message , handleReply } = useContext(TextContext);
    const [reply, setReply] = useState("");
    return (
        <div>
            Secret Room
            <p>Message for me: {message}</p>
            <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
            />
                <button onClick={() => {handleReply(reply)}}>
                    Send reply
                </button>
            
        </div>
    )
}

export default Secretroom
