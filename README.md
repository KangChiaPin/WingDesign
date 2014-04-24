# No-BackEnd

## Description
javascript google-Spreadsheet data API application

## Usage
1.	Create your google spreadsheet in this url http://g.co/oldsheets (Important!!!)
	> This will create the sheet in old version
2.	Click File(tool option) > Publish to the web > Start Publish
	depending on your demand publish all worksheet, worksheet1, worksheet2 ... and so on.
3.	You can get the key by the google-spreadsheet on url
	> https://docs.google.com/spreadsheet/ccc?key=[the_key_here]&usp=drive_web#gid=0
4.	Use <script src="[path to noBackEnd.js]"></script> in your html file

## Available Functions
1.	get_docs( key )
	Parameter: The key of the spreadsheet
	Return: Return an 3-dimension array
			data[worksheet][rows][cols] would be the cell in googlespreadsheet

## Open
2.	Add an example code if necessary (With a public-editable sheet)
3.	Function of adding data to the sheet

## Close
1.	Test that if this program still work with current spreadsheet
	> create sheet with old-version url (Use http://g.co/oldsheets)

<!--
vi:ts=4:st=4:nowrap
-->
