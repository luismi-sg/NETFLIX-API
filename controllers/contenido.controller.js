
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const contenidoNetflixSchema = new mongoose.Schema(
    { id : Number , titulo : String , clase : String , duracion : String , anho : String , palabrasclave : String , genero : String , imgTitulo : Object , descripcion : String , img : Object , banner : Object , a : Object },
    { collection : 'contenido' }
)

const ContenidoNetflix = mongoose.model('ContenidoNetflix' , contenidoNetflixSchema )

const getContenidoNetflix   = async (req ,  res) => {
    let netflixData         = await ContenidoNetflix.find()
    let status              = netflixData ? 200 : 204
    let statusText          = netflixData ? 'Todo bien con Menu Netflix' : 'No hay contenido en la BBDD Menu de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })}

const getContenidoByIdNetflix = async ( req , res ) => {
    const { numero } = req.params
    let netflixData           = await ContenidoNetflix.find({ _id : numero })
    let status              = netflixData ? 200 : 204
    let statusText          = netflixData ? 'Todo bien con Menu Netflix' : 'No hay contenido en la BBDD Menu de Netflix'
    res.status(status).json( {netflixData , status , statusText })
}


module.exports = {
    getContenidoNetflix,
    getContenidoByIdNetflix
}