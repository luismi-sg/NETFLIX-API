console.clear()
console.log(`Iniciando API NETFLIX 👽`)

require('dotenv').config()
const express           = require('express')
const cors              = require('cors')
const mongoose          = require('mongoose')
        mongoose.set('strictQuery' , true)
const { Router }        = require('express')


const { getNetflix }                                            = require('./controllers/index.controller')
const { getPerfil , postPerfil , deletePerfil, putPerfil }      = require('./controllers/usuarios.controller')
const { getUsuarios , postUsuarios }                            = require('./controllers/login.controller')
const { getHeaderNetflix }                                      = require('./controllers/header.controller')
const { getLogoNetflix }                                        = require('./controllers/h1.controller')
const { getMenuNetflix }                                        = require('./controllers/menu.controller')
const { getContenidoNetflix, getContenidoByIdNetflix }          = require('./controllers/contenido.controller')


const app               = express()
const router            = Router()

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded( {extended:false} ))
app.use( router )

let bbdd = process.env.BBDD

const main = async () => await mongoose.connect( bbdd )
            .then( () => console.log( `Conectando a MongoDB BBDD NETFLIX 👻`) )

main()

router.route('/').get( getNetflix )

router.route('/header').get( getHeaderNetflix )

router.route('/header/h1').get( getLogoNetflix )

router.route('/header/menu').get( getMenuNetflix )

router.route('/contenido').get( getContenidoNetflix )

router.route('/contenido/id/:numero').get(getContenidoByIdNetflix)

router.route('/login')
        .get( getUsuarios )
        .post( postUsuarios )

router.route('/usuarios')
        .get( getPerfil )
        .post( postPerfil )
        .put( putPerfil )

router.route('/usuarios/id/:_id').delete( deletePerfil )


app.listen( 4000 , () => {
    console.log(`API NETFLIX lista en puerto 4000 💀`)
})

module.exports = app