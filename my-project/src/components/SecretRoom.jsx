import React, { useState } from 'react'

const Secretroom = ({message1, handleReply}) => {
    const [reply, setReply] = useState("");
    return (
        <div>
            Secret Room
            <p>Message for me: {message1}</p>
            <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
            />
                <button onClick={() => handleReply(reply)}>
                    Send reply
                </button>
            
        </div>
    )
}

export default Secretroom
