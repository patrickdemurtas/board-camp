import { Router } from "express";
import { insertGame, listGames } from "../controllers/gameControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { gameSchema } from "../schemas/gameSchema.js";
import { validGameName } from "../middlewares/validateGame/validGameName.js";
import { validStockAndPrice } from "../middlewares/validateGame/validStockAndPrice.js";

const gameRoute = Router();

gameRoute.post('/games', validateSchema(gameSchema), validGameName, validStockAndPrice, insertGame);

gameRoute.get('/games', listGames );

export default gameRoute;