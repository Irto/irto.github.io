requirejs.config({
    baseUrl: 'assets/js/libs'
});

requirejs([
    'hammer',
    ], function(angular, app) {
        document.querySelector('.comedown').onclick = function(){
            var 
                headerHeight = this.parentElement.nextElementSibling.offsetTop,
                body = document.querySelector('body');

            scrollFromTop(body, headerHeight, 750);
        }

        document.querySelector('.btn--contact').onclick = function(){
            var 
                headerHeight = document.querySelector('.main__content--contact').offsetTop,
                body = document.querySelector('body');

            scrollFromTop(body, headerHeight, 750);
        }
});

Math.easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};

function scrollFromTop(body, to, duration, current, start) {
    console.log('ff');
    if (current > duration) return;

    if(current === undefined) current = 0;
    if(start === undefined) start = body.scrollTop;

    var difference = to - start,
        newPosition = Math.easeOutCubic(current, start, difference, duration);

    setTimeout(function () {
        body.scrollTop = newPosition;
        scrollFromTop(body, to, duration, current + 10, start);
    }, 10);
}