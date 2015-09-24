var winheight;
jQuery(document).ready(function() {
	'use strict';
//home page
jQuery('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
//slider height
homeheight();
function homeheight(){
	winheight = jQuery(window).outerHeight();
	jQuery('.header-slider .slick-slide').css('height', winheight);
}

//image from background banner
var i=1;
	jQuery('.header-slider div.item img').each(function(){
		jQuery('.home-slider div.item img').css('display','none');
		var imgone = jQuery(this).closest('img').attr('src');
		jQuery(this).parent().parent().css('background-image', 'url(' + imgone + ')');
		i++;
});

//footer open-close
jQuery('a.openfooter').click(function() {
	jQuery(this).addClass('closefooter');
	var footervalue = parseInt(jQuery('footer').css('bottom'));
	if(footervalue < 0){	
    jQuery('footer').animate({'bottom':'0'});
	}else{
		jQuery('footer').animate({'bottom':'-97px'});
	}
});


//window resize function	
jQuery(window).resize(function() {
	homeheight();
});

});

