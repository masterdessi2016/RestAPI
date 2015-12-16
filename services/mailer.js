var nodemailer = require('nodemailer');


exports.check = function check(request, response){

//email, username, token
//validar si hace falta -- if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
	auth: {
	  user: "dessimailer@gmail.com",
	  pass: "dessimailer!"
	 }
  	});


	if(request.token!=null){ //Si el token tiene contenido manda mail para validar usuario
    	var html = "<img src='http://squares.thinkcommand.com/images/forgot_pass/ForgotPasswordIcon.png' style='width:128px;height:128px;'><br/>"+
    	"<p>Para resetear tu pass accede a <a href='/api/v1/auth/"+request.token+"'>RESETEO</a></p>";

	}else{ // token vacio mail de confirmación de cambio de pass
		
		var html = "Hola " + request.username +" !! Tu contraseña ha sido reseteada"+
		"<a href='/api/v1/login'>Login</a>"; 
  }

  var mailOptions = {
    from: "Dessi2015", 
	to: request.mail, 
	subject: "Resetea tu contraseña", 
	html: html
  }
				    
  smtpTransport.sendMail(mailOptions, function(error, result){
    if(error){
    	response.status(error.code).json({message: error.message});
	}else{
	 	console.log("mail txatxi");
	}

  });	
}


