import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Container } from './styles';

import Message from './../Message';

export default function Context({ messages }) {

    return (
        <Container>

            <FlatList 
                data={messages}
                style={{ paddingHorizontal: 40 }}
                renderItem={({item}) => <Message isYou={item.type === "you" ? true : false} data={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
    
        </Container>
    )
}