//const commentsContainer = document.querySelector('.slider-container')
////const commentsSlides = document.querySelectorAll('.card-comment')

//let counter = 1

//const size = commentsSlides[0].clientWidth + 23

//commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'

/*commentsContainer.addEventListener('swipe', () => {
    commentsContainer.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    console.log('puf')
})*/
let touchstartX = 0
let touchendX = 0

const slider = document.querySelector('.slider-container')

function handleGesture() {
    if (touchendX < touchstartX) alert('swiped left!')
    if (touchendX > touchstartX) alert('swiped right!')
}

slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
})
