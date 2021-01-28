import React from 'react';
import { Container } from './styles';

import Header from './../../components/Header';
import Content from './../../components/Content';
import SendForm from './../../components/SendForm';

export default function Chat({ theme, setTheme }) {
    return (
        <Container>
            <Header />
            <Content />
            <SendForm theme={theme} setTheme={setTheme} />
        </Container>
    )
}