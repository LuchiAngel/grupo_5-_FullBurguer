function isAdmin (req, res, next) {
    
    const user = req.session.userLogged;
  
   
    if (user && user.id_roles === 1) {
     
      next();
    } else {
     
      res.status(403).send('Usted no tiene permiso de administrador');
    }
  }
  module.exports=isAdmin