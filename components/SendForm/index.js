import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Input, SendButton } from './styles';
import ThemeButton from './../../components/ThemeButton';

export default function SendForm({ theme, setTheme }) {
    return (
        <Container>
            <ThemeButton theme={theme} setTheme={setTheme} />
            <Input placeholder="Digite uma mensagem..." />
            <SendButton>
                <MaterialIcons name="send" size={24} color="#FF3366" />
            </SendButton>
        </Container>
    )
}