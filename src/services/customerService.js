import * as customerRepository from "../repositories/customerRepository.js";

export async function getAllCustomers() {
    return await customerRepository.getAllCustomers();
}

export async function getCustomerById(id) {
    return await customerRepository.getCustomerById(id);
}

export async function createCustomer({ name, phone, cpf, birthday }) {
    return await customerRepository.insertCustomer({ name, phone, cpf, birthday });
}

export async function updateCustomer({ id, name, phone, cpf, birthday }) {
    const updated = await customerRepository.updateCustomer({ id, name, phone, cpf, birthday });

    if (!updated) {
        return { status: 404 }; 
    }

    return { status: 200 }; 
}
