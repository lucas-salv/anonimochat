import React, { useState, useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, Input, SendButton } from './styles';
import ThemeButton from './../../components/ThemeButton';
import { Context } from './../../utils/ChatContext';
import io from './../../utils/io';

export default function SendForm({ theme, setTheme, setMessages }) {
    const { connected } = useContext(Context);
    const [inputValue, setInputValue] = useState('');

    const sendText = () => {
        if(connected) {
            io.emit('send message', {type: "", message: inputValue});
            setMessages(msgs => [...msgs, {type: "you", message: inputValue}]);
            setInputValue('');
        }
    }

    return (
        <Container>
            <ThemeButton theme={theme} setTheme={setTheme} />
            <Input placeholder="Digite uma mensagem..." value={inputValue} onChangeText={text => setInputValue(text)} />
            <SendButton
                onPress={sendText}
            >
                <Feather name="send" size={24} color="#41E07F" style={{ transform: [{ rotate: '45deg'}] }} />
            </SendButton>
        </Container>
    )
}