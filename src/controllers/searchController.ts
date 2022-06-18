import {Request , Response} from 'express'

export const search = (req:Request, res:Response) => { 

    res.render("pages/search")


    res.send("Home")
}