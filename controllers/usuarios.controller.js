
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const perfilesSchema = new mongoose.Schema(
    { nombre : String , email : String , pass : String },
    { collection : 'usuarios' }
)

const PerfilesNetflix = mongoose.model('PerfilesNetflix' , perfilesSchema )

const getPerfil         = async (req ,  res) => {
    let netflixData     = await PerfilesNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con los perfiles de Netflix' : 'No hay contenido en la API de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })
}


const postPerfil        = async ( req , res ) => {

    const { nombre , email , pass } = req.body

    const nuevoPerfil = new PerfilesNetflix( { nombre , email , pass } )
    nuevoPerfil.save()

    let netflixData     = await PerfilesNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con los perfiles de Netflix' : 'No hay contenido en la API de Netflix'
    res.status( status ).json({ netflixData , status , statusText })
}

const putPerfil = async ( req , res ) => {
    const { body } = req
    const { _id , ...resto } = body

    await PerfilesNetflix.findByIdAndUpdate( _id , resto )

    let netflixData     = await PerfilesNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con los perfiles de Netflix' : 'No hay contenido en la API de Netflix'
    res.status( status ).json({ netflixData , status , statusText })
}

const deletePerfil      = async ( req , res ) => {

    const { _id } = req.params

    await PerfilesNetflix.findByIdAndDelete( _id )

    let netflixData     = await PerfilesNetflix.find()
    
    res.json({ netflixData  })

}

    
module.exports = {
    getPerfil,
    postPerfil,
    putPerfil,
    deletePerfil
}