if(process.env.NODE_ENV === 'production')
{
    module.exports = {
        mongoURI:'mongodb://<dbusername>:<dbpassword>@ds251240.mlab.com:51240/reformit'
    }
}
else
{
    module.exports = {
        mongoURI:'mongodb://localhost/reformITdev'
    }
}