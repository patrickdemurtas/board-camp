import { db } from '../database/database.connection.js';

export async function getAllGames() {
    return await db.query('SELECT * FROM games');
}

export async function insertGame({ name, image, stockTotal, pricePerDay }) {
    return await db.query('INSERT INTO games ("name", "image", "stockTotal", "pricePerDay") VALUES ($1,$2,$3,$4)', [name, image, stockTotal, pricePerDay]);
}
