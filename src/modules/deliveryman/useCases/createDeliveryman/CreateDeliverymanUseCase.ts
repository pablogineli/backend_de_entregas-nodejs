import {prisma} from "../../../../database/prismaClient";
import {hash} from "bcrypt";

interface ICreateDeliveryman{
    username: string;
    password: string;
}

class CreateDeliverymanUseCase{
    async execute({username, password}:ICreateDeliveryman){

        const deliveryExists = await prisma.deliveryman.findFirst({
            where:{
                username:{
                    mode:"insensitive"
                }
            }
        })
        if (!deliveryExists){
            throw new Error("Deliveryman already exists!")
        }

        const passwordHash = await hash(password, 10)

        const deliveryman = await prisma.deliveryman.create({
            data:{
                username,
                password: passwordHash
            }
        })

        return deliveryman
    }

}

export {CreateDeliverymanUseCase}
