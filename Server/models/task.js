var mongoose = require('mongoose')

var GithubSchema = new mongoose.Schema({
    name:{type:String, required:true},
    picture:{type:String, required:true},
    score:{type:Number, required:true}
},{timestamps:true})

var Github = mongoose.model('Github', GithubSchema)