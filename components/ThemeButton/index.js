import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';

export default function ThemeButton({ theme, setTheme }) {

    const handleTheme = () => {
        setTheme(!theme);
    }

    return (
        <Container onPress={handleTheme}>
            <Ionicons name="bulb-outline" size={24} color="#6A6A6A" />
        </Container>
    )
}