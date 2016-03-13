var fs = require('fs');
var obj = require('./list.json');
var content = '# 2016 Web Development Conferences\nA list of 2016 web development conferences.\n';

obj.forEach(function(conference) {
  content += '\n## [' + conference.title + '](' + conference.url + ')\n';
  content += '**Where:** ' + conference.where + '\n\n';
  content += '**When:** ' + conference.when + '\n\n';
});

fs.writeFile('./README.md', content, function (err) {
  if (err) throw err;
});

