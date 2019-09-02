const app = require('express')
const Routes = app.Router()
const noteControler = require('../controllers/noteCt')

Routes
    .get    ('/',           noteControler.CgetAllNote  )
    .get    ('/:idnote',    noteControler.CgetByidNote )
    .get    ('/byCategory/:namaKategori',    noteControler.CgetByCategory )
    .post   ('/',           noteControler.CpostNote )
    .patch  ('/edit/:idnote', noteControler.CeditNote)
    .delete ('/delete/:idnote', noteControler.CeraseNote)

module.exports = Routes