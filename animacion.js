$(document).ready(function(){

    $("#lista-link img").hover(
        function(){
            $(this).stop().animate({
                opacity: 0.8,
                width: "290px",
                height: "211px"
            }, 300);
        },
        function(){
            $(this).stop().animate({
                opacity: 1,
                width: "275px",
                height: "200px"
            }, 300);
        }
    );

});
