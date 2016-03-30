var express = require("express"),
    app = express()

var fs = require('fs'),
    multer  = require('multer'),
    upload = multer({ dest: '/tmp' })

app.get('/', function(req,res){
  
    res.sendFile('/index.html', { root : __dirname}, function(err){
        if (err) throw err
        res.end()
    })
    
})

app.post('/', upload.single('sizeMe'), function (req, res, next) {
    
  res.json({'size': req.file.size})
  var path = req.file.path
  fs.unlinkSync(path) // not actually needed on heroku hosted version due to file clearning on restart
  res.end()
  
})

app.listen(process.env.PORT)



