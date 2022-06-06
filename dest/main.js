//show background header when scroll
let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;
function changeBgHeader() {
    let scrollY = window.pageYOffset;
    if(scrollY > (heightSlider - heightHeader)) {
        header.classList.add('active')
    }else {
        header.classList.remove('active')
    }
}

//Progress Bar
function showProgressBar() {
    let vh = window.innerHeight;
    let progress = document.querySelector('.progressbar');
    let heightBody = document.querySelector('body').clientHeight;
    let scrollY = window.pageYOffset;
    let percent = Number(scrollY / (heightBody - vh) * 100);
    progress.style.width = percent + '%';
}

setTimeout(function () {
    showProgressBar();
}, 200);

document.addEventListener('scroll', function () {
    showProgressBar();
});

//back to top
let totop = document.querySelector('.totop');
let backToTop = document.querySelector('.backtotop');
let getHeightWindow = window.innerHeight;
function showBackToTop() {
    let scrollY = window.pageYOffset;
    if(scrollY > getHeightWindow) {
        totop.classList.add('active')
    }else {
        totop.classList.remove('active')
    }
}
totop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: `smooth`,
    })
});
backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: `smooth`,
    })
});



document.addEventListener('scroll', function() {
    changeBgHeader();
    showBackToTop();
});

//select language

let lang = document.querySelector('.lang');
let langCurrent = document.querySelector('.lang__current span');
let optionList = document.querySelectorAll('.lang__option-item');

lang.addEventListener('click', function(e) {
    e.stopPropagation();
    lang.classList.toggle('active');
});

optionList.forEach(option => {
    option.addEventListener('click', function(e) {
        let langText = option.textContent;
        let langCurrentText = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        option.innerHTML = langCurrentText;
        //langCurrent.querySelector('span').innerHTML = option.querySelector('span').innerHTML;
    });
    lang.classList.remove('active');
});

document.addEventListener('click', function() {
    lang.classList.remove('active');
});

//Menu mobile
let nav = document.querySelector('.nav');
let btnMenu = document.querySelector('.btnmenu');
let itemNavMenu = document.querySelectorAll('.nav .nav__menu li a');

itemNavMenu.forEach(function(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let className = item.getAttribute('href').replace('#', '');
        let section = document.querySelector('.' + className);
        window.scrollTo({
            top: section.offsetTop - heightHeader,
            behavior: 'smooth'
        });
    });
});

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('change');
    nav.classList.toggle('active');
});

itemNavMenu.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        btnMenu.classList.remove('change');
        nav.classList.remove('active');
    });
});

function hideNav() {
    btnMenu.classList.remove('change');
    nav.classList.remove('active');
}

window.addEventListener('resize', function() {
    let widthWindow = window.innerWidth;
    if (widthWindow > 992) {
        hideNav();
    }
});

//tabs
let tabText = document.querySelectorAll('.tab');
let tabList = document.querySelectorAll('.news__content');

tabText.forEach(function(item, index) {
    item.addEventListener('click', function(){
        let tabId = index + 1;
        tabText.forEach(function(tab){
            tab.classList.remove('active');
        });
        tabList.forEach(function(tab){
            tab.classList.remove('active');
        });
        this.classList.add('active');
        document.querySelector('.news__content-' + tabId).classList.add('active');
    });
});

//video pop-up
let playVideo = document.querySelectorAll('.quality__videos-item .video');
let popupVideo = document.querySelector('.quality__popup');
let xVideo = document.querySelector('.quality__popup-cancel');
let video = document.querySelector('.quality__popup-video');

playVideo.forEach(function(item, index) {
    item.addEventListener('click', function(e) {
        // bỏ chuyển trang
        e.preventDefault();
        e.stopPropagation();
        //lấy id
        let getId = item.getAttribute('id');
        //active popup
        popupVideo.classList.add('active');
        //add Src to iframe
        video.setAttribute('src', 'https://www.youtube.com/embed/' + getId + '?autoplay=1');
    });
});

xVideo.addEventListener('click', function(e) {
    closeVideo();
});

popupVideo.addEventListener('click', function() {
    closeVideo();
});

function closeVideo() {
    popupVideo.classList.remove('active');
    video.removeAttribute('src');
}
//Scroll to the section
let itemMenu = document.querySelectorAll('.menu li a');
let sections = [];
itemMenu.forEach(function(item) {
    let getClassName = item.getAttribute('href').replace('#', '');
    let sectionName = document.querySelector('.' + getClassName);
    sections.push(sectionName);

    item.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top : sectionName.offsetTop - heightHeader + 1,
            behavior: `smooth`,
        });
        removeActiveMenu()
        this.classList.add('active');
    });
});


function removeActiveMenu() {
    itemMenu.forEach(function(item_menu) {
        item_menu.classList.remove('active');
    });
}

window.addEventListener('scroll', function(e) {
    let positionScroll = window.pageYOffset;
    sections.forEach(function (item_section, index) {
        if (positionScroll > item_section.offsetTop - heightHeader && positionScroll < item_section.offsetTop + item_section.offsetHeight) {
            removeActiveMenu();
            itemMenu[index].classList.add('active');
        }else {
            itemMenu[index].classList.remove('active');
        }
    });
});

//Slider
let $carousel = $('.slider__item-wrap');
$carousel.flickity({
    //option
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        ready: function() {
            let dotted = $('.flickity-page-dots');
            paging = $('.slider__bottom-paging .dotted');
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.slider__bottom-paging .number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2,0));
        }
    }
});

$('.slider__bottom-control .--prev').on('click', function() {
    $carousel.flickity('previous');
});
$('.slider__bottom-control .--next').on('click', function() {
    $carousel.flickity('next');
});
// let itemSlider = document.querySelectorAll('.slider__item');
// let nextBtnSlider = document.querySelector('.--next')
// let prevBtnSlider = document.querySelector('.--prev')
// let number = document.querySelector('.slider__bottom-paging .number')
// let itemDot = document.querySelectorAll('.slider__bottom-paging .dotted li')
// let currentSlider = 0;

// itemSlider.forEach(function(itemSlider, index) {
//     if(itemSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// });

// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }

// showNumber(currentSlider + 1);

// nextBtnSlider.addEventListener('click', function() {
//     if(currentSlider < itemSlider.length - 1){
//         goTo(currentSlider + 1);
//         // itemSlider[currentSlider].classList.remove('active');
//         // itemSlider[currentSlider + 1].classList.add('active');
//         // currentSlider++;
//     }else {
//         goTo(0);
//         // itemSlider[currentSlider].classList.remove('active');
//         // itemSlider[0].classList.add('active');
//         // currentSlider = 0;
//     }
// });

// prevBtnSlider.addEventListener('click', function() {
//     if(currentSlider > 0){
//         goTo(currentSlider - 1);
//         // itemSlider[currentSlider].classList.remove('active');
//         // itemSlider[currentSlider - 1].classList.add('active');
//         // currentSlider--;
//     }else {
//         goTo(itemSlider.length - 1);
//         // itemSlider[currentSlider].classList.remove('active');
//         // itemSlider[itemSlider.length - 1].classList.add('active');
//         // currentSlider = itemSlider.length - 1;
//     }
// });

// function goTo(index) {
//     itemSlider[currentSlider].classList.remove('active');
//     itemDot[currentSlider].classList.remove('change-dot');
//     itemSlider[index].classList.add('active');
//     itemDot[index].classList.add('change-dot');
//     currentSlider = index;
//     showNumber(currentSlider + 1);
// }

// itemDot.forEach(function (li, index) {
//     li.addEventListener('click', function () {
//         goTo(index);
//     });
// });

//Slider bottom
let $carouselBottom = $('.wrap');
let $progressBar = $('.progress');
$carouselBottom.flickity({
    //option
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    freeScroll: true,
    wrapAround: false,
    lazyLoad: 3,
});


$carouselBottom.flickity().on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});