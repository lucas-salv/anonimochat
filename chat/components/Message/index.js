import React from 'react';
import { Container, Text, Date } from './styles';

export default function Message({ isYou, data }) {
    return (
        <Container isYou={isYou} >
            <Text isYou={isYou} >{data}</Text>
            <Date isYou={isYou} >18:30</Date>
        </Container>
    )
}