const FILTERS = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");
let brands = document.querySelector('.yarn-brands');

FILTERS.addEventListener('click', elem => {
    if(elem.target.dataset.value === 'yarn'){
        cards.forEach(elem=>{
            if(elem.dataset.filter === 'yarn') {
                elem.classList.remove('use-filter');
            }
            else {
                elem.classList.add('use-filter');
            }
        })
    } else if(elem.target.dataset.value === 'magazine'){
        cards.forEach(elem=>{
            if(elem.dataset.filter === 'magazine') {
                elem.classList.remove('use-filter');
            }
            else {
                elem.classList.add('use-filter');
            }
        })
    } else if(elem.target.dataset.value === 'needle'){
        cards.forEach(elem=>{
            if(elem.dataset.filter === 'needle') {
                elem.classList.remove('use-filter');
            }
            else {
                elem.classList.add('use-filter');
            }
        })
    } else{
        cards.forEach(elem=> {
            elem.classList.remove('use-filter');
        })
    }
})




