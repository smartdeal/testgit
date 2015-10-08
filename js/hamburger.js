/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 *
 * Created by 4mobile@mail.ru
 * Date: 25.09.15
 */

jQuery(document).ready(function () {

    //Open the menu
    jQuery("#hamburger").click(function () {
        var curMenuWidth = ( 100 * parseFloat(jQuery('nav').css('width')) / parseFloat(jQuery('nav').parent().css('width')) );
        jQuery('#hamburger').css('display', 'none');
        jQuery('nav').css('z-index', '2');
        jQuery('nav').animate({'opacity': '1'}, 500, function() {
            if (curMenuWidth > 50) jQuery('#container').css('display', 'none');
        });              
    });

    //close the menu
    jQuery("#bt-close-img").click(function () {
        jQuery('nav').animate({'opacity': '0'}, 500, function() {
            jQuery('nav').css('z-index', '0');
        });        
        jQuery('#container').css('display', 'block');
        jQuery('#hamburger').css('display', 'block');
    });

});