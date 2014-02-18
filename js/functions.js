jQuery(document).ready(function($) {

function get_four(){
   $('.product-box').removeClass('size_6').addClass('size_3');
    $('.product-view-type_col-four').addClass('active').siblings().removeClass('active');
   
}

function get_two(){
   $('.product-box').removeClass('size_3').addClass('size_6');
    $('.product-view-type_col-two').addClass('active').siblings().removeClass('active');
  
}

if($.cookie('view') == 'four'){ get_four(); }


$('.product-view-type_col-four').click(function(){  
    $.cookie('view', 'four');
    get_four();
    return false;
});

$('.product-view-type_col-two').click(function(){
    $.cookie('view', 'two');
    get_two();
    return false;

});


});




