$(document).ready(function(){
    $(".btn").click(function() {
        $(".nav-menu").slideToggle("slow", function(){
            alert("animation complete");
        });
    })
})