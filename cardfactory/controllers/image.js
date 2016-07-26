
var path = require('path'),
  fs = require('fs'),
  Busboy = require('busboy'),
  logger =  require('log4js').getLogger('controllers/images');

var FILE_UPLOAD_SIZE_LIMIT = 20 * 1024 * 1024;

function ImageController() {

}

ImageController.getImage = function(req, res, next) {
  var imageName = req.params.name;
  var imagePath = path.join(__dirname, '../upload', imageName);

  res.sendFile(imagePath);
};

ImageController.checkFileSize = function(req, res, next) {
  if (parseInt(req.headers['content-length']) > FILE_UPLOAD_SIZE_LIMIT) {
    res.status(400).send({
      msg: "File size limit error!"
    });
  } else {
    next();
  }
};

ImageController.upload = function (req, res) {
  var busboy = new Busboy({ headers: req.headers });
  var savedFileName, saveTo;

  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    savedFileName = new Date().getTime() + "_" + filename;
    saveTo = path.join(__dirname, '../upload', savedFileName);
    logger.debug('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    logger.debug("SAVE PATH:", saveTo);
    file.pipe(fs.createWriteStream(saveTo));
  });
  busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
    logger.debug('Field:' + fieldname);
  });
  busboy.on('finish', function () {
    logger.debug('End:', savedFileName);
    res.set('Content-type', 'text/html; charset=utf-8');
    res.writeHead(200, { 'Connection': 'close' });
    res.write(JSON.stringify(savedFileName));
    res.end();
  });

  return req.pipe(busboy);
};

module.exports = ImageController;
