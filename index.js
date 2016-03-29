var fs = require('fs')
var express = require('express')
var multer  = require('multer')
var upload = multer({ 
    dest: 'uploads',
    })
 
var app = express()

app.post('/', upload.single('sizeMe'), function (req, res, next) {
  res.json({'size': req.file.size})
  var path = req.file.path
  fs.unlinkSync(path)
  res.end()
})

app.get('/',function(req, res) {
    res.sendFile('/index.html', { root : __dirname}, function(err){
        if (err) throw err
        res.end()
    })
})

app.listen(process.env.PORT)