import * as gameRepository from '../repositories/gameRepository.js';

export async function getAllGames() {
    return await gameRepository.getAllGames();
}

export async function createGame({ name, image, stockTotal, pricePerDay }) {
    return await gameRepository.insertGame({ name, image, stockTotal, pricePerDay });
}
