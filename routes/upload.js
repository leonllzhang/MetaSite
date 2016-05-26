var photos = [];

var path = require('path');
var fs = require('fs');
var join = path.join;


exports.submit = function(dir){
	return function(req,res,next){
		console.log('req');
		req.pipe(req.busboy);
		var fstream;
		console.log('file extract start');
		req.busboy.on('file',function(fieldname,file,filename){
			console.log("filename: " + filename);
			console.log("file: " + file);
			console.log("fieldname: " + fieldname);
			console.log("dir:"+dir);
			console.log("dirname:"+__dirname);
			fstream = fs.createWriteStream(dir +'/'+ filename);
			file.pipe(fstream);
			fstream.on('close',function(){
				// Photo.create({
				// 	name:  filename,
				// 	path: filename
				// });
				//fs.rename();
				res.redirect('/load');
			});
			//var img = file.photo.image;
			//var path = join(dir,img.name);
			//fstream = fs.rename()
		});		
		 // var img = req.files.photo.image;
		 // console.log(img.name);
		// var name = req.body.photo.name || img.name;
		// console.log(name);
		// var path = join(dir,img.name);
		// console.log(path);
		// fs.rename(img.path,path,function(err){
		// 	if (err) return next(err);

		// 	Photo.create({
		// 		name:name,
		// 		path:img.name
		// 	},function(err){
		// 		if (err) return next(err);
		// 		res.redirect('/');
		// 	});
		// });
	};
};

// exports.list = function(req,res,next){

// 	// res.render('photos',{
// 	// 	title: 'photos',
// 	// 	photos: photos
// 	// });
// 	Photo.find({},function(err,photos){
// 		if (err) return next(err);
// 		res.render('photos',{
// 			title:'Photos-hahahah',
// 			photos:photos
// 		});
// 	});

// };

// exports.form = function(req,res){
// 	res.render('photos/upload',{
// 		title: 'photos upload'
// 	});
// };