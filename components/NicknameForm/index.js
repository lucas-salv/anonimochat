import React from 'react';
import { Container, Input, Button } from './styles';
import { Entypo } from '@expo/vector-icons';

export default function NicknameForm() {
    return (
        <Container>
            <Input placeholder="Digite um apelido..." />
            <Button>
                <Entypo name="controller-play" size={20} color="#FF3366" />
            </Button>
        </Container>
    )
}