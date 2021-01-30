import React from 'react';
import { Container, Content, Title, Text, ExitButton, TextBtn, Icon } from './styles';

import Loading from './../Loading';
import UserStatus from './../UserStatus';
import io from './../../utils/io';

export default function Queue({ data, nav }) {
    
    const exitQueue = () => {
        io.emit('disconnect queue');
        nav.goBack();
    }

    return (
        <Container>
            <ExitButton onPress={exitQueue}>
                <TextBtn>Sair</TextBtn>
                <Icon name="exit-to-app" />
            </ExitButton>
            <Content>
                <Title>Fila de espera...</Title>
                <Text>{ data.message }</Text>
                <Loading />
                {data.status && <UserStatus>{data.status}</UserStatus>}
            </Content>
        </Container>
    )
}