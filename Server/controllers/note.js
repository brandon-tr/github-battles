var mongoose = require('mongoose')
var Github = mongoose.model('Github')

module.exports = {
    create1: function(req, res) {
        Github.find({name: req.body.name}, function(err, user){
            if (user.length > 0) {
                Github.update({name:req.body.name}, {score: req.body.score}, function(err){
                    console.log(err)
                })
            }else{
                var github = new Github(req.body);
                github.save(function(err){
                    console.log(err)
                })
            }
        })
    },
    create2: function(req, res) {
        Github.find({name: req.body.name}, function(err, user){
            if (user.length > 0) {
                Github.update({name:req.body.name}, {score: req.body.score}, function(err){
                    console.log(err)
                })
            }else{
                var github = new Github(req.body);
                github.save(function(err){
                    console.log(err)
                })
            }
        })
    },
    find: function(req, res) {
        Github.find({}, function(err, user){
            res.json(user)
        })
    }
}
