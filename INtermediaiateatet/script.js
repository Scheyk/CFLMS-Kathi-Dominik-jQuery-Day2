
let readJSON = function (file) {
	let json = {}
	$.ajax({
	    'async': false,
	    'global': false,
	    'url': file,
	    'dataType': "json",
	    'success': function (data) {
	        json = data;
	    }
	});
	return json;
};

let member = readJSON("member.json")
console.table(member)

let myEventHandler = function () {alert('hello')};
$('a').unbind('click', myEventHandler);
$('a').bind('click', myEventHandler);

for (let i in member){
       	$(".bild:eq("+i+")").append(`<img src="${member[i].img}" >`) // oder als DIV einfügen mit <div><img src.......
	//	$(".text:eq("+i+")").append("<h1>" + member[i].name + "</h1><br>" + member[i].age + "<br>" + member[i].vita)
		}

$("img").on("click", (function() {      

       for (let i in member){       
		$(".text:eq("+i+")").append("<h1>" + member[i].name + "</h1><br>" + member[i].age + "<br>" + member[i].vita)
		} 
    }));





 

/* 
for(i=0; i < member.length; i++) {
    
    $(".bild:eq("+i+")").append("<img src=" +member[i].img+" >");
}  */