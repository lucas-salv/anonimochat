import React from 'react';
import { Container, Avatar, Img, UserInfo, Info, Nickname, Status, ExitButton, Text, Icon } from './styles';

export default function Header() {
    return (
        <Container>
            <UserInfo>
                <Avatar>
                    <Img />
                </Avatar>
                <Info>
                    <Nickname>Apelido</Nickname>
                    <Status>Online</Status>
                </Info>
            </UserInfo>
            <ExitButton>
                <Text>Sair</Text>
                <Icon name="exit-to-app" />
            </ExitButton>
        </Container>
    )
}