import { db } from "../database/database.connection.js";

export async function listCustomers(req, res) {

    try {
        const list = await db.query('SELECT * FROM customers');
        return res.json(list.rows);

    } catch (error) {
        return res.sendStatus(500);
    }

}

export async function insertCustomer(req, res) {

    const { name, phone, cpf, birthday } = req.body;

    try {
        await db.query('INSERT INTO customers ("name", "phone", "cpf", "birthday") VALUES ($1,$2,$3,$4)', [name, phone, cpf, birthday]);
        return res.sendStatus(201);

    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function listCustomerById(req, res) {

    const { id } = req.params;

    try {

        const customerId = await db.query('SELECT * FROM costumers WHERE id = $1 LIMIT 1', [id]);

        if (customerId.rowCount === 0){
            return res.sendStatus(404);
        } else{
            return res.status(200).send(customerId.rows[0]);
        }

    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function changeCustomer(req,res) {

        const { id } = req.params;
        const { name, phone, cpf, birthday } = req.body;

        try {
            const currentCustomer = await db.query(
                'SELECT * FROM customers WHERE id = $1',
                [id]
            );

            if (currentCustomer.rowCount === 0) {
                return res.sendStatus(404);
            }

            if (currentCustomer.rows[0].cpf !== cpf) {
                const repeatedCustomers = await db.query(
                    'SELECT * FROM customers WHERE cpf = $1',
                    [cpf]
                );

                if (repeatedCustomers.rowCount >= 1) {
                    return res.sendStatus(409);
                }
            }

            const result = await db.query(
                'UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5',
                [name, phone, cpf, birthday, id]
            );

            return res.sendStatus(200);
        } catch (error) {
            return res.sendStatus(500);
        }
    }

