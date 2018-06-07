module.exports = {
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated())
        {
            return next();
        }
        else
        {
            req.flash('error_msg','Not authorised!');
            res.redirect('/users/login');
        }
    }
}