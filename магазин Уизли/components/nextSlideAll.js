const nextSlideAll = function(id) {
    if (!id) return;
    let slides = document.querySelector('#' + id + ' .slide');
    let slideInterval = setInterval(nextSlide,2000);
    let currentSlide = 0;
    
    function nextSlide() {
        if (!slides) return; // проследить!
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    };
}

export let fakewandInterval = setInterval(nextSlideAll('fakewand'),2000);
export let slideInterval = setInterval(nextSlideAll('broom'),2000);
export let emblemInterval = setInterval(nextSlideAll('emblem'),2000);
export let quillInterval = setInterval(nextSlideAll('quill'),2000);