var express = require('express')
var app = express()



app.get('/',function(req, res) {
    res.sendFile('/index.html', { root : __dirname}, function(err){
        if (err) throw err
        res.end()
    })
   
})

app.listen(process.env.PORT)