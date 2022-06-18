import {Request , Response} from 'express'
import {createMenuObject} from '../helpers/createMenuObject'
import {Pet} from '../models/Pet'

export const home = (req:Request, res:Response) => { 

    let list = Pet.getAll();

    res.render("pages/page",{

        menu:createMenuObject('all'),

        banner: {
            title:'Todos os animais',
            background:"allanimals.jpg",
        },
        list
    })


}

export const dogs = (req:Request, res:Response) => { 

    let list = Pet.filterAnimal('dog');
 
    res.render("pages/page",{

        menu:createMenuObject('dog'),

        banner: {
            title:'Todos os cachorros',
            background:"banner_dog.jpg",
        },
        list
    })
}

export const cats = (req:Request, res:Response) => { 

    let list = Pet.filterAnimal('cat');
   
    res.render("pages/page",{

        menu:createMenuObject('cat'),

        banner: {
            title:'Todos os gatos',
            background:"banner_cat.jpg",
        },
        list
    })
}

export const fish = (req:Request, res:Response) => { 

    let list = Pet.filterAnimal('fish');
    
    res.render("pages/page",{

        menu:createMenuObject('fish'),

        banner: {
            title:'Todos os peixes',
            background:"banner_fish.jpg",
        }, 
        list
    })
}