import { Router } from "express";
import { listCustomers, insertCustomer, listCustomerById, changeCustomer } from "../controllers/customerControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { customerSchema, changeCustomerSchema } from "../schemas/customerSchema.js";
import{ validateCpf } from "../middlewares/validCustomer/validateCpf.js";




const customerRoute = Router();

customerRoute.post('/customers', validateSchema(customerSchema), validateCpf, insertCustomer);

customerRoute.get('/customers', listCustomers);

customerRoute.get('/customers/:id', listCustomerById);

customerRoute.put('/customers/:id', validateSchema(changeCustomerSchema), changeCustomer); //atentar

export default customerRoute;
