import Joi from "@hapi/joi";

export const customerSchema = Joi.object({
    name: Joi.string().min(1).required(),
    phone: Joi.string().min(10).max(11).required(),
    cpf: Joi.string().length(11).regex(/^\d{11}$/).required(),
    birthday: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required(),
})

export const changeCustomerSchema = Joi.object({
    name: Joi.string().min(1),
    phone: Joi.string().min(10).max(11),
    cpf: Joi.string().length(11).regex(/^\d{11}$/),
    birthday: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/),
})