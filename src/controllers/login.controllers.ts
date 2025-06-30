import { Request, Response } from "express";
import { iCreateLogin, iRetunrLogin } from "../schemas/login.schemas";
import { createLoginService } from "../services/createLogin.service";

export const createLoginController=async(req:Request,res:Response):Promise<Response>=>{

    const loginData:iCreateLogin = req.body
    const user: iRetunrLogin = await createLoginService(loginData)

    return res.status(200).json(user)

}