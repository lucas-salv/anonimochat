import React, { useRef } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import Message from './../Message';

export default function Context({ messages }) {
    const scrollView = useRef();

    return (
            <FlatList 
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}
                data={messages}
                style={{ flex: 1, overflow: 'scroll', paddingHorizontal: 40 }}
                renderItem={({item}) => <Message isYou={item.type === "you" ? true : false} data={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
    )
}