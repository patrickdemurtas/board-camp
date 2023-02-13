import { db, renTab, cusTab, gameTab } from "../database/database.connection.js";

export async function deleteRent(req, res) {

    const { id } = req.params;

    try {

        const checkRent = await db.query(`SELECT * FROM ${renTab} WHERE id = $1`, [id]);

        if (checkRent.rows.length === 0) return res.sendStatus(404);

        const rent = checkRent.rows[0];

        const back = rent.returnDate;

        if (back === null) return res.sendStatus(400);

        await db.query(`DELETE FROM ${renTab} WHERE id = $1`, [id]);
        res.sendStatus(200);

    } catch (error) {
        res.sendStatus(500);
    }


}

export async function insertRent(req, res) {
    const { customerId, gameId, daysRented } = req.body;
    const rentalDate = new Date().toISOString().split("T")[0];
    const returnDate = null;
    let originalPrice = 0;
    const lateFee = null;

    try {

        const game = await db.query(`SELECT * FROM ${gameTab} WHERE id = $1`, [gameId]);
        if (!game.rows.length) {
            return res.sendStatus(400);
        }
        originalPrice = game.rows[0].pricePerDay * daysRented;


        const customer = await db.query(`SELECT * FROM ${cusTab} WHERE id = $1`, [customerId]);
        if (!customer.rows.length) {
            return res.sendStatus(400)
        }


        const rentedGames = await db.query(`SELECT * FROM ${renTab} WHERE "gameId" = $1 AND "returnDate" IS NULL`, [gameId]);
        const totalStock = game.rows[0].stockTotal;
        const rentedStock = rentedGames.rows.length;
        if (totalStock <= rentedStock) {
            return res.sendStatus(400);
        }


        const rental = await db.query(
            `INSERT INTO ${renTab} ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [customerId, gameId, rentalDate, daysRented, returnDate, originalPrice, lateFee]
        );
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}



export async function listRentals(req, res) {
    try {
        const queryResult = await db.query(
            `WITH join_table AS ( SELECT rentals.id, rentals."customerId", rentals."gameId", rentals."rentDate", rentals."daysRented", rentals."returnDate", rentals."originalPrice", rentals."delayFee", customers.id AS customer_id, customers.name AS customer_name, games.id AS game_id, games.name AS game_name FROM rentals JOIN customers ON rentals."customerId" = customers.id JOIN games ON rentals."gameId" = games.id ) SELECT * FROM ( SELECT id, "customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee", json_build_object('id', customer_id, 'name', customer_name) AS customer, json_build_object('id', game_id, 'name', game_name) AS game FROM join_table ) join_table; `
        );
        console.log(queryResult.rows);
        res.status(200).send(queryResult.rows);
    } catch (error) {
        res.sendStatus(500);
    }
}