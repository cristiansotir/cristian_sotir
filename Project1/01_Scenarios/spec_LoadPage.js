/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_LoadPage1', function() {
	
	
	var loadPage = require('../03_Pages/LoadPage.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach( function (data) {
	
	it('Open the page', function() {
		
		loadPage.loadingPage (data.URL);
				
	});
	
	});
	
});
