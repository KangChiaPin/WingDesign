var memberKey = "0AsPefJI-LLcmdEl5X3hoQTJVYWRoM0ZWdnlpNGtmWGc";

var gss = new gss(memberKey);

$("login").submit(function(){
	var memberInfo = getMemberInfo();

	memberCheck(memberInfo);
});

function getMemberInfo(){
	var name = $("form input[name='name']:text").val();
	var pwd = $(":password");

	var memberInfo;

	memberInfo.userName = name;
	memberInfo.password = pwd;

	return memberInfo;
}

function memberCheck(memberInfo){
	if(memberFound(gss.get_docs_array(),memberInfo)){
		return true;
	}
	else{
		return false;
	}
}

function memberFound(memberArray,memberInfo){
	var name = memberInfo.userName;
	var pwd = memberInfo.password;

	for(var i in memberArray){
		if(memberArray.userName==name){
			if(memberArray.password==pwd){
				//correct
				console.log(name + " found");
				return true;
			}
			else{
				console.log("wrong password!");
				return false;
			}
		}
		else{
			console.log("user not found!");
			return false;
		}
	}
}
