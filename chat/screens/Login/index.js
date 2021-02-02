import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import io from './../../utils/io';
import { KeyboardAvoidingView } from 'react-native';
import { ThemeContext } from 'styled-components';
import Title from './../../components/Title';
import ContainerSVG from './../../components/ContainerSVG';
import NicknameForm from './../../components/NicknameForm';

export default function Login({ navigation }) {
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        io.on('connect', () => {})
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