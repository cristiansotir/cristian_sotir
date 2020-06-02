module.exports = (function (loginCura) {
	
	loginCura.loginCuraPage = function (URLCura, username, password, messageafterlogin) {
		
		//open page
		browser.get(URLCura);
		
		//click Make Appointment Button
		loginCura.makeAppoitnmentButtonClick();
		
		//insert user name
		loginCura.inserUserName(username);
		
		//insert password
		loginCura.insertPassword(password);
		
		//Click Login
		loginCura.loginButtonclick();
		
		//check Make Appointment text is visible
		expect (loginCura.checkMakeAppointmentText()).toBe(messageafterlogin)
		
	};

	return loginCura;
	
})(require('../02_Functions/basePageObj.js'));