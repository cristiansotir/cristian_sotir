module.exports = (function (logoutCura) {
	
	logoutCura.logoutCuraPage = function () {
		
		//click Option
		logoutCura.optionToLogoutButtonClick();
		browser.sleep(5000);
		
		//click logout
		logoutCura.logoutButtonClick();
		browser.sleep(5000);
		
	};

	return logoutCura;
	
})(require('../02_Functions/basePageObj.js'));