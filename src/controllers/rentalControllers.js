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
