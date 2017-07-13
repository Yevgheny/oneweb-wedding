$(document).ready(function() {
	$('.revolution-slider').revolution({
		delay:7000,
		startwidth:960,
		startheight:683,
		startWithSlide:0,

		fullScreenAlignForce:"off",
		autoHeight:"on",

		shuffle:"off",

		onHoverStop:"on",

		thumbWidth:12,
		thumbHeight:12,
		thumbAmount:3,

		hideThumbsOnMobile:"on",
		hideNavDelayOnMobile:1500,
		hideBulletsOnMobile:"off",
		hideThumbsUnderResoluition:0,

		hideThumbs:0,
		hideTimerBar:"off",

		keyboardNavigation:"off",
		touchenabled:"on",
		swipe_velocity:"0.7",
		swipe_max_touches:"1",
		swipe_min_touches:"1",
		drag_block_vertical:"false",

		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
		parallaxDisableOnMobile:"off",

		stopAtSlide:-1,
		stopAfterLoops:-1,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		hideSliderAtLimit:0,

		dottedOverlay:"twoxtwo",

		spinned:"spinner4",

		fullWidth:"off",
		forceFullWidth:"off",
		fullScreen:"off",
		fullScreenOffsetContainer:"#topheader-to-offset",
		fullScreenOffset:"0px",


		shadow:0

	});

});