import React from 'react';
import { Container } from './styles';

import Title from './../../components/Title';
import ContainerSVG from './../../components/ContainerSVG';
import NicknameForm from './../../components/NicknameForm';

export default function Login({ navigation }) {
    return (
        <Container>
            <Title />
            <ContainerSVG/>
            <NicknameForm nav={navigation}/>
        </Container>
    )
}