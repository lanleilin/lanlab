function id(id) {
    return document.getElementById(id)
}
// 设置随机颜色
function setColor() {
    this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    this.color = '#' +
        this.arr[parseInt(Math.random() * 16)] +
        this.arr[parseInt(Math.random() * 16)] +
        this.arr[parseInt(Math.random() * 16)] +
        this.arr[parseInt(Math.random() * 16)] +
        this.arr[parseInt(Math.random() * 16)] +
        this.arr[parseInt(Math.random() * 16)];
    return this.color;
}
//获取url key

function urlToObj(url) {
    var str1 = url.split('?')[1].split('&');
    var js = {};
    for (var i = 0; i < str1.length; i++) {
        console.log(str1[i].split('=')[0])
        js[str1[i].split('=')[0]] = str1[i].split('=')[1];
    }
    return js;
}
console.log(urlToObj(url))