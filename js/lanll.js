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