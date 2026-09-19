$(document).ready(function(){

    $("#lista-link img").hover(
        function(){
            $(this).stop().animate({
                opacity: 0.8,
                width: "290px"
            }, 300);
        },
        function(){
            $(this).stop().animate({
                opacity: 1,
                width: "275px"
            }, 300);
        }
    );

});