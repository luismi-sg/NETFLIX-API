
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const logoNetflixSchema = new mongoose.Schema(
    { src : String , alt : String , href : String },
    { collection : 'h1' }
)

const LogoNetflix = mongoose.model('LogoNetflix' , logoNetflixSchema )

const getLogoNetflix        = async (req ,  res) => {
    let netflixData     = await LogoNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con Logo Netflix' : 'No hay contenido en la BBDD Logo de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })}

module.exports = {
    getLogoNetflix
}