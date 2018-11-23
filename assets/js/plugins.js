/*global $, JQuery, alert*/
$(document).ready(function () {
    "use strict";

    //Activating the nice scroll code
    $('html').niceScroll();

	$('.carousel').carousel({  /*This is to activate the carousel*/
		interval: 6000
	});

	/*Show Color option gear when click on the div*/
	$('.gear-check').click(function () {
		$('.color-option').fadeToggle();
	});

	/*Change the theme color on click*/

	var colorLi = $('.color-option ul li'),
        scrollButton = $('#scroll-top');

	colorLi
	       .eq(0).css("backgroundColor", "#E41B17").end()
	       .eq(1).css("backgroundColor", "#F426D5").end()
	       .eq(2).css("backgroundColor", "#009AFF").end()
	       .eq(3).css("backgroundColor", "#FFD500");

	colorLi.click(function () {
		//console.log($(this).attr("data-value"));
		//console.log($('link[href="theme"]')); 
		//$('link[href*="theme"]') => This means that we want to search for any link has the word theme
		$('link[href*="theme"]').attr("href", $(this).attr("data-value"));
			/*
			'link' means that we should go to the page and search for a link , 'href' inside this link there is an attribute called href , '*' means that we should search for a word in this attribute called theme , the head tag is the only tag that has href with a word theme , after you found this atrribute with theme word , change the value of this attribute with the colorLi element which is the data-value
			*/
	});

	//Loading Screen 

	$(window).load(function () {

		//Loading elements

		$('.loading-overlay .spinner').fadeOut(2000, function () {
			/*This function will be called after fading the h1 out*/
			//Show the scroll
			$('body').css("overflow", "auto");
			//This is to cancel the overflow hidden given to the body to make the website scroll agin

			$(this).parent().fadeOut(2000, function () {

				$(this).remove(); /*This will remove the loaaing code after fading and we can check the inspect */
			});
		});
	});

	//Scroll button

	$(window).scroll(function () {
		//console.log($(this).scrollTop()); 
		//We use this function 'scrollTop' to know how much pxiels we have scrolled

		if ($(this).scrollTop() >= 650) {
			scrollButton.show();
			/*
			After using scrollTop function we found out that it is preferrable to scroll after the 650px , so we made a condition that when we scroll 650px , show the button
			*/
		} else {
			scrollButton.hide();
		}

	});

	//Click on button to scroll to top

    scrollButton.click(function () {
        $('html,body').animate({ scrollTop : 0 }, 600);
			//Here when we click on the button the scrollTop will be 0 wherever in this page and we used 600 to make scrolling back to top become smooth
    });

});