/**
 * Created by dev on 11/27/15.
 */
var fs = require('fs');
//var filepath = 'c:\/testin.xml';
//var test = '/home/dev/node file io/docs/1Chronicles.json';
//var obj = JSON.parse(fs.readFileSync(test, 'utf8'));
//temp = fs.readFileSync('./bible/kjv/' + tmpPathFrom + '.json');

var bible_books = fs.readFileSync('./bible/Books.json');
bible_books = JSON.parse(bible_books);
console.log(bible_books[8]);

//JSON.stringify(j);

//var temp = '';

//var tmpPathFrom = '';
//var tmpPathTo = '';
//tmpPathFrom = './bible/kjv/' + bible_books[i].replace(/\s/g, '') + '.json';
//tmpPathTo = './bibleNew/kjv/' + bible_books[i].replace(/\s/g, '') + '.json';

for (var i = 0; i < bible_books.length; i++) {

   var tempName = bible_books[i].replace(/\s/g, '');

   var temp = fs.readFileSync('./bible/kjv/' + tempName + '.json');

    temp = JSON.parse(temp);

    temp = JSON.stringify(temp);

    temp = temp.replace(/2019/g, "&#039;");

    fs.writeFileSync('./bibleNew/kjv/' + tempName + '.json', temp);

}

console.log("Complete you should go check to make sure it all went down ok");

/*
fs.readFile('./bible/kjv/' + temp + '.json', 'utf8', function (err, data) {
    if (err) {
        console.error("Could not open file: %s", err);
        return;
    }

    console.log(typeof data);

    data = data.replace(/2019/g, "&#039;");

    fs.writeFile('./bibleNew/kjv/' + temp + '.json', data, function (err) {
        if (err) {
            console.error("Could not write file: %s", err);
        }
    });
});*/




/*    fs.writeFile('./bibleNew/kjv/' + tmpPathFrom + '.json', temp, function (err) {
 if (err) {
 console.error("Could not write file: %s", err);
 }
 });*/


/*
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
 });*/
