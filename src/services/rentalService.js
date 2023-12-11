import * as rentalRepository from '../repositories/rentalRepository.js';

export async function deleteRentalById(id) {
    const deleted = await rentalRepository.deleteRentalById(id);

    if (!deleted) {
        return { status: 404 }; 
    }

    return { status: 200 }; 
}

export async function createRental({ customerId, gameId, daysRented }) {
    const created = await rentalRepository.createRental({ customerId, gameId, daysRented });

    if (!created) {
        return { status: 400 }; 
    }

    return { status: 201 }; 
}

export async function getAllRentals() {
    return await rentalRepository.getAllRentals();
}

export async function finalizeRentalById(id) {
    const finalized = await rentalRepository.finalizeRentalById(id);

    if (!finalized) {
        return { status: 404 }; 
    }

    return { status: 200 }; 
}
