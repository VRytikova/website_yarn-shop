//const commentsContainer = document.querySelector('.slider-container')
////const commentsSlides = document.querySelectorAll('.card-comment')

//let counter = 1

//const size = commentsSlides[0].clientWidth + 23

//commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'

commentsContainer.addEventListener('touch', () => {
    commentsContainer.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    console.log('puf')
})