document.querySelectorAll('.slider').forEach(sliderElement => {
    let slider = sliderElement.querySelector('.list');
    let items = sliderElement.querySelectorAll('.item');
    let next = sliderElement.querySelector('.next');
    let prev = sliderElement.querySelector('.prev');
    let dots = sliderElement.querySelectorAll('.dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';
        let last_active_dot = sliderElement.querySelector('.dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => { next.click() }, 3000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        })
    });

    window.onresize = function(event) {
        reloadSlider();
    };


});
