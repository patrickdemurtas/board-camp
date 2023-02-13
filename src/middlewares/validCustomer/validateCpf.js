import { db } from "../../database/database.connection.js";

export async function validateCpf(req, res, next) {

    const postedCpf = req.body.cpf;

    try {

        const repeatedCpf = await db.query('SELECT * FROM customers WHERE cpf = $1', [postedCpf]);

        if (repeatedCpf.rowCount >= 1) return res.sendStatus(409);

    } catch (error) {
        return res.sendStatus(500);
    }

    next()
}