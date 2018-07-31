if(process.env.NODE_ENV === 'production')
{
    module.exports = {
        mongoURI:'mongodb://db_user:db_password@ds251240.mlab.com:51240/reformit'
    }
}
else
{
    module.exports = {
        mongoURI:'mongodb://localhost/reformITdev'
    }
}