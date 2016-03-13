const fs = require('fs');
const obj = require('./list.json');
const Rx = require('rx');
var content = '# 2016 Web Development Conferences\nA list of 2016 web development conferences.\n';

const Observable = Rx.Observable;
Observable.from(obj).subscribe(conference => {
  content += '\n## [' + conference.title + '](' + conference.url + ')\n';
  content += '**Where:** ' + conference.where + '\n\n';
  content += '**When:** ' + conference.when + '\n\n';
});

fs.writeFile('./README.md', content, function (err) {
  if (err) throw err;
  console.log('Updated conference list');
});