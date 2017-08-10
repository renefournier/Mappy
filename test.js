
var fs = require('fs');

var filename = '/Users/rene/Sites/__Imperium/Mappy/node_modules/mappy-styles/fonts/KlokanTech Noto Sans Bold/64512-64767.pbf';

fs.readFile(filename, function(err, data) {
  console.error (err);
  console.log (data.length);
});
