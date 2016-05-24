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

function savejsToXmlFile (filename, obj, cb) {
    var filepath = path.normalize(path.join(__dirname, filename));
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    fs.writeFile(filepath, xml, cb);    
    console.log('write done');
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // Guid format.
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();


}

router.post('/save',function(req,res,next){
    console.log('posted');
    var obj = req.body.Metaobj;
    console.log("req");
    console.dir(req.params);
    console.dir(req.body.Metaobj);
    console.dir(obj);
    var filepath = '../public/upload/' + 'Metadata-Settings_' +guid() + '.config';
    console.log(filepath);
    savejsToXmlFile(filepath, obj, function (err) {
        if (err) {console.log(err);}
        else{
            console.log('success');
            res.status(200);
        }
    })
});

router.post('/',function(req,res,next){
    console.log('posted1');
    var obj = req.Metaobj;
    var filepath = '../public/upload/' + 'Metadata-Settings_' +guid() + '.config';
    savejsToXmlFile(filepath, obj, function (err) {
        console.log('call back');
        if (err){
            console.log(err);
        } 
        else{
            console.log('success');
            res.status(200);
        }
    })
});

// exports.Save = function(req,res,next){
//     alert('call save');
// };

module.exports = router;


