describe('spec_GenerateMultipleCNP', function() {

	var generateMultipleCNP = require ('../03_Pages/GenerateMultipleCNP.js'); 
    var testdata = require('../04_InputData/InputMultipleData.json');
           testdata.forEach( function (data) {
        	   
     
     fit('Generate Multiple CNP', function() {

    	 generateMultipleCNP.generateNewMultipleCNPfunction (data.URL_generate_CNP, data.genderM, data.datanasteriiCNP, data.taraCNP, data.judetCNP);

                
     });// close Generate CNP function
     }); //close testdata function
     
     
     it('Generate Single CNP', function() {

    	 n = 32
    	 generateMultipleCNP.generateNewMultipleCNPfunction (testdata[n].URL_generate_CNP,
    			 testdata[n].genderF, testdata[n].datanasteriiCNP, testdata[n].taraCNP, testdata[n].judetCNP);

                
     });// close Generate CNP function
     
});