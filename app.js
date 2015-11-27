/**
 * Created by dev on 11/27/15.
 */
var fs = require('fs');
var filepath = 'c:\/testin.xml';
var test = '/home/dev/node file io/docs/1Chronicles.json';

//var obj = JSON.parse(fs.readFileSync(test, 'utf8'));

fs.readFile(test, 'utf8', function(err, data) {
    if(err) {
        console.error("Could not open file: %s", err);
        return;
    }

    data = data.replace(/2019/g, "&#039;");

   // data = JSON.parse(data);

   // console.log(data.chapters[0].verses[18]);

    fs.writeFile('./1Chronicles.json', data, function(err) {
        if(err) {
            console.error("Could not write file: %s", err);
        }
    });
});