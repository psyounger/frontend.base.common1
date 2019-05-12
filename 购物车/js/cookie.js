function setcookie(key,value,expires,path){
	console.log(22222)
	expires=expires||0;
	path=path||"/";
	var str=key+"="+value+"; "
	if(expires>0){
		console.log("11");
		var now=new Date();
		now.setDate(now.getDate()+expires);
		str+="expires="+now+"; ";
	}
	str+="path="+path+"; ";
	return str;

}
function getcookie(key){
	 var str=document.cookie.split("; ");
	 var arr=[];
	 for (var i = 0; i < str.length; i++) {
	 	  var arr1= str[i].split("=");
		  if(arr1[0].indexOf(key)!=-1){
			  arr.push(arr1[1]);
		  }
	 } 
	 return arr;
}
function getelementclassname(classname){
	var all=document.getElementsByTagName("*");
	var list=[];
	for (var i = 0; i < all.length; i++) {
		var ClassName =all[i].className.split(" ");
		for (var j = 0; j < ClassName.length; j++) {
			if(ClassName[j]==classname){
				list.push(all[i]);
				break;
			}
		}
	}
	return list;
	
}
