import {Router} from "express";
import {CreatClientController} from "./modules/clients/useCases/createClient/CreatClientController";
import {AuthenticateClientController} from "./modules/account/authenticateClient/AuthenticateClientController";
import {
    CreateDeliverymanController
} from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreatClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/authenticate", authenticateClientController.handle)
routes.post("/client", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)



export {routes}
