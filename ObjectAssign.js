window.onload=function(){
	    	var obj1={
    		a:100,
    		b:20,
    		c:10
    	}
    	var obj5 = {};
    	for(var i in obj1){
    		obj5[i]=obj1[i];
    	}
    	var obj3=JSON.stringify(obj1);
    	var obj4=JSON.parse(obj3);
    	obj4.a=400
    	obj5.a=500
    	var obj6={};
    	Object.assign(obj6,obj1)
		obj6.a=600;
    	
    	console.log(obj4)
    	console.log(obj5)
    	console.log(obj6)
    	console.log(obj1)
    	
    	var copy=Object.assign({},obj4,obj5,obj6);
    	console.log(copy)
}
