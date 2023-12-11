import { db } from "../database/database.connection.js";

export async function getAllCustomers() {
    return await db.query('SELECT * FROM customers');
}

export async function getCustomerById(id) {
    return await db.query('SELECT * FROM customers WHERE id = $1 LIMIT 1', [id]);
}

export async function insertCustomer({ name, phone, cpf, birthday }) {
    return await db.query('INSERT INTO customers ("name", "phone", "cpf", "birthday") VALUES ($1,$2,$3,$4)', [name, phone, cpf, birthday]);
}

export async function updateCustomer({ id, name, phone, cpf, birthday }) {
    const currentCustomer = await db.query('SELECT * FROM customers WHERE id = $1', [id]);

    if (currentCustomer.rowCount === 0) {
        return false; 
    }

    if (currentCustomer.rows[0].cpf !== cpf) {
        const repeatedCustomers = await db.query('SELECT * FROM customers WHERE cpf = $1', [cpf]);

        if (repeatedCustomers.rowCount >= 1) {
            return false; 
        }
    }

    await db.query('UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5', [name, phone, cpf, birthday, id]);

    return true; 
}
