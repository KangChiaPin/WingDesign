var DataKey = "0AsPefJI-LLcmdFpCSm53aVZ4OVE5cDgxZ2FqYUtlcnc";

var gss = new gss(DataKey);

function browseDataFromSpreadSheet(){

	renderData(gss.get_docs_array());

	styleBar();
}

function renderData(arr){
	console.log(arr);
	for(var k in arr){
		var id = "data_" + k;
		var div = document.createElement('div');
		//console.log(div);
		div.id = id;
		div.className = 'col-md-4';
		//div.innerHTML += "<div class=\"bar\"></div>"

		var check;

		for(var l in arr[k]){	
			//	console.log("l:"+l);
			var title = arr[k][l].title;
			var content = arr[k][l].content;
			console.log(title+":"+content);

			if(title=="title"){
				div.innerHTML += "<div class=\"bar\">" + content + "</div>" 
			}	
			if(title=="content"){
				div.innerHTML += "<div class=\"content\">"+ content + "</div>";
			}
			if(title=="check"){
				if(content!=0){
					document.getElementById("container").appendChild(div);	
					console.log(content);
				}
			}
			//$(div).hide();
		}
	}
}

function styleBar(){
	$(".bar").css("height","20px");
	$(".bar").css("background-color","black");
	$(".bar").css("color","white");
}
