let carousel = document.querySelector('.carousel-1')

let photos__contentCarouselIndicator = carousel.querySelectorAll('.photos__content-carousel-indicator')
let photos__contentCarouselItem = carousel.querySelectorAll('.photos__content-carousel-item')

let photos__contentCarouselControlPrev = carousel.querySelector('.photos__content-carousel-control-prev')
let photos__contentCarouselControlNext = carousel.querySelector('.photos__content-carousel-control-next')

let lengthItem = photos__contentCarouselIndicator.length-1

for (item of photos__contentCarouselIndicator){
    item.onclick = function(){
        clearActiveAndGetDatasetIndicator()
        this.classList.add('active')
        showCarouselItem(this.dataset.photos__contentCarouselIndicator)
    }
}

photos__contentCarouselControlPrev.onclick = function(){
    let dataSetIndicator = clearActiveAndGetDatasetIndicator()
    if (dataSetIndicator == 0){
        photos__contentCarouselIndicator[lengthItem].classList.add('active')
        showCarouselItem(lengthItem)
    }
    else {
        photos__contentCarouselIndicator[dataSetIndicator-1].classList.add('active')
        showCarouselItem(dataSetIndicator-1)
    }
}

photos__contentCarouselControlNext.onclick = function(){
    let dataSetIndicator = clearActiveAndGetDatasetIndicator()
    if (dataSetIndicator == lengthItem){
        photos__contentCarouselIndicator[0].classList.add('active')
        showCarouselItem(0)
    }
    else {
        photos__contentCarouselIndicator[dataSetIndicator+1].classList.add('active')
        showCarouselItem(dataSetIndicator+1)
    }
    
}

function clearActiveAndGetDatasetIndicator(){
    let activeItem = carousel.querySelector('.photos__content-carousel-indicators').querySelector('.active')
    activeItem.classList.remove('active')
    return Number(activeItem.dataset.photos__contentCarouselIndicator)
}

function showCarouselItem(indicator){
    for (item of photos__contentCarouselItem){
        item.classList.remove('active')
    }
    console.log(indicator)
    photos__contentCarouselItem[indicator].classList.add('active')
}