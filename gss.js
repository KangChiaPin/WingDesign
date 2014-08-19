function gss(key){
	this.key = key;
}

gss.prototype.get_docs_array = function(){
	var response = this.get_docs();
	var array = arrayOf(response[1]);
//	console.log(array);
	return array;
}

function arrayOf(hash){
	var arr = [];
	for(var k in hash){
		//		console.log("k:"+k);
		arr.push(hash2Array(hash[k]));
	}

	return arr;
}

function hash2Array( input ){
	var output = [],item;
	input = input;
	for (var type in input) {
		item = {};
		item.title = type;
		item.content = input[type];
		output.push(item);
//		console.log(item.title + " : " + item.content);
	}
	return output;
}

gss.prototype.get_docs = function() {
	var key = this.key;

	var result = [];
	$.ajax({
		url: "https://spreadsheets.google.com/feeds/worksheets/" + key + "/public/values", 
		context: document.body, dataType: 'xml', async: false, cache: false,
		error: function( state, err ){ alert( 'key is accessible! ' + err ); },
		success: function( xml ){ 
			var worksheet = [];
			var worksheetCounter = 0;
			var xml = $( xml ).find('entry').each(function(){
				//var linkCounter = 0;
				worksheet[worksheetCounter++] = $(this).children('link').attr('href');
				//linkCounter++;
			});
			for( var i = 0; i < worksheet.length; ++i ) { result[i] = get_worksheets( worksheet[i] ); }
		}
	})
	return result;
}

function get_worksheets ( url ) {
	if( 'string' != typeof(url) ) return;
	var result = [];
	$.ajax({
		url: url, context: document.body, dataType: 'xml', async: false, cache: false,
		error: function( state, err ){ alert( 'Make sure worksheet is published! ' + err ); },
		success: function( xml ){ 
			var rowsCounter = 0;
			$( xml ).find('entry').each( function(){
				var rows = {};
				var colCounter = 0;
				$(this).children().each( function(){
					var data = $(this);
					if ( 0 == data[0].tagName.indexOf('gsx:') ) { rows[data[0].tagName.substring(4)] = data.text(); }
				});
				result[rowsCounter++] = rows;
			});
		}
	});
//	console.log(result);
	return result;
}
