
const mongoose = require('mongoose')
        mongoose.set('strictQuery' , true)

const headerNetflixSchema = new mongoose.Schema(
    { h1 : Object , menu : Array , session : Array },
    { collection : 'header' }
)

const HeaderNetflix = mongoose.model('HeaderNetflix' , headerNetflixSchema )

const getHeaderNetflix        = async (req ,  res) => {
    let netflixData     = await HeaderNetflix.find()
    let status          = netflixData ? 200 : 204
    let statusText      = netflixData ? 'Todo bien con Header Netflix' : 'No hay contenido en la BBDD Header de Netflix' 

    res.status( status ).json({ netflixData , status , statusText })}

module.exports = {
    getHeaderNetflix
}