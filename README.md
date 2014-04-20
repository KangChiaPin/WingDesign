#Usage: javascript google-Spreadsheet data API application




#before you use this function
#click tool option: File > publish to the Web > start poblish will be necessary
#depending on your demand poblish all worksheet, worksheet1, worksheet2 ... and so on.



import noBackEnd.js

var data = get_docs( key )

#get_docs( key ) would return an 3-dimension array
# data[worksheet][rows][cols] would be the cell in googlespreadsheet