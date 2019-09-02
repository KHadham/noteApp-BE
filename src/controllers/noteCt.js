const noteModel = require('../models/noteMd')
const miscHelpers = require('../helpers/miscHelpers')
const jwt = require('jsonwebtoken')

module.exports = {
////// GET ALL Note ///////////////////////////////////////
CgetAllNote: (req, res) => {
    noteModel.MgetAllNote()
        .then((resultData) => {
            miscHelpers.response(res, resultData)
        })
        .catch((error) => {
            console.log(error)
        })
    },

/////// GET Note by Category  /////////////////////////////////////////////
    CgetByCategory: (req, res) => {
        const nama = req.params.namaKategori

        noteModel.MgetNoteByCategory(nama)
        .then((resultData) => {
            const result = resultData
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
/////// GET 1 Note /////////////////////////////////////////////
    CgetByidNote: (req, res) => {
        const idnote = req.params.idnote
        console.log(req.params.idnote)
        noteModel.MgetByidNote(idnote)
        .then((resultData) => {
            const result = resultData
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
///////  POST Note //////////////////////////////////////////////
    CpostNote: (req, res) => {

        const data = {
            id_category: req.body.id_category,
            title: req.body.title,
            text: req.body.text
        }
    
        noteModel.McreateNote(data)
        .then(()=> {
            miscHelpers.response(res, data, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
/////// EDIT / PATCH Note //////////////////////////////////////////////
CeditNote: (req, res) => {
    let idnya = req.params.idnote

    const data = {
        id_category  : req.body.id_category,
        text     : req.body.text,
    }
    
    noteModel.MeditNote(data,idnya)
            .then(() => {
                miscHelpers.response(res, data, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },
//////// DELETE NOTE /////////////////////////////////////////

CeraseNote: (req, res) => {
    let idnya = req.params.idnote

    noteModel.MdeleteNote(idnya)
            .then(() => {
                miscHelpers.response(res, idnya, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },

}