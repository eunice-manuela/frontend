
$(document).click(function(e) {
    if (!$(e.target).is('.navbar-body')) {
    $('.collapse').collapse('hide');	    
    }
});

$(document).ready(function(){
    alert("amis")
 });

 $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
    
})