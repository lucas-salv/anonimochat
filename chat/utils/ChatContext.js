import React, { useState, createContext } from 'react';

const Context = createContext();

function ChatContext({ children }) {
    const [connected, setConnected] = useState(false);
    const [room, setRoom] = useState('');

    return (
        <Context.Provider value={{ connected, setConnected, room, setRoom }}>
            { children }
        </Context.Provider>
    )


};

export { ChatContext, Context };