module.exports = (function (generateCNP) {
     
     generateCNP.generateNewCnp = function (URL, gender, dataNasterii, tara, judet){

           //open application
           browser.get(URL);
           expect(browser.getCurrentUrl()).toBe(URL);

           //choose gender
           generateCNP.selectGenderFromList4CNP(gender);

           //fill Data Nasterii
           generateCNP.dataNasteriiField4CNP(dataNasterii);

           //choose country
           generateCNP.selectTaraFromList4CNP(tara);
           
           //choose county
           generateCNP.selectJudetFromList4CNP(judet);
           
           //click Genereaza CNP
           generateCNP.genereazaCnpButton4CNP();
           
           //print cnp
           var CNP;
           CNP = element(by.id("cnp")).getText(CNP).then(function(CNP){
                console.log ("CNP_ul generat este" + " " +CNP);
           });
    
     };
     
     return generateCNP;
     
})(require('../02_Functions/basePageObj.js'));