import React from 'react';
import { Container, Text, Date } from './styles';

export default function Message({ isYou, data }) {
    return (
        <Container isYou={isYou} >
            <Text isYou={isYou} >{data.message}</Text>
            <Date isYou={isYou} >{data.date}</Date>
        </Container>
    )
}