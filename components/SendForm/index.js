import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Input, SendButton } from './styles';

export default function SendForm() {
    return (
        <Container>
            <Input placeholder="Digite uma mensagem..." />
            <SendButton>
                <MaterialIcons name="send" size={24} color="#FF3366" />
            </SendButton>
        </Container>
    )
}