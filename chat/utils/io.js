import ioClient from 'socket.io-client';

const URL = 'https://servidorlocaltunnelaqui';

export default ioClient(URL);