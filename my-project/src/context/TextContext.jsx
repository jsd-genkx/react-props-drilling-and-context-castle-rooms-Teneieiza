import React, { createContext, useState } from 'react'

const TextContext = createContext();

const TextProvider = ({ children }) => {

    const [replyText, setReplyText] = useState('');

    const handleReply = (message) => {
        setReplyText(message);
    };

    const message = "Do you love me?";

    return (
        <TextContext.Provider value={{ replyText, handleReply, message }}>
            {children}
        </TextContext.Provider>
    )
}

export { TextContext, TextProvider };
