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