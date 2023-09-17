const path = require('path');
let fs = require('fs');


const listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
const User={
findByPk: function (id){
    const userEncontrado = listaUsuarios.find(oneUser => oneUser.id== id);
    return userEncontrado;
},
findByField: function (field, text){
    const userEncontrado = listaUsuarios.find(oneUser => oneUser[field] === text);
    return userEncontrado;
},
delete: function(id){

let finalUsers = listaUsuarios.filter(oneUser => oneUser.id !=id);
fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(finalUsers, null, 2), 'utf-8');
return true;
}

}


//console.log(User.delete());
module.exports = User;