//Notification
function WarningNotif(id, msg) {
  var x = document.getElementById(id);
  x.className = "show";
  $('#' + id).text(msg);
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

function SuccessNotif(id, msg) {
  var x = document.getElementById(id);
  x.className = "show";
  $('#' + id).text(msg);
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

function IsAlphaNumeric($string) {
    var alphaReg = /^[a-zA-Z0-9\-\s]+$/;
    return alphaReg.test($string);
}

function IsAlphaNumericAndSpeCha($string) {
    var alphaReg = /^[a-zA-Z0-9\-\_\.\s]+$/;
    return alphaReg.test($string);
}

function IsEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function GetLS(field) {
    return window.localStorage.getItem(field);
}

function SetLS(field, value) {
    return window.localStorage.setItem(field, value);
}

function RemoveLS(field) {
    return window.localStorage.removeItem(field);
}

function ShowHidePassword(fieldId, eyeToggle) {
    if ($("#" + eyeToggle).hasClass("fa-eye")) {
        $("#" + fieldId).attr("type", "text");
        $("#" + eyeToggle).removeClass("fa-eye").addClass("fa-eye-slash");
    }
    else if ($("#" + eyeToggle).hasClass("fa-eye-slash")) {
        $("#" + fieldId).attr("type", "password");
        $("#" + eyeToggle).removeClass("fa-eye-slash").addClass("fa-eye");
    }
}