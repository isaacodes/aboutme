var currentslide = 1;
var able = true;

$(document).on('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;
    if (able === true) {
        if (delta < 0) {
            switch (currentslide) {
                case 1:
                    $("header#main").removeClass('display').addClass('left');
                    $("header#second").removeClass('right').addClass('display');
                    $("nav button#two").addClass('fill');
                    $("nav .bar.one").addClass('y');
                    break;
                case 2:
                    $("header#second").removeClass('display').addClass('left');
                    $("header#third").removeClass('right').addClass('display');
                    $("nav button#three").addClass('fill');
                    $("nav .bar.two").addClass('y');
                    break;
                case 3:
                    $("header#third").removeClass('display').addClass('left');
                    $("header#fourth").removeClass('right').addClass('display');
                    $("nav button#four").addClass('fill');
                    $("nav .bar.three").addClass('y');
                    break;
                case 4:
                    $("header").removeClass('left').addClass('full-left');
                    $("header#page-header").addClass('show');
                    $("body").css("overflow-y", 'auto');
                    $("nav button#five").addClass('fill');
                    $("nav .bar.four").addClass('y');
                    break;
            }
            if (currentslide < 5) {
                currentslide++;
            }
        } else if (delta > 0) {
            switch (currentslide) {
                case 2:
                    $("header#main").removeClass('left').addClass('display');
                    $("header#second").removeClass('display').addClass('right');
                    $("nav button#two").removeClass('fill');
                    $("nav .bar.one").removeClass('y');
                    break;
                case 3:
                    $("header#second").removeClass('left').addClass('display');
                    $("header#third").removeClass('display').addClass('right');
                    $("nav button#three").removeClass('fill');
                    $("nav .bar.two").removeClass('y');
                    break;
                case 4:
                    $("header#third").removeClass('left').addClass('display');
                    $("header#fourth").removeClass('display').addClass('right');
                    $("nav button#four").removeClass('fill');
                    $("nav .bar.three").removeClass('y');
                    break;
            }
            if (currentslide > 1) {
                currentslide--;
            }
        }
        able = false;
        function puedo() {
            able = true;
        }
        setTimeout(puedo, 500);
    };
});
function moveon() {
    $("header#main").removeClass('display').addClass('left');
    $("header#second").removeClass('right').addClass('display');
    currentslide++;
}

$(document).on('mousewheel', '.final', function (e) {
    var delta = e.originalEvent.wheelDelta;
    if (delta > 0) {
        if ($('.final').scrollTop() == 0) {
            $("header#fourth").removeClass('full-left').removeClass('left').addClass('display');
            $("header:not(#fourth)").removeClass('full-left').removeClass('display').removeClass('right').addClass('left');
            $("nav button#five").removeClass('fill');
            $("nav .bar.four").removeClass('y');
        }
    } else if (delta < 0) {
        currentslide = 6;
    }
});