import React from 'react';
import { Container, Avatar, Img, UserInfo, Info, Nickname, Status, ExitButton, Text, Icon } from './styles';
import io from './../../utils/io';

export default function Header({ nav, name }) {

    const exitChat = () => {
        io.emit('leave room');
        nav.goBack();
    }

    return (
        <Container>
            <UserInfo>
                <Avatar>
                    <Img />
                </Avatar>
                <Info>
                    <Nickname>{name}</Nickname>
                    <Status>Online</Status>
                </Info>
            </UserInfo>
            <ExitButton onPress={exitChat}>
                <Text>Sair</Text>
                <Icon name="exit-to-app" />
            </ExitButton>
        </Container>
    )
}