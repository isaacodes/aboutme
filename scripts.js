var currentslide = 1;

$(document).on('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;

    if (delta < 0) {
        switch (currentslide) {
            case 1:
                $("header#main").removeClass('display').addClass('left');
                $("header#second").removeClass('right').addClass('display');
                break;
            case 2:
                $("header#second").removeClass('display').addClass('left');
                $("header#third").removeClass('right').addClass('display');
                break;
            case 3:
                $("header#third").removeClass('display').addClass('left');
                $("header#fourth").removeClass('right').addClass('display');
                break;
        }
        if (currentslide < 4) {
            currentslide++;
        }
    } else if (delta > 0) {
        switch (currentslide) {
            case 2:
                $("header#main").removeClass('left').addClass('display');
                $("header#second").removeClass('display').addClass('right');
                break;
            case 3:
                $("header#second").removeClass('left').addClass('display');
                $("header#third").removeClass('display').addClass('right');
                break;
            case 4:
                $("header#third").removeClass('left').addClass('display');
                $("header#fourth").removeClass('display').addClass('right');
                break;
        }
        if (currentslide > 1) {
            currentslide--;
        }
    }
});
function moveon() {
    $("header#main").removeClass('display').addClass('left');
    $("header#second").removeClass('right').addClass('display');
    currentslide++;
}