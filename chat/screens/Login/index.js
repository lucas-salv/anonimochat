import React, { useContext, useEffect, useState } from 'react';
import { Container, ConnectNotice } from './styles';
import io from './../../utils/io';
import { KeyboardAvoidingView } from 'react-native';
import { ThemeContext } from 'styled-components';
import Title from './../../components/Title';
import ContainerSVG from './../../components/ContainerSVG';
import NicknameForm from './../../components/NicknameForm';
import Loading from './../../components/Loading';

export default function Login({ navigation }) {
    const themeContext = useContext(ThemeContext);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        io.on('connect', () => {
            setIsConnected(io.connected);
        })
    }, []);

    return (
        <Container>
            {isConnected ? 
                <>
                <KeyboardAvoidingView
                    behavior="position"
                    style={{ backgroundColor: themeContext.background }}
                >
                    <Title />
                    <ContainerSVG/>
                    <NicknameForm nav={navigation}/>
                </KeyboardAvoidingView>
                </>
            : <Loading />}
        </Container>
    )
}