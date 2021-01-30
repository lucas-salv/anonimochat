import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Container } from './styles';

import Message from './../Message';
import io from './../../utils/io';

export default function Context() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        io.on('message', data => {
            setMessages( msgs => [...msgs, {type: io.id === data.id ? "you" : "", message: data.message}]);
        })
    }, []);

    return (
        <Container>

            <FlatList 
                data={messages}
                style={{ paddingHorizontal: 40 }}
                renderItem={({item, index}) => <Message key={index} isYou={item.type === "you" ? true : false} data={item.message} />}
            />
    
        </Container>
    )
}