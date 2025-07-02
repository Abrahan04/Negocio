import express from 'express';
import productosRouter from './routes/productos.js';


const app = express();

app.get('/', (req,res) => {
    res.status(200).json('OK');
    });

    app.listen(3000, () => {
        console.log('La aplicacion esta escuchando el puerto 3000');
    });

export default app;