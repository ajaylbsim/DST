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


	// document.getElementById("amount1").value = ""+usernameValue.trim();
	// document.getElementById("amount3").value = ""+passwordValue.trim();


	console.log(""+usernameValue+"    "+passwordValue)

	if(("admin101" === usernameValue.trim())&&("admin101" === passwordValue.trim()) ){
		window.location.href = "http://www.khsbihar.com/admin.html";
	}else if(("admin 101" === usernameValue.trim())&&("admin 101" === passwordValue.trim()) ){
		window.location.href = "http://www.khsbihar.com/admin.html";
	}
	else if(("admin" === usernameValue.trim())&&("admin" === passwordValue.trim()) ){
		window.location.href = "http://www.khsbihar.com/admin.html";
	}else{
		alert("Invalid username or password. Please try again!");
	}

}
     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn');
		
      
    });