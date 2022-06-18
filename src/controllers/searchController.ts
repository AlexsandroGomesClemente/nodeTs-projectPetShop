import {Request , Response} from 'express'
import {createMenuObject} from '../helpers/createMenuObject'
import {Pet} from '../models/Pet'

export const search = (req:Request, res:Response) => { 
    let valueSearch : string = req.query.q as string
    let list = Pet.filterAnimalByName(valueSearch)

    res.render("pages/page", {

        menu:createMenuObject(''),
        list,
        valueSearch

    })


}