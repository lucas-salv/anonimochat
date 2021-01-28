import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Container } from './styles';

import Message from './../Message';

const defaultMessage = [
    {type: 'you', message: 'Mussum Ipsum, cacilds vidis'},
    {type: 'anonymous', message: 'Mussum Ipsum, cacilds vidis'},
    {type: 'you', message: 'Mussum Ipsum, cacilds vidis litro abertis.'},
    {type: 'anonymous', message: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora'},
    {type: 'you', message: 'Mussum Ipsum, cacilds vidis'},
    {type: 'anonymous', message: 'Mussum Ipsum, cacilds vidis'},
    {type: 'anonymous', message: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent sociosqu ad litora'},
    {type: 'you', message: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent sociosqu ad litora'},
    {type: 'you', message: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent sociosqu ad litora'},
]

export default function Context() {
    return (
        <Container>

            <FlatList 
                data={defaultMessage}
                style={{ paddingHorizontal: 40 }}
                renderItem={({item, index}) => <Message key={index} isYou={item.type === "you" ? true : false} data={item.message} />}
            />
    
        </Container>
    )
}