import React, {useState, useEffect} from 'react';
import { Container, Avatar, Img, UserInfo, Info, Nickname, Status, ExitButton, Text, Icon } from './styles';
import io from './../../utils/io';
import images from './../../utils/images';

export default function Header({ nav, data }) {
    const [status, setStatus] = useState('Online');

    useEffect(() => {
        io.on('status client', data => {
            if(data === 'background') {
                setStatus('Ausente');
            } else {
                setStatus('Online');
            }
        })

        io.on('writing client', data => {
            if(data) {
                setStatus('Digitando...');
            } else {
                setStatus('Online');
            }
        })
    }, []);
    
    const exitChat = () => {
        io.emit('leave room');
        nav.goBack();
    }

    return (
        <Container>
            <UserInfo>
                <Avatar>
                    <Img 
                    source={ images[data.avatar] } />
                </Avatar>
                <Info>
                    <Nickname>{data.name}</Nickname>
                    <Status typeColor={status}>{status}</Status>
                </Info>
            </UserInfo>
            <ExitButton onPress={exitChat}>
                <Text>Sair</Text>
                <Icon name="exit-to-app" />
            </ExitButton>
        </Container>
    )
}