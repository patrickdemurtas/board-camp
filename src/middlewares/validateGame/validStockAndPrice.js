import { db } from "../../database/database.connection.js";

export async function validStockAndPrice(req, res, next) {

    const { name, stockTotal, pricePerDay } = req.body;
    try {
        if (name === '' || stockTotal === 0 || pricePerDay === 0) {
            return res.sendStatus(400);
        }

    } catch (error) {
        return res.sendStatus(500);
    }

    next();

}