

describe('spec_ScrollExample', function() {

	var scrollExample = require ('../03_Pages/ScrollExamplePage.js'); 
    var testdata = require('../04_InputData/InputData.json');
           testdata.forEach( function (data) {
        	   
     
     it('Scroll Page', function() {

    	 scrollExample.scrollingExample (data.URL);

           });
     
});
});