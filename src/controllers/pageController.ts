import {Request , Response} from 'express'

export const home = (req:Request, res:Response) => { 

    res.render("pages/page")


    res.send("Home")
}

export const dogs = (req:Request, res:Response) => { 
    res.send("Pagina de dogs")
}

export const cats = (req:Request, res:Response) => { 
    res.send("Pagina de gatos")
}

export const fish = (req:Request, res:Response) => { 
    res.send("pagina de peixes")
}