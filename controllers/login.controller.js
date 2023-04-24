
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const usuariosSchema = new mongoose.Schema(
    { nombre : String , email : String , pass : String },
    { collection : 'usuarios' }
)

const UsuariosNetflix = mongoose.model('UsuariosNetflix' , usuariosSchema )

const getUsuarios        = async (req ,  res) => {
    let netflixData     = await UsuariosNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con los usuarios de Netflix' : 'No hay contenido en la API de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })}


const postUsuarios = async ( req , res ) => {

    const { nombre , email , pass } = req.body 
    let netflixData     = await UsuariosNetflix.find()

    let buscarUsuario = netflixData.find( eachUser => eachUser.email === email)

    buscarUsuario === undefined && res.json({ mensaje : `El email es incorrecto.` , entrar : false})
    buscarUsuario && buscarUsuario.pass === pass && res.json({ mensaje : `Login Correcto` , entrar : true })
    buscarUsuario && buscarUsuario.pass !== pass && res.json({ mensaje : `La contraseña es incorrecta. ` , entrar : false })
}

    
module.exports = {
    getUsuarios,
    postUsuarios
}