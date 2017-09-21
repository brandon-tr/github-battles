var express = require('express')
var bodyParser = require("body-parser")
var path = require('path')

var app = express();

require('./Server/config/mongoose.js')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname , "./NoteAngular/dist")))


var routeSetter = require('./Server/config/routes.js')
routeSetter(app)

var server = app.listen(4200, function(){
    console.log("listening")
})