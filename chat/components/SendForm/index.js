import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, Input, SendButton } from './styles';
import ThemeButton from './../../components/ThemeButton';
import io from './../../utils/io';

export default function SendForm({ theme, setTheme, setMessages }) {
    const [inputValue, setInputValue] = useState('');

    const getDate = () => {
        const d = new Date()
        const stringDate = `${d.getHours() < 10 ? '0'+d.getHours() : d.getHours() }:${d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()}`;
        return stringDate;
    }

    const sendText = () => {
            if(inputValue.length > 0) {
                io.emit('send message', {type: "", message: inputValue});
                setMessages(msgs => [...msgs, {type: "you", date: getDate(), message: inputValue}]);
                setInputValue('');
            }
    }

    const inputFocus = () => {
        io.emit('writing', true);
    }

    const inputBlur = () => {
        io.emit('writing', false);
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', () => {
            Keyboard.dismiss();
        })

        return () => {
            Keyboard.removeListener('keyboardDidHide', () => {
                console.log('hidden keyboard');
            })
        }
    }, [])

    

    return (
        <Container>
            <ThemeButton theme={theme} setTheme={setTheme} />
            <Input placeholder="Digite uma mensagem..." value={inputValue} onFocus={inputFocus} onBlur={inputBlur} onChangeText={text => setInputValue(text)} />
            <SendButton
                onPress={sendText}
            >
                <Feather name="send" size={24} color="#41E07F" style={{ transform: [{ rotate: '45deg'}] }} />
            </SendButton>
        </Container>
    )
}