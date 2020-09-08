import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

window.WebFontConfig = {
    google: {
        families: [ 'Roboto:400,500,700,900', 'IBM+Plex+Serif:500' ]
    }
  };


$(document).foundation();

jQuery(document).ready(function() {
  initMobMenu();
  initDropHover();
});


function initMobMenu() {
	jQuery('.burger').on('click', function(e) {
		e.preventDefault();
		jQuery('body').toggleClass('menu-open');
	});
};

function initDropHover() {
	jQuery('.nav >ul li').each(function() {
		if(jQuery(this).find('.drop').length){
			jQuery(this).addClass('has-drop');
		}
	});

	jQuery('.nav li a').on('click', function(e){
			if(jQuery(this).siblings('.drop-menu').length && !jQuery(this).closest('li').hasClass('drop-open')){
			e.preventDefault();
			jQuery(this).closest('li').addClass('drop-open');
			jQuery(this).closest('li').siblings('li.drop-open').find('li.drop-open').removeClass('drop-open');
			jQuery(this).closest('li').siblings('li.drop-open').removeClass('drop-open');
		}
	});
};
