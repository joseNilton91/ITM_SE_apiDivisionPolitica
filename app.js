const expres = require('express');
const app = expres()


const puerto = 3030;
console.log('Api Division Politica Inicializada');

app.listen(puerto, () => {
console.log(`Api Division Politica escuchando en el puerto: ${puerto}`);
});