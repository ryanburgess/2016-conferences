'use strict';
const fs = require('fs');
const obj = require('./list.json');
const Rx = require('rx');
let content = '# 2016 Web Development Conferences\nA list of 2016 web development conferences.\n\n';

const contribute = ('## Contributing \n' +
'1. Fork it\n' +
'2. Run `npm install`\n' +
'3. Add your conference to `list.json`\n' +
'4. Run `node index` to update `README.md` with your changes\n' +
'5. Create your feature branch (`git checkout -b my-new-feature`)\n' +
'6. Commit your changes (`git commit -am "Add some feature"`)\n' +
'7. Push to the branch (`git push origin my-new-feature`)\n' +
'8. Create new Pull Request');

content += contribute + '\n';

content += '\n#Conference List\n';

const Observable = Rx.Observable;
Observable.from(obj).subscribe(conference => {
  content += (
    `\n## [${conference.title}](${conference.url})
**Where:** ${conference.where}
**When:** ${conference.when}\n\n`
  );
});

fs.writeFile('./README.md', content, function (err) {
  if (err) throw err;
  console.log('Updated conference list');
});