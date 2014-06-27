var key = "1J_AyebBzj-IqfxUutUBgqHnOCFPTUjrS82VZlHqnsRQ"; 

$(document).ready(function(){
	var response = parseSheet(key);
	console.log(response);
	for(var k in response){
		//		console.log("k:"+k);

		var id = "data_" + k;
		var div = document.createElement("div");
		div.id = id;
		for(var l in response[k]){
			div.innerHTML += response[k][l].title + " : " + response[k][l].content + " , ";
		}
		div.innerHTML += "\n";
		document.getElementById('container').appendChild(div);
	}
});
//note:Don't use Chrome!
function parseSheet(key){
	var result = [];
	$.ajax({
		url:"https://docs.google.com/spreadsheets/d/"+ key +"/pubhtml",
		context: document.body, dataType: 'html', async: false, cache: false,
		success: function( data ) {
			//	$( "#container" ).html( data );
			var tr = $(data).find('tr');
			var stuff = [];
			var title = [];

			var length = $(tr).length;
			for(var i = 1;i < length ; i++){
				tr.eq(i).find('td').each(function( index ){
					//		title[index].push($(this).text());
					if(i==1){
						title.push($(this).text());
					}

					stuff.push($(this).text());
				});
			}
			console.log(stuff);

			result = arrangeArray(title,stuff);
		}
	});
	//	console.log(result);
	return result;
}

function arrangeArray(title,content){
	var result = [];
	var portion = [];	
	var tmp = [];
	var classAmount = title.length;
	var contentLength = content.length;

	var startPoint = classAmount * 2;
	//	console.log(title);
	for(var i  = startPoint;i<content.length;i++){
		var node = new Object();

		node.title = title[i%classAmount];
		node.content = content[i];
		if(i%classAmount == 0){
			result.push(portion);
			portion = [];
			portion.push(node);
		}
		else{
			portion.push(node);
		}
	}
	result.shift();
	return result;
}
