import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Avatar, Img, UserInfo, Info, Nickname, Status, ExitButton, Text } from './styles';

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
                <MaterialIcons name="exit-to-app" size={24} color="#fff" />
            </ExitButton>
        </Container>
    )
}