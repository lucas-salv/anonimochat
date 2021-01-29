import React, { useState } from 'react';
import { Container, Input, Button } from './styles';
import { Entypo } from '@expo/vector-icons';
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
                <Entypo name="controller-play" size={20} color="#FF3366" />
            </Button>
        </Container>
    )
}