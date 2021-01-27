import React from 'react';
import { Container, ContainerForm, Input, Button } from './styles';
import { Entypo } from '@expo/vector-icons';

import Title from './../../components/Title';
import ContainerSVG from './../../components/ContainerSVG';

export default function Login() {
    return (
        <Container>
            <Title />
            <ContainerSVG/>
            <ContainerForm>
                <Input placeholder="Digite um apelido..." />
                <Button>
                    <Entypo name="controller-play" size={20} color="#FF3366" />
                </Button>
            </ContainerForm>
        </Container>
    )
}