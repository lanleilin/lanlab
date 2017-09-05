// 1  Array的map()方法，给每个元素进行一方法，得到一个新的Array作为结果
	function pow(x) {
	    return x * x;
	}
	
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//	2  reduce()把结果继续和序列的下一个元素做累积计算
//	求和
	var arr1 = [1, 3, 5, 7, 9];
	var ar = arr1.reduce(function(x, y) {
		return x + y;
	}); // 25
	console.log(ar)
	
	var arr2 = [1, 3, 5, 7, 9];
	arr2.reduce(function(x, y) {
		return x * 10 + y;
	}); // 13579
	
//	3  filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
	//把一个Array中的空字符串删掉
	var arr = ['A', '', 'B', null, undefined, 'C', '  '];
	var r = arr.filter(function (s) {
	    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
	});
	r; // ['A', 'B', 'C']
	//删掉偶数，只保留奇数
	var arr = [1, 2, 4, 5, 6, 9, 10, 15];
	var r = arr.filter(function (x) {
	    return x % 2 !== 0;
	});
	r; // [1, 5, 9, 15]
	//4 sort
	var arrSort = [10, 20, 1, 2];
	arrSort.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]

//闭包延迟执行
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
f()//15
