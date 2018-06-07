if(process.env.NODE_ENV === 'production')
{
    module.exports = {
        mongoURI:'mongodb://ashwin_10_3:jawhar12345!@ds251240.mlab.com:51240/reformit'
    }
}
else
{
    module.exports = {
        mongoURI:'mongodb://localhost/reformITdev'
    }
}