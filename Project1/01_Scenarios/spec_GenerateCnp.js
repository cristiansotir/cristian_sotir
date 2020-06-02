describe('spec_GenerateCNP', function() {

	var generateCNP = require ('../03_Pages/GenerateCNP.js'); 
    var testdata = require('../04_InputData/InputData.json');
           testdata.forEach( function (data) {
        	   
     
     it('Generate CNP', function() {

    	 generateCNP.generateNewCnp (data.URL_generate_CNP, data.genderF, data.datanasteriiCNP, data.taraCNP, data.judetCNP);

                
     });// close Generate CNP function
     
     it('Generate CNP', function() {

    	 generateCNP.generateNewCnp (data.URL_generate_CNP, data.genderM, data.datanasteriiCNP, data.taraCNP, data.judetCNP);

                
     });// close Generate CNP function
     
     }); //close testdata function
});