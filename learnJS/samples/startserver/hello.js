let  fs = require('fs');
let  join = require('path').join;
var path = require('path');
/**
 * 
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
    var filePath = path.resolve(__dirname + pathName);
fs.stat(filePath,(err,stats)=>{
	if(!err && stats.isDirectory()){
		console.log(stats)
	}
})
function findSync(startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        // console.log(files)
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(fPath);
        });

    }
    finder(startPath);
    // console.log(result)
    return result;
}
let fileNames=findSync('./');