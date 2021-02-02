import ioClient from 'socket.io-client';

const URL = 'https://neat-sheep-15.loca.lt';

export const url = URL;

export default ioClient(URL, { reconnection: false });