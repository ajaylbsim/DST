    // -------   Mail Send ajax


function myFunction() {
	var username = $('#amount1');
	var password = $('#amount3');
    var usernameValue= username[0].value;
		console.log("username",password);

	var passwordValue= password[0].value;

//	if(("useradmin@khs" === usernameValue)&&("password@admin@khs" === passwordValue) ){
//	}else{
//		alert("Invalid username or password. Please try again!");
//	}
//	
	
	
	if(("a" === usernameValue)&&("b" === passwordValue) ){
		window.location.href = "http://www.khsbihar.com/admin.html";
	}else{
		alert("Invalid username or password. Please try again!");
	}
	
	
}
     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn');
		
      
    });