import ioClient from 'socket.io-client';

const URL = 'https://servidorlocaltunnelaqui';

export const url = URL;

export default ioClient(URL);