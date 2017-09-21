var mongoose = require('mongoose')
var Note = mongoose.model('Note')

module.exports = {
    create: function(req, res) {
        var note = new Note(req.body)
        note.save(function(err) {
            console.log(err)
        })
    },
    show: function(req, res) {
        Note.find({}, function(err, user){
            res.json(user);
        })
    }
}