const categoryModel = require('../models/categoryMd')
const miscHelpers = require('../helpers/miscHelpers')
const jwt = require('jsonwebtoken')

module.exports = {
////// GET ALL PLAYER ///////////////////////////////////////
    CgetAllCategory: (req, res) => {
        categoryModel.MgetAllCategory()
            .then((resultData) => {
                miscHelpers.response(res, resultData)
            })
            .catch((error) => {
                console.log(error)
            })
        },
////// GET ALL Note ///////////////////////////////////////
CgetAllColor: (req, res) => {
    categoryModel.MgetAllColor()
        .then((resultData) => {
            miscHelpers.response(res, resultData)
        })
        .catch((error) => {
            console.log(error)
        })
    },
/////// GET 1 Note /////////////////////////////////////////////
    CgetByidNote: (req, res) => {
        const idnote = req.params.idCategory

        categoryModel.MgetByidCategory(idnote)
        .then((resultData) => {
            const result = resultData
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
///////  POST Note //////////////////////////////////////////////
CpostCategory: (req, res) => {

        const data = {
            id_color: req.body.color,
            category_name: req.body.category_name,
            icon: "http://192.168.100.97:5000/uploads/work.png",
        }

        categoryModel.McreateCategory(data)
        .then(()=> {
            miscHelpers.response(res, data, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
/////// EDIT / PATCH Note //////////////////////////////////////////////
    CeditCategory: (req, res) => {
        let idnya = req.params.idCategory

        const data = {
            category_name: req.body.category_name,
            icon: req.body.icon,
            color: req.body.color
        }

    categoryModel.MeditCategory(data,idnya)
            .then(() => {
                miscHelpers.response(res, data, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },
//////// DELETE NOTE /////////////////////////////////////////

CeraseCategory: (req, res) => {
    let idnya = req.params.idCategory

    categoryModel.MdeleteCategory(idnya)
        .then(() => {
            miscHelpers.response(res, idnya, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },
}