
const express = require('express');
require('dotenv').config();
const app = express();
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


app.use(express.static('public'));
app.get('*', (req, res) => {
    const path = require('path');
    console.log('path',path)
    console.log('dirname',__dirname)
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});
app.listen(server_port, server_ip_address, () => {
    console.log(`Applicacion corriendo en puerto ${ server_port }`);
});