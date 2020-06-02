/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function (tutorialClick) {
	
	tutorialClick.tutorialButtonClickFunction = function (URL){
		
		//open page
		browser.get(URL);
		
		//Check Tutorial Invisibility
		expect (tutorialClick.tutorialButtonDisplayed()).toBeFalsy();
		
		//click Learn Button
		tutorialClick.learnButtonClick();
		
		//Check Tutorial Visibility
		expect (tutorialClick.tutorialButtonDisplayed()).toBeTruthy();
		
		//click Tutorial button
		tutorialClick.tutorialButtonClick();
	
	};

	return tutorialClick;
	
})(require('../02_Functions/basePageObj.js'));