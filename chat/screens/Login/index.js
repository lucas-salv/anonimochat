import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import io from './../../utils/io';
import { Context } from './../../utils/ChatContext';

import Title from './../../components/Title';
import ContainerSVG from './../../components/ContainerSVG';
import NicknameForm from './../../components/NicknameForm';

export default function Login({ navigation }) {
    const { setConnected } = useContext(Context);

    useEffect(() => {
        io.on('connect', data => {
            setConnected(true);
        })
    }, []);

    return (
        <Container>
            <Title />
            <ContainerSVG/>
            <NicknameForm nav={navigation}/>
        </Container>
    )
}