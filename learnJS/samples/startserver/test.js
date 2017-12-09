var fs = require('fs');
// fs.readFile('test.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// })
// fs.readFile('test.png', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + 'bytes')
//         var text = data.toString();
//         console.log(text);
//     }
// })
var data = 'ours is the fury';
fs.writeFile('output/output.txt', data, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok')
    }
})