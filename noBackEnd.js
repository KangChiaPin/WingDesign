function get_docs ( key ) {
	var url = "https://spreadsheets.google.com/feeds/worksheets/" + key + "/public/values";
	var result = [];
	$.ajax({
		url: url, context: document.body, dataType: 'xml', async: false, cache: false,
		error: function( state, err ){ alert( 'key is accessable! ' + err ); },
		success: function( xml ){ 
			var worksheet = new Array();
			var worksheetCounter = 0;
			var xml = $( xml ).find('entry').each(function(){
				var linkCounter = 0;
				worksheet[worksheetCounter++] = $(this).children('link').attr('href');
				linkCounter++;
			});
			for( var i = 0; i < worksheet.length; i++ ) { result[i] = get_worksheets( worksheet[i] ); }
		}
	})
	return result;
}
function get_worksheets ( url ) {
	if( typeof(url) != 'string' ) return;
	var result = [];
	$.ajax({
		url: url, context: document.body, dataType: 'xml', async: false, cache: false,
		error: function( state, err ){ alert( 'Make sure worksheet is published! ' + err ); },
		success: function( xml ){ 
			var rowsCounter = 0;
			$( xml ).find('entry').each( function(){
				var rows = new Array();
				var colCounter = 0;
				$(this).children().each( function(){
					var data = $(this);
					if ( 0 == data[0].tagName.indexOf('gsx:') ) { rows[colCounter++] = data.text(); }
					else return;
				});
				result[rowsCounter++] = rows;
			});

		}
	});
	return result;
}
