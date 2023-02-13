import { Router } from "express";
import { deleteRent, insertRent } from "../controllers/rentalControllers.js";
import { rentalSchema } from "../schemas/rentalSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";


const rentalRoute = Router();

rentalRoute.post('/rentals', validateSchema(rentalSchema), insertRent);

rentalRoute.get('/rentals', );

rentalRoute.delete('/rentals/:id', deleteRent);

rentalRoute.put('/rentals/:id/return',);

export default rentalRoute;