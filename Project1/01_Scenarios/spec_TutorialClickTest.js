/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_TutorialClickTest', function() {
	
	
	var tutorialClick = require('../03_Pages/TutorialClick.js');
	var testdata = require('..//04_InputData/InputData.json');
		testdata.forEach( function (data) {
	
	it('Open the page', function() {
		
		tutorialClick.tutorialButtonClickFunction (data.URL);
				
	});
	
	});
	
});