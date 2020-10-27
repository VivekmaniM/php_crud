function RegisterUser(userName, firstName, lastName, password, callback){
	var userData = 'username=' + userName + '&firstname=' + firstName + '&lastname=' + lastName + '&password=' + password;
	
	$.ajax({
		url: 'http://localhost:8083/queries/insert_user.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}

function GetUserData(userName, pageName, callback){
	var userData = 'userName=' + userName + '&pageName=' + pageName;
	
	$.ajax({
		url: 'http://localhost:8083/queries/get_user.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(JSON.parse(data));
		},
		error: function(data){
			callback(data);
		}
	})
}

function UpdateProfileImage(userName, imageUrl, callback){
	var userData = 'userName=' + userName + '&imageUrl=' + imageUrl;
	
	$.ajax({
		url: 'http://localhost:8083/queries/update_profile_image.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}


function UpdateUserInfo(userName, firstName, lastName, callback){
	var userData = 'userName=' + userName + '&firstName=' + firstName + '&lastName=' + lastName;
	
	$.ajax({
		url: 'http://localhost:8083/queries/update_user_info.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}

function InsertNews(headline, content, username, image, callback){
	var userData = 'headline=' + headline + '&content=' + content + '&username=' + username + '&image=' + image;
	
	$.ajax({
		url: 'http://localhost:8083/queries/insert_news.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}

function GetAllNews(callback){
	var userData = '';
	
	$.ajax({
		url: 'http://localhost:8083/queries/getall_news.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(JSON.parse(data));
		},
		error: function(data){
			callback(data);
		}
	})
}

function GetNewsByHeadline(headline, callback){
	var newsData = 'headline=' + headline;
	
	$.ajax({
		url: 'http://localhost:8083/queries/getnews_headline.php',
		type: 'post',
		data: newsData,
		success: function(data){
			callback(JSON.parse(data));
		},
		error: function(data){
			callback(data);
		}
	})
}

function GetNewsByUser(userName, callback){
	var newsData = 'userName=' + userName;
	
	$.ajax({
		url: 'http://localhost:8083/queries/getnews_user.php',
		type: 'post',
		data: newsData,
		success: function(data){
			callback(JSON.parse(data));
		},
		error: function(data){
			callback(data);
		}
	})
}

function DeleteNews(headLine, callback){
	var newsData = 'headLine=' + headLine;
	
	$.ajax({
		url: 'http://localhost:8083/queries/delete_news.php',
		type: 'post',
		data: newsData,
		success: function(data){
			callback(JSON.parse(data));
		},
		error: function(data){
			callback(data);
		}
	})
}

function ChangePassword(userName, oldPwd, newPwd, callback){
	var pwdData = '&userName=' + userName + '&oldPassword=' + oldPwd + '&newPassword=' + newPwd;
	
	$.ajax({
		url: 'http://localhost:8083/queries/change_password.php',
		type: 'post',
		data: pwdData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}

function DeleteAccount(userName, callback){
	var userData = '&userName=' + userName;
	
	$.ajax({
		url: 'http://localhost:8083/queries/delete_account.php',
		type: 'post',
		data: userData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}

function SendPasswordViaEmail(fromId, toId, currentPassword, callback){
	var mailData = '&fromId=' + fromId + '&toId=' + toId + '&currentPassword=' + currentPassword;
	
	$.ajax({
		url: 'http://localhost:8083/queries/send_password.php',
		type: 'post',
		data: mailData,
		success: function(data){
			callback(data);
		},
		error: function(data){
			callback(data);
		}
	})
}