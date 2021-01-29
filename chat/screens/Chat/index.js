import React from 'react';
import { Container } from './styles';

import Header from './../../components/Header';
import Content from './../../components/Content';
import SendForm from './../../components/SendForm';

export default function Chat({ navigation, theme, setTheme }) {
    return (
        <Container>
            <Header nav={navigation}/>
            <Content />
            <SendForm theme={theme} setTheme={setTheme} />
        </Container>
    )
}