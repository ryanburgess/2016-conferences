var fs = require('fs');
var content = '';

fs.readFile('./list.json', 'utf8', function (err, data) {
  if (err) throw err;
  var obj = JSON.parse(data);

  for (var key in obj) {
    content += '\n## [' + obj[key].title + '](' + obj[key].url + ')\n';
    content += '**Where:** ' + obj[key].where + '\n\n';
    content += '**When:** ' + obj[key].when + '\n\n';
  }

  fs.appendFile('./README.md', content, function (err) {
    if (err) throw err;
  });
});