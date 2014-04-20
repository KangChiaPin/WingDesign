# No-BackEnd

## Description
javascript google-Spreadsheet data API application

## Usage
1.	Open your target google spreadsheet (This program will get data from there)
2.	Click File(tool option) > Publish to the web > Start Publish
	depending on your demand publish all worksheet, worksheet1, worksheet2 ... and so on.
3.	You can get the key by the google-spreadsheet on url
	For example, url=https://docs.google.com/spreadsheet/ccc?key=0Ah0oHfzxuzoVdFhTb2ZfeTJDZVNkeGg2TEVUejZ2OFE&usp=drive_web#gid=0
	then the key is the string "0Ah0oHfzxuzoVdFhTb2ZfeTJDZVNkeGg2TEVUejZ2OFE"
4.	Use <script src="[path to noBackEnd.js]"></script> in your html file

## Available Functions
1.	get_docs( key )
	Parameter: The key of the spreadsheet
	Return: Return an 3-dimension array
			data[worksheet][rows][cols] would be the cell in googlespreadsheet

## Open
1.	Test that if this program still work with current spreadsheet
2.	Add an example code if necessary (With a public-editable sheet)
3.	Function of adding data to the sheet
4.	How about let the parameter be url rather than key?

## Close

<!--
vi:ts=4:st=4:nowrap
-->
