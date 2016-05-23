var express = require('express');
var router = express.Router();


var fs = require('fs');
var xml2js=require('xml2js') ;
var path = require('path');


/* GET users listing. */
router.get('/', function(req, res, next) {
	readXMl2json('../public/upload/Metadata-Settings.config', function (err, obj) {
    if (err) throw (err);
    console.dir(obj);
    res.send(JSON.stringify(obj));
    // jsToXmlFile('./Metadata-Settings.js', obj, function (err) {
    //     if (err) console.log(err);
    // })
});
  
});

function readXMl2json (filename, cb) {
    var filepath = path.normalize(path.join(__dirname, filename));
    fs.readFile(filepath, 'utf8', function (err, xmlStr) {
        if (err) throw (err);
        xml2js.parseString(xmlStr, {}, cb);
    });    
}

module.exports = router;
