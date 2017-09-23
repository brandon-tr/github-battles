var name = require('../controllers/note.js')
var path = require('path')
var github = require('./../controllers/note.js')

module.exports = function(app){
    app.post('/addPlayer1', function(req, res){
        github.create1(req, res)
    })
    app.post('/addPlayer2', function(req, res){
        github.create2(req, res)
    })
    app.get('/getUsers', function(req, res){
        github.find(req, res);
    })
    app.get('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, './../../GithubAngular/dist/index.html'))
    })
}