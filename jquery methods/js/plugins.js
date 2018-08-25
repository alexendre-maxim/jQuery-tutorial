/*global $,console, alert*/


$(function () {
   
    
    "use strict";
    
    /****** Append *****/
    
    $('.btnAppend').click(function () {
       
        $('.listLanguages').append("<li>" + $('.inputAppend').val() + "</li>");
        
    });

    /****** AppendTo *****/
    
    $('.btnAppendTo').click(function () {
       
        $("<li>" + $('.inputAppendTo').val() + "</li>").appendTo($('.listLanguages'));
        
    });
    
    /****** Prepend *****/
    
    $('.btnPrepend').click(function () {
       
        $('.listLanguages').prepend("<li>" + $('.inputPrepend').val() + "</li>");
        
    });
    
    /****** PrependTo *****/
    
    $('.btnPrependTo').click(function () {
       
        $("<li>" + $('.inputPrependTo').val() + "</li>").prependTo($('.listLanguages'));
        
    });
    
    /****** Before *****/
    
    $('.btnBefore').click(function () {
       
        $('.listLanguages').before("<p>" + $('.inputBefore').val() + "</p>");
        
    });
    
    /****** After *****/
    
    $('.btnAfter').click(function () {
       
        $('.listLanguages').after("<p>" + $('.inputAfter').val() + "</p>");
        
    });
    
});