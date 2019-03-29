$(document).ready(function () {
    $(":submit").hover(function () {
        $(this).css("background-color", "red");
    });
    $(".middlestyle").mouseleave(function () {
        var minHeight = $(this).css('min-height');
        $(this).slideUp("slow", function () {
            $(this).css('min-height', '20%')
            $(this).css('display', 'block');
        });
    });
    $("#prod1,#prod2,#prod3,#prod4,#prod5").click(function () {
        var minHeight = $(this).css('min-height');
        $(this).slideDown("slow", function () {
            $(this).css('min-height', "20%");
            $(this).css('display', 'block');
        });
    });

    // Effect to shrink as mouse goes over
    $("#upgrades,#contracts,#cleaning,#custompcs,#tuning").mouseover(function () {
        var minHeight = $(this).css('min-height');
        $(this).slideDown("slow", function () {
            $(this).css('min-height', "20%");
            $(this).css('display', 'block');
        });
    });
    // Attempt to make it big again when mouse goes out (didn't work)
    $("#upgrades,#contracts,#cleaning,#custompcs,#tuning").onmouseout(function () {
        var maxHeight = $(this).css('min-height');
        $(this).slideUp("slow", function () {
            $(this).css('min-height', "90%");
            $(this).css('display', 'block');
        });
    });
    $(".caption .text").dblclick(function () {
        $(this).animate({
            fontSize:100
        }, 1000)
    });
    $(".bg1 :last, .bg2 :last, .bg3 :last, .bg4 :last, .bg5 :last").hover(function () {
        $(this).css("border","5px solid red")
    })
});