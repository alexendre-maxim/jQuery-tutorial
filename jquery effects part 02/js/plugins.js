/*global $,console*/


$(function () {
   
    
    "use strict";
    /*
    $('.logi').click(function () {
        
        $(this).toggleClass('activeBtn');
        
        if ($(this).hasClass('activeBtn')) {
            
            $('.signIn').slideDown(1000);
        } else {
            
            $('.signIn').slideUp(1000);
            
        }
        
    });
    
    */
    
    $('.logi').click(function () {
        
        $('.signIn').slideToggle(10000, function () {
            
            $('.logi').css('color', 'green');
            
        });
        
    });
    
    $('.sign').click(function () {
       
        $('.signUp').show(1000, function () {
           
            $('.signUp').css('width', '400px').css('height', '100%').css('color', 'red');
            $('.signUp').slideDown();
            $('.signUp').slideUp();
        });
        
    });
    
});