import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import io from './../../utils/io';

import Header from './../../components/Header';
import Content from './../../components/Content';
import SendForm from './../../components/SendForm';
import Queue from './../../components/Queue';

export default function Chat({ navigation, theme, setTheme }) {
    const [name, setName] = useState('Apelido');
    const [queue, setQueue] = useState(undefined);

    useEffect(() => {
        io.on('start', data => {
            setName(data.nickname);
            setQueue(undefined);
        });

        io.on('queue', data => {
            setQueue(data.message);
        })
    }, []);

    return (
        <>
        {queue ? <Queue message={queue} /> : 
            <Container>
                <Header nav={navigation} name={name}/>
                <Content />
                <SendForm theme={theme} setTheme={setTheme} />
            </Container>
        }
        </>
    )
}