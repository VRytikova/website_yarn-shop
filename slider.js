const nextButton = document.querySelector('.pointer-right')
const prevButton = document.querySelector('.pointer-left')
const commentsContainer = document.querySelector('.slider-container')
const commentsSlides = document.querySelectorAll('.card-comment')

let counter = 1

const size = commentsSlides[0].clientWidth + 23

commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextButton.addEventListener('click', () => {
    if(counter >= commentsSlides.length-1) return
    commentsContainer.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevButton.addEventListener('click', () => {
    if(counter <= 0) return
    commentsContainer.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

commentsContainer.addEventListener('transitionend', () => {
    if(commentsSlides[counter].id === 'lastClone'){
        commentsContainer.style.transition = 'none'
        counter = commentsSlides.length - 2
        commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
        console.log(commentsContainer[counter].id)
    }

    if(commentsSlides[counter].id === 'firstClone'){
        commentsContainer.style.transition = 'none';
        counter = commentsSlides.length - counter;
        commentsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

