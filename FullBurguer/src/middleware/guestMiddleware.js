function guestMiddleware(req, res, next){
    if(req.session.userLogged){
        console.log('usuario logueado')
    return res.redirect ('/users/profile');
    }
    next();
    }
    
    module.exports= guestMiddleware;
    