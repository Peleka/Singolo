//Header навигация по сайту

const navigation = document.querySelectorAll('.navigation__link');

const activeLink = (event) => {
  
  navigation.forEach(link => link.classList.remove('navigation__link--active'))
  event.target.closest('.navigation__link').classList.add('navigation__link--active')
}

document.querySelector('.navigation').addEventListener('click', activeLink)


// Изменение вида HEADER при scroll
const scrollPage = () => {

  if (window.pageYOffset >= 50) {
      document.querySelector('.header').classList.add('header--scroll')
  } else {
      document.querySelector('.header').classList.remove('header--scroll')
  }
}

window.addEventListener('scroll', scrollPage)


// Включение/отключение экранов смартфонов

const phoneVertical = document.querySelector('.slider__image-phone--vertical')
const phoneHorizontal = document.querySelector('.slider__image-phone--horizontal')
const phoneImageVertical = document.querySelector('.phone__background--vertical')
const phoneImageHorizontal = document.querySelector('.phone__background--horizontal')
    
phoneVertical.addEventListener('click', () => phoneImageVertical.classList.toggle('phone__background--hidden'))
phoneHorizontal.addEventListener('click', () => phoneImageHorizontal.classList.toggle('phone__background--hidden'))


// Portfolio. Переключение табов 

const portfolioButtons = document.querySelectorAll('.portfolio__button');

const activeButton = (event) => {
  portfolioButtons.forEach(btn => btn.classList.remove('portfolio__button--activ'))
  event.target.classList.add('portfolio__button--activ')
}

document.querySelector('.portfolio__buttons').addEventListener('click', activeButton)


// Portfolio. Перемешивание изображений галереи

const FILTER__BUTTONS = document.querySelectorAll('.portfolio__button')

const shufflePortfolio = () => {

    const portfolioItems = document.querySelector('.pictures__list')

    let shuffledPortfolioItems = document.createElement('ul')
    shuffledPortfolioItems.className = 'pictures__list'

    const portfolio = Array.from(document.querySelectorAll('.picture__item'))

    for (let i = portfolio.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        const temp = portfolio[j]
        portfolio[j] = portfolio[i]
        portfolio[i] = temp
    }
  
    for (let item of portfolio) {
    shuffledPortfolioItems.append(item)
    }

    portfolioItems.replaceWith(shuffledPortfolioItems)
}

for (let filterButton of FILTER__BUTTONS) {
    filterButton.addEventListener('click', shufflePortfolio)
}


//Portfolio. Взаимодействие с картинками, рамка

const portfolioImages = document.querySelectorAll('.picture__image')

const borderImage = (event) => {
    const imageLinks = document.querySelectorAll('.picture__image')

    imageLinks.forEach(item => {
        item.classList.remove('picture__image--border')
    })

    event.target.classList.add('picture__image--border')
}

for (let item of portfolioImages) {
    item.addEventListener('click', borderImage)
}


// Слайдер

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex)

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1)
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1)
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n)
}

/* Основная функция сладера */
function showSlides(n) {

    let slides = document.querySelectorAll('.slider__images')

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = 'block'
}

const prevButtonSlide = document.querySelector('.arrows__icon--left')
const nextButtonSlide = document.querySelector('.arrows__icon--right')

prevButtonSlide.addEventListener('click', minusSlide)
nextButtonSlide.addEventListener('click', plusSlide)

document.querySelectorAll('.arrows').forEach(item => item.addEventListener('click', () => {
    document.querySelector('.slider').classList.toggle('slider--slide-background')
}))


//Get a quote  Отправка формы

const showModal = () => {
  if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '') {
      event.preventDefault()

      const subject = document.getElementById('subject').value.toString()
      const description = document.getElementById('description').value.toString()

      if (subject !== '') {
          document.getElementById('modal-theme').innerText = 'Тема: ' + subject
      } else {
          document.getElementById('modal-theme').innerText = 'Без темы'
      }

      if (description !== '') {
          document.getElementById('modal-text').innerText = 'Описание: ' + description
      } else {
          document.getElementById('modal-text').innerText = 'Без описания'
      }

      document.querySelector('.modal').classList.remove('hidden')
  }

   // Сброс данных формы
   document.querySelector('.form-quote').reset()
}

const closeModal = () => {
  document.querySelector('.modal').classList.add('hidden')
}


document.querySelector('.form-quote__button').addEventListener('click', showModal)
document.querySelector('.message__button').addEventListener('click', closeModal)