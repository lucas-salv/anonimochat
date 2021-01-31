import ioClient from 'socket.io-client';

const URL = 'https://nervous-impala-73.loca.lt';

export const url = URL;

export default ioClient(URL);