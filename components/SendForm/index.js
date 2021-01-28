import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Input, SendButton } from './styles';
import ThemeButton from './../../components/ThemeButton';

export default function SendForm() {
    return (
        <Container>
            <ThemeButton />
            <Input placeholder="Digite uma mensagem..." />
            <SendButton>
                <MaterialIcons name="send" size={24} color="#FF3366" />
            </SendButton>
        </Container>
    )
}