
var path = require('path'),
  fs = require('fs'),
  Busboy = require('busboy'),
  logger =  require('log4js').getLogger('controllers/resource');

function ResourceController() {

}

ResourceController.getImage = function(req, res, next) {

  var imagePath = path.join(__dirname, '../public/images/', req.params.id);

  res.sendFile(imagePath);
};


module.exports = ResourceController;
