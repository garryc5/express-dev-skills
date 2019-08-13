var skills = require('../models/skills');

function index(req, res) {
    res.render('skills/index',{skills : skills.gitAll()})
}
function show(req,res){
    res.render('skills/show',{skills : skills.gitOne(req.params.id)} );
}
module.exports = {
      index,
      show
  }