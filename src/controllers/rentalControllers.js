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

export async function insertRent(req,res){

   const { customerId, gameId, daysRented } = req.body;

   const actually = new Date();
   const rDate = actually.toISOString().split("T")[0];

   let firstPrice = 0;
   const back = null;
   const delayFee = null;

   try {

    const g = await db.query(`SELECT * FROM ${gameTab} WHERE id = $1`, [gameId]);
    const { pricePerDay } = g.rows[0];
    firstPrice = pricePerDay*daysRented;

    const checkCustomer = await db.query(`SELECT * FROM ${cusTab} WHERE id = $1`, [customerId]);
    if(checkCustomer.rows[0] === 0) return res.sendStatus(400);
    
    
    const checkGame = await db.query(`SELECT * FROM ${gameTab} WHERE id = $1`, [gameId]);
    if(checkGame.rows[0] === 0) return res.sendStatus(400);


    const gsRent = await db.query(`SELECT * FROM ${renTab} WHERE "gameId" = $1 AND "back" IS NULL`, [gameId]);
    const gStocked = checkGame.rows[0].stockTotal;
    const gRent = gsRent.rows.length;

    const unavailableStock = gRent >= gStocked;

    if(unavailableStock === true) return res.sendStatus(400);


    const r = await db.query(`INSERT INTO ${renTab} ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1,$2,$3,$4,$5,$6,$7);`, [customerId, gameId, rDate, daysRented, back, firstPrice, delayFee]);
    res.sendStatus(201);
    

   } catch (error) {
    res.sendStatus(500);
   }

}
