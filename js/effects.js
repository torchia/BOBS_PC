$(document).ready(function () {
    $(":submit").hover(function () {
        $(this).css("background-color", "red");
    },
        function () {
        $(this).css("background-color", "cornflowerblue");
        });
    $(".bg1,.bg2,.bg3,.bg4,.bg5").click(function () {
        var minHeight = $(this).css('min-height');
        $(this).css('min-height', '20%').slideUp("slow", function () {
            $(this).css('display', 'block');
        });
    });
})