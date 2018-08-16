/*global $,console, alert*/


$(function () {
   
    
    "use strict";
        
    /***** Show and Hide Effects *****/
   /* 
    $('.advancedSearch').click(function () {
       
        $(this).toggleClass('activeButton');
        
        if ($(this).hasClass('activeButton')) {
            
            $('.searchAdv').show(1000);
            
            $(this).html('Simple Search');
            
            $('.inputSearchA').hide(1000);
            
        } else {
            
            $('.searchAdv').hide(1000);
            
            $(this).html('Advanced Search');
            
            $('.inputSearchA').show(1000);
                
        }
        
    });
    
    */
    
    /****** Toggle Effect ******/
    
    $('.advancedSearch').click(function () {
       
        $('.searchAdv').toggle(1000);
        
        $('.inputSearchA').toggle(1000);
        
        if ($('.searchAdv').css('display') === 'block') {
          
            $('.advancedSearch').html('Simple Search');
            
        } else {
            
            $('.advancedSearch').html('Advanced Search');
            
        }
        
    });
    
    /******* FadeIn Effect ***********/
    /*
    $('.service').mouseenter(function () {
       
        $('.secondList').fadeIn(1000);
        
        $(this).addClass('active');
                
    });
    
    $('.service').mouseleave(function () {
       
        $('.secondList').fadeOut(1000);
        
        $(this).removeClass('active');
                
    });
    
    /******** FadeToggle ********/
    
    $('.service').click(function () {
       
        $('.secondList').fadeToggle(10000, function () {
           
            console.log('toggle');
            
        });
        
    });
    
});