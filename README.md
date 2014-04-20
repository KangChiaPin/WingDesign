#Usage: javascript google-Spreadsheet data API application



#There are two precautions you have to know

#1.
#before you use this function, click tool option (File > publish to the Web > start publish) will be necessary
#depending on your demand publish all worksheet, worksheet1, worksheet2 ... and so on.

#2.
#You can get the key by the google-spreadsheet on url
#For example, url=https://docs.google.com/spreadsheet/ccc?key=0Ah0oHfzxuzoVdFhTb2ZfeTJDZVNkeGg2TEVUejZ2OFE&usp=drive_web#gid=0,
#then key is the string "0Ah0oHfzxuzoVdFhTb2ZfeTJDZVNkeGg2TEVUejZ2OFE"



import noBackEnd.js

var data = get_docs( key )

#get_docs( key ) would return an 3-dimension array
# data[worksheet][rows][cols] would be the cell in googlespreadsheet