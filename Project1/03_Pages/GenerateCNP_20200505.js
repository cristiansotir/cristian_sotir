module.exports = (function (generateCNP20200505) {
     
	generateCNP20200505.generateCNP20200505function = function (URL, gender, dataNasterii, tara, judet){
		
		//deschidere pagina
		browser.get (URL);
		
		//selectare Gender
		generateCNP20200505.selectGenderFromList4CNP (gender);
		
        //fill Data Nasterii
		generateCNP20200505.dataNasteriiField4CNP(dataNasterii);

        //choose country
		generateCNP20200505.selectTaraFromList4CNP(tara);
        
        //choose county
		generateCNP20200505.selectJudetFromList4CNP(judet);
        
        //click Genereaza CNP
		generateCNP20200505.genereazaCnpButton4CNP();
        
        //print cnp
        var CNP;
        CNP = element(by.id("cnp")).getText(CNP).then(function(CNP){
             console.log ("CNP_ul generat este" + " " +CNP);
        });
        
        browser.sleep(5000);

    
     };
     
     return generateCNP20200505;
     
})(require('../02_Functions/basePageObj.js'));