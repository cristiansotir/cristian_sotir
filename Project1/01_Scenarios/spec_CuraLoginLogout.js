describe('spec_CuraLoginLogout', function () {
	
	var loginCura = require('../03_Pages/LoginCURAHealthcareService.js');
	var logoutCura = require('../03_Pages/LogoutCURAHealthcareService.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach (function (data) {
			
	it('Login and Logout', function () {
		
		//do login
		loginCura.loginCuraPage (data.URLCura, data.username, data.password, data.messageafterlogin);
		
		//do logout
		logoutCura.logoutCuraPage();

	});
	
		}); // close data

}); //close main function