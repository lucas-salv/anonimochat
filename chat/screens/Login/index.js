import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import io from './../../utils/io';
import { Context } from './../../utils/ChatContext';
import { KeyboardAvoidingView } from 'react-native';
import { ThemeContext } from 'styled-components';
import Title from './../../components/Title';
import ContainerSVG from './../../components/ContainerSVG';
import NicknameForm from './../../components/NicknameForm';

export default function Login({ navigation }) {
    const themeContext = useContext(ThemeContext);
    const { setConnected } = useContext(Context);

    useEffect(() => {
        io.on('connect', () => {
            setConnected(true);
        })
    }, []);

    return (
        <Container>
            <KeyboardAvoidingView
                behavior="position"
                style={{ backgroundColor: themeContext.background }}
            >
                <Title />
                <ContainerSVG/>
                <NicknameForm nav={navigation}/>
            </KeyboardAvoidingView>
        </Container>
    )
}