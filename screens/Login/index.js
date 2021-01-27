import React from 'react';
import { Container, ContainerSVG, ContainerForm, Input, Button } from './styles';
import { Entypo } from '@expo/vector-icons';

import Title from './../../components/Title';

export default function Login() {
    return (
        <Container>
            <Title />
            <ContainerSVG></ContainerSVG>
            <ContainerForm>
                <Input placeholder="Digite um apelido..." />
                <Button>
                    <Entypo name="controller-play" size={20} color="#FF3366" />
                </Button>
            </ContainerForm>
        </Container>
    )
}