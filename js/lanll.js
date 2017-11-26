/*
            //自动切换到下一格
            <input type="text" placeholder="input" class="ipt">
            <input type="text" placeholder="input" class="ipt">
            <input type="text" placeholder="input" class="ipt">
            <input type="text" placeholder="input" class="ipt">
*/
function tabNext() {
    let ipt = document.getElementsByClassName('ipt');
    document.getElementById('btn').addEventListener('click', function() {
        console.log(ipt[3].value)
        ipt[4].focus();
    })
    let index = 0;
    for (let i = 0; i < ipt.length; i++) {
        ipt[i].addEventListener('keyup', function() {
            if (ipt[i].value != 0 && i != 5) {
                ipt[i + 1].focus();
            } else if (i == 5) {
                document.getElementById('ipt1').focus();
            }
        })

    }
}
/**
 * 设置随机颜色方框
 *      #box {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .cycle {
            margin: 5px;
            width: 100px;
            height: 100px;
            background: lightcoral;
            border-radius: 50%;
        }
        <div id="box">
        <i class="cycle"></i>
        <i class="cycle"></i>
        <i class="cycle"></i>
        <i class="cycle"></i>
    </div>
 */
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

function setBg() {
    document.getElementById('box').addEventListener('click', function() {
        let cycle = document.getElementsByClassName('cycle');
        for (let i = 0; i < cycle.length; i++) {
            cycle[i].style.background = setColor();
        }
    })
}

//提取urlkey
function urlToObj(url) {
    var str1 = url.split('?')[1].split('&');
    var js = {};
    for (var i = 0; i < str1.length; i++) {
        console.log(str1[i].split('=')[0])
        js[str1[i].split('=')[0]] = str1[i].split('=')[1];
    }
    return js;
}

// 获取时间
var myDate = new Date();
myDate.getYear(); //获取当前年份(2位)
myDate.getFullYear(); //获取完整的年份(4位,1970-????)
myDate.getMonth(); //获取当前月份(0-11,0代表1月)
myDate.getDate(); //获取当前日(1-31)
myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours(); //获取当前小时数(0-23)
myDate.getMinutes(); //获取当前分钟数(0-59)
myDate.getSeconds(); //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString(); //获取当前日期
var mytime = myDate.toLocaleTimeString(); //获取当前时间
myDate.toLocaleString();


// var num=1250;
// var mon=8000;
// for(var i=1;i<100;i++){
// 	console.log('today is  '+i)
// 	console.log(num-=40)
// 	if(i%31==0){
// 		console.log('++++++++++++++++++++++++')
// 		mon-=2000
// 		console.log("still  "+ mon)
// 		num+=1400
// 	}
// }

function getTime() {
    var myDate = new Date();
    return myDate.toLocaleTimeString();
}
console.log('时间：  ' + getTime())

function calc(cb, cb1, cb2) {
    (function() {
        cb();
    })();
}

function log() {
    console.log('str');
}
// calc(log);