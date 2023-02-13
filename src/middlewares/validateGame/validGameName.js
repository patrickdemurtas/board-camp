import { db } from "../../database/database.connection.js";

export async function validGameName(req, res, next) {

    const postedName = req.body.name;

    try {
        const repeatedGames = await db.query('SELECT * FROM games WHERE name = $1', [postedName]);
        if (repeatedGames.rowCount >= 1) return res.sendStatus(409);

    } catch (error) {
        return res.sendStatus(500);
    }

    next();
}