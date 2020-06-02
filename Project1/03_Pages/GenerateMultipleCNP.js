module.exports = (function (generateMultipleCNP) {
     
	generateMultipleCNP.generateNewMultipleCNPfunction = function (URL, gender, dataNasterii, tara, judet){
		
		//deschidere pagina
		browser.get(URL);
		expect(browser.getCurrentUrl()).toBe(URL);
		
		//selectare Gender
		generateMultipleCNP.selectGenderFromList4CNP (gender);
		
        //fill Data Nasterii
		generateMultipleCNP.dataNasteriiField4CNP(dataNasterii);

        //choose country
		generateMultipleCNP.selectTaraFromList4CNP(tara);
		
		//focus off
		generateMultipleCNP.focusFunctionCNPClick();
        
        //choose county
		generateMultipleCNP.selectJudetFromList4CNP(judet);
		
        
        //click Genereaza CNP
		generateMultipleCNP.genereazaCnpButton4CNP();
        
        //print cnp
        var CNP;
        CNP = element(by.id("cnp")).getText(CNP).then(function(CNP){
             console.log ("CNP_ul generat este" + " " +CNP);
        });
        
       

    
     };
     
     return generateMultipleCNP;
     
})(require('../02_Functions/basePageObj.js'));