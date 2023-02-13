import express from 'express';
import cors from 'cors';
import gameRoute from './routes/gameRoute.js';
import customerRoute from './routes/customerRoute.js';
import rentalRoute from './routes/rentalRoute.js';

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(gameRoute);
app.use(customerRoute);
app.use(rentalRoute);


app.listen(PORT, () => {console.log(`server rolling on PORT: ${PORT}`)});