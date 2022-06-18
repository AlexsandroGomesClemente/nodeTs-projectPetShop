import express from 'express';
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRouter from './routes'




dotenv.config()

const app = express()

app.set("view engine",'mustache')
app.set('views', path.join(__dirname,"views"))
app.engine('mustache', mustache())


app.use(express.static(path.join(__dirname,"/public")))


//ROTAS

app.use(mainRouter)

app.use((req, res) => {
    res.status(404).send('pagina não encontrada')
}) 



app.listen(process.env.PORT, ()=> { console.log("listen on port " + process.env.PORT ) });