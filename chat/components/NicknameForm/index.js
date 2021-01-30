import React, { useState } from 'react';
import { Container, Input, Button } from './styles';
import { Feather } from '@expo/vector-icons';
import io from './../../utils/io';

export default function NicknameForm({ nav }) {
    const [nickname, setNickname] = useState('');

    const login = () => {
        if(nickname.length > 2) {
            io.emit('login', { nickname });
            nav.navigate('Chat');
        }
    }

    return (
        <Container>
            <Input placeholder="Digite um apelido..." value={nickname} onChangeText={text => setNickname(text)} />
            <Button onPress={login}>
                <Feather name="play" size={20} color="#41E07F" />
            </Button>
        </Container>
    )
}