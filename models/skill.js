const skills = [
    {id: 123456, skill: 'Javascript', learned: true},
    {id: 654321, skill: 'HTML', learned: true},
    {id: 246810, skill: 'CSS', learned: true},
    {id: 135791, skill: 'node.js', learned: true},
    {id: 315267, skill: 'express', learned: true},
    {id: 321345, skill: 'mongoDB', learned: true},
    {id: 234252, skill: 'python', learned: false},    
  ];

  // function
  function getAll(){
    return skills;
  }

  function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1);
  }
  
  function updateOne(newSkill){
    skills.skill = newSkill
  }
  // object
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  }