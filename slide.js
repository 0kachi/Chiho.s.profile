'use strict' ;

{
    const images = ['img/website-01.JPEG','img/website-02.JPG']
    const slideImg = document.getElementById('slide_img')
    const prev = document.getElementById('prev');
    const page = document.getElementById('page');
    const next = document.getElementById('next');
    let current =0;

    page.textContent = `1/${images.length}`;

    next.addEventListener('click', function() {
        if(current + 1 < images.length) {
            current++;
            slideImg.src = images[current];
        }
        page.textContent = `${current + 1 }/${images.length}`;
    });

    prev.addEventListener('click', function() {
        if(current > 0) {
            current--;
            slideImg.src = images[current];
        }
        page.textContent = `${current + 1 }/${images.length}`;
    });
    

}
