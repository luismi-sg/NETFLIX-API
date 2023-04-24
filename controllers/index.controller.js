
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const netflixSchema = new mongoose.Schema(
    { reproducion : Array , opcionesRep : Array , flechaAtras : Object , close : Object , bandera : Object , megusta : Array , megustaVacio : Object , 
        megustaLleno : Object , milista : Object , check : Object},
    { collection : 'todo' }
)

const Netflix = mongoose.model('Netflix' , netflixSchema )

const getNetflix        = async (req ,  res) => {
    let netflixData     = await Netflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con Netflix' : 'No hay contenido en la API de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })}

module.exports = {
    getNetflix
}