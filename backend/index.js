import express from 'express';
import productosRouter from './routes/productos.js';


const app = express();


app.listen(3000, () => {
    console.log('La aplicacion esta escuchando el puerto 3000');
});

export default app;