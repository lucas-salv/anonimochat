import React from 'react';
import { Container } from './styles';

import Header from './../../components/Header';
import Content from './../../components/Content';

export default function Chat() {
    return (
        <Container>
            <Header />
            <Content />
        </Container>
    )
}