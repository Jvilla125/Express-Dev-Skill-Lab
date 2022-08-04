const Skill = require('../models/skill');


function index(req, res){
    res.render('skills/index.ejs',{
        skills: Skill.getAll(),
        time: req.time
    });
};

function show(req, res){
    res.render('skills/show.ejs', {
        skill: Skill.getOne(req.params.id)
    });
};

function newSkill(req, res){
    res.render('skills/new.ejs');
}

function create(req, res){
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function updateSkill(req,res){
    Skill.updateOne(req.body);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update: updateSkill
};