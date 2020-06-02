/**********************************************************************************
* 
*	Created by: 
*
*	Description: 
*
*	
*
**********************************************************************************/

module.exports = (function () {
	
	var that = {};
	
		
		//SCROLL FUNCTION
    	that.scrollElemFinderIntoView = function(elemFinder) {
    		var promise = browser.executeScript(function(elem) {
    			elem.scrollIntoView(false);
    		}, elemFinder);
    		return promise;
    	};
    	//top locator
	    that.backToTopLocator = element(by.xpath('//*[@id="wrapper"]/footer/div/p[1]/a'));
	    
	    //click to top button
	    that.backToTopButtonClick = function(){
	    	return element(by.xpath('//*[@id="wrapper"]/footer/div/p[1]/a')).click();
	    };

		//Click Learn Button
		that.learnButtonClick = function (){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/a')).click();
		};
		
		//check Tutorial is Present
		that.tutorialButtonPresent = function (){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[1]/a')).isPresent();
		};
		
		//check FAQ is Present
		that.faqButtonPresent = function () {
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[2]/a')).isPresent();
		};
		
		//check Videos is Present
		that.videosButtonPresent = function (){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[3]/a')).isPresent();
		};
		
		//check Case Studies is Present
		that.caseStudiesButtonPresent = function () {
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[4]/a')).isPresent();
		};
		
		//Tutorial Button Click
		that.tutorialButtonClick = function (){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[1]/a')).click();
		};
		
		//check Tutorial is Displayed
		that.tutorialButtonDisplayed = function (){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[1]/a')).isDisplayed();
		};
		
		//FAQ Button Click
		that.FaqButtonClick = function(){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[2]/a')).click();
		};
		
		//Videos Button Click
		that.videosButtonClick = function(){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[3]/a')).click();
		}
		
		//Case Studies Button Click
		that.caseStudiesButtonClick = function(){
			return element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/ul/li[4]/a')).click();
		}
		
		//click Appointment
		that.makeAppoitnmentButtonClick = function () {
			return element(by.id("btn-make-appointment")).click();
		};
		
		//fill user name
		that.inserUserName = function (username){
			return element(by.id("txt-username")).sendKeys(username);
		};
		
		//fill password
		that.insertPassword = function (password){
			return element(by.id("txt-password")).sendKeys(password);
		};
		
		//click Login
		that.loginButtonclick = function (){
			return element(by.id("btn-login")).click();
		};
		
		//check Make Appointment text
		that.checkMakeAppointmentText = function (text3){
			return element(by.xpath('//*[@id="appointment"]/div/div/div/h2')).getText(text3);
		};
		
		//click CURA option to logout
		that.optionToLogoutButtonClick = function (){
			return element(by.xpath('//*[@id="menu-toggle"]')).click();
		};
		
		//click logout button
		that.logoutButtonClick = function (){
			return element(by.xpath('//*[@id="sidebar-wrapper"]/ul/li[5]/a')).click();
		};

	    //choose gender from dropdown list
	    that.selectGenderFromList4CNP = function (gender){
	         return element(by.id("sex")).sendKeys(gender);
	    };
		
	    //fill date from picker
	    that.dataNasteriiField4CNP = function (date){
	         return element(by.id('datepicker')).sendKeys(date);
	    };
	    
	    //choose country from dropdown list
	    that.selectTaraFromList4CNP = function (tara){
	         return element(by.id("country")).sendKeys(tara);
	    };
	    
	    //choose county from dropdown list
	    that.selectJudetFromList4CNP = function (judet){
	         return element(by.id("judet")).sendKeys(judet);
	    };

	    //click Generate CNP
	    that.genereazaCnpButton4CNP = function (){
	         return element(by.id('genButton')).click();
	    };
	    
	    //focus
	    that.focusFunctionCNPClick = function(){
	    	return element(by.xpath('/html/body/div[1]/div[2]')).click();
	    }
	    
	    
	    

	return that;
	
})();


