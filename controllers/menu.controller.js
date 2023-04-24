
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const menuNetflixSchema = new mongoose.Schema(
    { id : Number , texto : String , href : String },
    { collection : 'menu' }
)

const MenuNetflix = mongoose.model('MenuNetflix' , menuNetflixSchema )

const getMenuNetflix        = async (req ,  res) => {
    let netflixData     = await MenuNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con Menu Netflix' : 'No hay contenido en la BBDD Menu de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })}

module.exports = {
    getMenuNetflix
}