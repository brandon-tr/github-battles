var mongoose = require('mongoose')

var NoteSchema = new mongoose.Schema({
    quote:{type:String, required:true},
},{timestamps:true})

var Note = mongoose.model('Note', NoteSchema)