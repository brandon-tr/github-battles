var name = require('../controllers/note.js')

var note = require('./../controllers/note.js')

module.exports = function(app){
    app.post('/quotes/new', (req, res, next)=>{
        note.create(req, res)
    })
    app.get('/allQuotes', function(req, res, next){
        note.show(req, res)
    });
}