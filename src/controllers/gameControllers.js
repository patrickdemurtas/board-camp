import * as gameService from '../services/gameService.js';

export async function insertGame(req, res) {
    const { name, image, stockTotal, pricePerDay } = req.body;

    try {
        await gameService.createGame({ name, image, stockTotal, pricePerDay });
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function listGames(req, res) {
    try {
        const games = await gameService.getAllGames();
        return res.json(games.rows);
    } catch (error) {
        return res.sendStatus(500);
    }
}
