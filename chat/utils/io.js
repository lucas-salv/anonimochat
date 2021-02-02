import ioClient from 'socket.io-client';

const URL = 'https://smooth-dragonfly-81.loca.lt';

export const url = URL;

export default ioClient(URL);