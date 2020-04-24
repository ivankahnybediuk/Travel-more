
$(window).scroll(function(){
    if($(this).scrollTop() > 200&&$(this).scrollTop()<1500){
    $(".third-page-row-1-text").addClass("animated-text");
    $(".third-page-row-1-img").addClass("animated-img");
    }
    else{
    $(".third-page-row-1-text").removeClass("animated-text");
    $(".third-page-row-1-img").removeClass("animated-img");
    }
    if($(this).scrollTop() > 800&&$(this).scrollTop()<1700){
    $(".forth-page-row-2").addClass("zoomInDown");
    }
    else{
        $(".forth-page-row-2").removeClass("zoomInDown");   
    }
    if($(this).scrollTop()>1300&&$(this).scrollTop()<2400){
        $(".fifth-page-row").addClass("bounceInLeft")
    }
    else{
        $(".fifth-page-row").removeClass("bounceInLeft")
    }
    if($(this).scrollTop()>1800&&$(this).scrollTop()<3100){
        $(".sixth-page-row").addClass("bounceInRight")
    }
    else{
        $(".sixth-page-row").removeClass("bounceInRight")
    }
    if($(this).scrollTop()>2600&&$(this).scrollTop()<3600){
        $(".comment-block").addClass("zoomInDown")
    }
    else{
        $(".comment-block").removeClass("zoomInDown")
    }
})
