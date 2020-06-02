


module.exports = ( function (scrollExample){
	
	scrollExample.scrollingExample = function(URL){
		//open page
		browser.get(URL);
		
		
		//Click learn button
		scrollExample.learnButtonClick();
		
		//check tutorial visibility
		expect (scrollExample.tutorialButtonDisplayed()).toBeTruthy();
		
		//click tutorial button
		scrollExample.tutorialButtonClick();
		
		//scroll to button Back to top
		scrollExample.scrollElemFinderIntoView(scrollExample.backToTopLocator);
		browser.sleep(3000);
		
		//click on button Back to top
		scrollExample.backToTopButtonClick();
		browser.sleep(3000);
		
		//Click learn button
		scrollExample.learnButtonClick();
		
		//click FAQ button
		scrollExample.FaqButtonClick();
				
		//scroll to button Back to top
    	scrollExample.scrollElemFinderIntoView(scrollExample.backToTopLocator);
		browser.sleep(3000);
	
		//click on button Back to top
		scrollExample.backToTopButtonClick();
		browser.sleep(3000);
		
		//Click learn button
		scrollExample.learnButtonClick();
		
		//click Videos button
	    scrollExample.videosButtonClick();
		
	//	//Click Case Studies
	//	scrollExample.caseStudiesButtonClick();
		
		
		
		
	};
	return scrollExample;
	
})(require('../02_Functions/basePageObj.js'));
