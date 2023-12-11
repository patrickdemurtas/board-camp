import * as rentalService from '../services/rentalService.js';

export async function deleteRent(req, res) {
    const { id } = req.params;

    try {
        const result = await rentalService.deleteRentalById(id);
        return res.sendStatus(result.status);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function insertRent(req, res) {
    const { customerId, gameId, daysRented } = req.body;

    try {
        const result = await rentalService.createRental({ customerId, gameId, daysRented });
        return res.sendStatus(result.status);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function listRentals(req, res) {
    try {
        const rentals = await rentalService.getAllRentals();
        return res.status(200).send(rentals);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function finalizeRent(req, res) {
    const { id } = req.params;

    try {
        const result = await rentalService.finalizeRentalById(id);
        return res.sendStatus(result.status);
    } catch (error) {
        return res.sendStatus(500);
    }
}
