describe('spec_GenerateCNP20200505', function() {

	var generateCNP20200505 = require ('../03_Pages/GenerateCNP_20200505.js'); 
    var testdata = require('../04_InputData/InputData.json');
           testdata.forEach( function (data) {
        	   
     
     it('Generate CNP 20200505', function() {

    	 generateCNP20200505.generateCNP20200505function (data.URL20200505, data.genderF, data.datanasteriiCNP, data.taraCNP, data.judetCNP);

                
     });// close Generate CNP function
     
     
     it('Generate CNP 20200505', function() {

    	 generateCNP20200505.generateCNP20200505function (data.URL20200505, data.genderM, data.datanasteriiCNP, data.taraCNP, data.judetCNP);

                
     });// close Generate CNP function
     

     
     }); //close testdata function
});