import React, {useEffect, useState, useContext} from 'react';
import { Container } from './styles';
import io from './../../utils/io';

import Header from './../../components/Header';
import Content from './../../components/Content';
import SendForm from './../../components/SendForm';
import Queue from './../../components/Queue';
import { Context } from './../../utils/ChatContext';

export default function Chat({ navigation, theme, setTheme }) {
    const { setRoom } = useContext(Context);
    const [userData, setUserData] = useState({});
    const [queue, setQueue] = useState(undefined);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        io.on('start', data => {
            setUserData({ name: data.nickname, avatar: data.avatar });
            setRoom(data.room);
            setQueue(undefined);
        });

        io.on('end', data => {
            setMessages(data);
            setUserData({name: ''});
            setRoom('');
        })

        io.on('queue', data => {
            setQueue(data);
        });

        io.on('message', data => {
            setMessages( msgs => [...msgs,  data]);
        });
    }, []);

    return (
        <>
        {queue ? <Queue data={queue} nav={navigation} /> : 
            <Container>
                <Header nav={navigation} data={userData}/>
                <Content messages={messages} />
                <SendForm theme={theme} setTheme={setTheme} setMessages={setMessages} />
            </Container>
        }
        </>
    )
}