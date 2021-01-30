import React from 'react';
import { Container, Title, Text } from './styles';

import Loading from './../Loading';

export default function Queue({ message }) {
    

    return (
        <Container>
            <Title>Fila de espera...</Title>
            <Text>{ message }</Text>
            <Loading />
        </Container>
    )
}