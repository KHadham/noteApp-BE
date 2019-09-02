const conn = require('../configs/db')

module.exports = {
////////GET ALL note////////////////////////////
    MgetAllNote: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT note.*,category.category_name,color.color FROM note INNER JOIN category ON note.id_category = category.id_category INNER JOIN color ON category.id_color = color.id_color ORDER BY note.id_note ASC' , (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

////////GET ALL note////////////////////////////
    MgetNoteByCategory: (namaKategori) => {
        return new Promise((resolve, reject) => {
            conn.query(
                'SELECT note.*,category.category_name,color.color FROM note INNER JOIN category ON note.id_category = category.id_category INNER JOIN color ON category.id_color = color.id_color WHERE category_name = ?' ,namaKategori, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },  
////////GET 1 note////////////////////////////

    MgetByidNote: (idnote) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM note WHERE id_note = ?', idnote, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
//////// POST note ///////////////////////////

    McreateNote: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO note SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

////////  EDIT note ////////////////////////////

    MeditNote: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE note SET ? WHERE id_note = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
//////// DELETE note ////////////////////////////
    MdeleteNote: (id_nya) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM note WHERE id_note = ?', id_nya, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}