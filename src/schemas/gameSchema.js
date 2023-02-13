import Joi from '@hapi/joi';

export const gameSchema = Joi.object({
    name: Joi.string().min(1).required(),
    image: Joi.string().required().regex(/^http:\/\//),
    stockTotal: Joi.number().greater(0).integer(0).required(),
    pricePerDay: Joi.number().integer().greater(0).required(), 
})

