import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Container } from './styles';

import Message from './../Message';

export default function Context({ messages }) {

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