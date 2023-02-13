import Joi from "@hapi/joi";

export const rentalSchema = Joi.object({
    customerId: Joi.number().required(),
    gameId: Joi.number().required(),
    daysRented: Joi.number().integer().greater(0).required(),
})