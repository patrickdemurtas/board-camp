import { Router } from "express";
import { deleteRent } from "../controllers/rentalControllers.js";
import { rentalSchema } from "../schemas/rentalSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";


const rentalRoute = Router();

rentalRoute.post('/rentals', );

rentalRoute.get('/rentals', );

rentalRoute.delete('/rentals/:id', );

rentalRoute.put('/rentals/:id/return', deleteRent);

export default rentalRoute;