import React from 'react';
import { ContainerTitle, AppName, Span, Desc} from './styles';

export default function Title() {
    return (
        <ContainerTitle>
            <AppName>Anônimo<Span>Chat</Span></AppName>
            <Desc>
                Seja bem-vindo(a) ao bate-papo em
                tempo real. Por favor, para
                continuar preencha o campo de apelido abaixo:
            </Desc>
        </ContainerTitle>
    )
}