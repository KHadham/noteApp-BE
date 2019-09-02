const conn = require('../configs/db')

module.exports = {
////////GET ALL Category////////////////////////////
    MgetAllCategory: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
////////GET ALL note////////////////////////////
    MgetAllColor: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM color' , (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
////////GET 1 Category////////////////////////////

    MgetByidCategory: (idnote) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category WHERE id_category = ?', idnote, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
//////// POST Category ///////////////////////////

    McreateCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO category SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

////////  EDIT Category ////////////////////////////

    MeditCategory: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE category SET ? WHERE id_category = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
//////// DELETE Category ////////////////////////////
    MdeleteCategory: (id_nya) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM category WHERE id_category = ?', id_nya, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}