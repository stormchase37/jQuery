
function rotatePics(currentPhoto) {
	var numberOfPhotos = $('#photos img').length;
	currentPhoto = currentPhoto % numberOfPhotos;
	$('#photos img').eq(currentPhoto).fadeOut(function() {
		//reorder the z-index
		$('#photos img').each(function(i) {
			$(this).css('zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos);
		});
		$(this).show();
		setTimeout(function() {rotatePics(++currentPhoto);}, 4000);
	});
}

function positionLightboxImage() {
	var top = ($(window).height() - $('#lightbox').height()) / 2;
	var left = ($(window).width() - $('#lightbox').width()) /2;
	$('#lightbox')
		.css ({
			'top': top + $(document).scrollTop(),
			'left': left
		})
		.fadeIn();
	}

function removeLightbox() {
	$('#overlay, #lightbox').fadeOut('slow', function() {
		$(this).empty().remove();
		//show scrollbars
		$('body').css('overflow-y', 'auto'); 
	});
}

$(document).ready(function(){

rotatePics(1);

$('a.lightbox').click(function() {
	
	//hide scrollbars
	$('body').css('overflow-y', 'hidden');
	//add overlay
	$('<div id="overlay"></div>')
	.css('top', $(document).scrollTop())
	.css('opacity', '0')
	.animate({'opacity': '0.5'}, 'slow')
	.appendTo('body');
//create lightbox
	$('<div id="lightbox"></div>')
	.hide()
	positionLightboxImage();
//attach image
	$('<img>')
	.attr('src', $(this).attr('href'))
	.appendTo('#lightbox')
	.on('load', function() {
		
	})
	.click(function() {
		removeLightbox();
	})
	.appendTo('#lightbox');

return false;
	
});
//menu
	$('#sites>li>a').mouseover(function() {
		$(this)
		.addClass('sub')
		.siblings('ul')
		.animate({
			queue: 'false',
			width: 'show',
			easing: 'swing'
		})

		.mouseleave(function() {
			$(this).animate({
				queue: 'false',
				width: 'hide'
			});
		});
	});
	$('#sites').mouseleave(function() {
		$('#sites>li>a').removeAttr('class');
		$('#sites ul, #sites ul ul').stop(true,true).fadeOut();
	});
	$('#sites>li>ul>li').mouseleave(function(){
		$('#sites>li>ul>li>ul').stop(true,true).fadeOut();
	});

//accordion
	$('#accord>ul>li').children('ul').hide();
	$('#accord>ul>li').on('click', function() {
		$('#accord ul').find('ul').stop(false,true).animate({queue:'false', height: 'hide', easing:'swing'});
		
	if ($(this).attr('class') != 'active'){
		$('#accord>ul>li').removeAttr('class')
		$(this).addClass('active').children('ul').stop(false,true).animate({ queue:'false', height: 'show', easing: 'swing'
		});
	} else {
		$('#accord>ul>li').removeAttr('class');
	}

	return false;
	});
$.ajax({url: page})
//end of document ready	
});