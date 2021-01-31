import ioClient from 'socket.io-client';

const URL = 'https://calm-mule-38.loca.lt';

export const url = URL;

export default ioClient(URL);