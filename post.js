var DataKey = "0AsPefJI-LLcmdGtwc0ZRRmhWUG1USEZ3MWpJVEZZeHc";

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
		div.className = 'seg';
		div.innerHTML += "<div class=\"bar\"</div>"

			for(var l in arr[k]){	
			//	console.log("l:"+l);
				var title = arr[k][l].title;
				var content = arr[k][l].content;
				//console.log(title+":"+content);
				if(title=="name"){
					div.innerHTML += "<div class=\"title\">" + content + "</div>" 
				}	
				if(title=="description"){
					div.innerHTML += "<div class=\"content\">"+ content + "</div>";
				}
				document.getElementById("container").appendChild(div);	
				//$(div).hide();
			}
	}
}

function styleBar(){
	$(".bar").css("height","20px");
	$(".bar").css("background-color","black");
	$(".bar").css("color","white");
}
