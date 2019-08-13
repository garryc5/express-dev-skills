var skills = 
[
    'js',
    'html',
    'css',
    'node',
    'express'
]
module.exports = {
    gitAll,
    gitOne
}
function gitAll(){return skills}
function gitOne(id){
    return [
        skills[id],
        parseInt(id)+1
    ]}