import * as customerService from "../services/customerService.js";

export async function listCustomers(req, res) {
    try {
        const customers = await customerService.getAllCustomers();
        return res.json(customers.rows);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function insertCustomer(req, res) {
    const { name, phone, cpf, birthday } = req.body;

    try {
        await customerService.createCustomer({ name, phone, cpf, birthday });
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function listCustomerById(req, res) {
    const { id } = req.params;

    try {
        const customer = await customerService.getCustomerById(id);

        if (customer.rowCount === 0) {
            return res.sendStatus(404);
        }

        return res.status(200).send(customer.rows[0]);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function changeCustomer(req, res) {
    const { id } = req.params;
    const { name, phone, cpf, birthday } = req.body;

    try {
        const result = await customerService.updateCustomer({ id, name, phone, cpf, birthday });

        if (result.status === 404) {
            return res.sendStatus(404); 
        }

        return res.sendStatus(200); 
    } catch (error) {
        return res.sendStatus(500);
    }
}
