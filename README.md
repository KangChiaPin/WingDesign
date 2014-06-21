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
	Return: Return an array of array of object
			data[worksheet][rows][col_name] would be the cell in googlespreadsheet
			the col_name is determined by the first row in worksheet
			for example, if one google spreadsheet have two worksheet like this:
			1st worksheet:
			|     ||  A  |  B  | ... |
			==========================
			|  1  ||  id | name| ... |
			|  2  ||  1  | aa  | ... |
			|  3  ||  2  | bb  | ... |

			2nd worksheet:
			|     ||  A  |  B  | ... |
			==========================
			|  1  ||col1 |col2 | ... |
			|  2  ||  1  | cc  | ... |
			|  3  ||  2  | dd  | ... |

			The returned array would be:
			{
				[
					{id:'1', name:'aa', ... },
					{id:'2', name:'bb', ... }
				],
				[
					{col1:'1', col2:'cc', ...},
					{col1:'2', col2:'dd', ...}
				]
			}
	****Notice that if there are dulplex column names, the col_name of output will be modified as XXX, XXX_2, XXX_3, ... 
		You can prevent this by setting an unique column name in a worksheet. 
## Open
2.	Add an example code if necessary (With a public-editable sheet)
3.	Function of adding data to the sheet

## Close
1.	Test that if this program still work with current spreadsheet
	> create sheet with old-version url (Use http://g.co/oldsheets)

<!--
vi:ts=4:st=4:nowrap
-->
