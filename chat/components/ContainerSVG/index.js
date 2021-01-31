import React from 'react';

import { Container, Img } from './styles';
import loginImg from './../../assets/login.png'

export default function ContainerSVG() {
    return (
        <Container>
            <Img source={loginImg} />
        </Container>
    )
}