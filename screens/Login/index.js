import React from 'react';
import { Container, ContainerTitle, ContainerSVG, ContainerForm, Title, Desc, Span, Input, Button } from './styles';
import { Entypo } from '@expo/vector-icons';

export default function Login() {
    return (
        <Container>
            <ContainerTitle>
                <Title>Anônimo<Span>Chat</Span></Title>
                <Desc>
                    Seja bem-vindo(a) ao bate-papo em
                    tempo real. Por favor, para
                    continuar preencha o campo de apelido abaixo:
                </Desc>
            </ContainerTitle>
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