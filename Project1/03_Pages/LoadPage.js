/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function (loadPage) {
	
	loadPage.loadingPage = function (URL){
		
		//open page
		browser.get(URL);
		
		//click Learn Button
		loadPage.learnButtonClick();
		
		//Check Tutorial Visibility
		expect (loadPage.tutorialButtonPresent()).toBeTruthy();
		
		//Check FAQ Visibility
		expect (loadPage.faqButtonPresent()).toBeTruthy();
		
		//Check Videos Visibility
		expect (loadPage.videosButtonPresent()).toBeTruthy();
		
		//Check Case Studies Visibility
		expect (loadPage.caseStudiesButtonPresent()).toBeTruthy();
		
	};

	return loadPage;
	
})(require('../02_Functions/basePageObj.js'));