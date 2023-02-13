import { Router } from "express";
import { deleteRent, insertRent, listRentals, finalizeRent } from "../controllers/rentalControllers.js";
import { rentalSchema } from "../schemas/rentalSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";


const rentalRoute = Router();

rentalRoute.post('/rentals', validateSchema(rentalSchema), insertRent);

rentalRoute.get('/rentals', listRentals);

rentalRoute.delete('/rentals/:id', deleteRent);

rentalRoute.post('/rentals/:id/return', finalizeRent);

export default rentalRoute;