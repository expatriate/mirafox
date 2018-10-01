'use strict';

// Variables
var mySwiper = void 0,
    finalData = [],
    cardList = $('#js-card-list'),
    cardSlider = $('#js-card-slider'),
    mockdata = {
    href: '#href1',
    title: 'title1',
    img: {
        src: 'dist/img/sample.jpg',
        title: 'Card sample image'
    },
    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user: {
        link: '#userName',
        name: 'userName',
        online: false
    },
    bookmark: {
        href: '#lovethis',
        active: false
    },
    rating: {
        mark: '5.0',
        count: 260
    },
    cost: {
        amount: 500,
        currency: '₽'
    }
};

// Add eventlistener
document.addEventListener('DOMContentLoaded', mainReady);

// On card click
$(document).on('click', '[data-href]', function (e) {
    window.location = $(this).data('href');

    // some actions
});
$(document).on('click', '.js-bookmark', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    // some actions
});

// On window rdy
function mainReady() {

    // Prepare data
    for (var i = 0; i < 20; i++) {
        finalData.push(mockdata);
    }

    // Add data to card list
    for (var _i = 0; _i < 10; _i++) {
        cardList.append(constructCardEl(finalData[_i]));
    }

    // Add data to card slider
    for (var _i2 = 0; _i2 < 20; _i2++) {
        cardSlider.append(constructCardEl(finalData[_i2], true));
    }

    // Slider
    mySwiper = new Swiper($('.swiper-container'), {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 5,
        //spaceBetween: 20,
        breakpoints: {
            560: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 2
                //spaceBetween: 10
            },
            1024: {
                slidesPerView: 3
                //spaceBetween: 20
            },
            1279: {
                slidesPerView: 4
                //spaceBetween: 30
            }
        }
    });
};

function constructCardEl(el, isSlider) {
    return (isSlider ? '<div class="swiper-slide">' : '') + '\n            <div data-href="' + el.href + '" title="' + el.title + '" class="card' + (isSlider ? ' card__slider' : '') + '">\n                <div class="card__img">\n                    <img src="' + el.img.src + '" alt="' + el.img.title + '">\n                </div>\n                <div class="card__text">\n                    ' + el.descr + '\n                </div>\n                <div class="card__info">\n                    <div class="card__info-row">\n                        <div class="username">\n                            <div class="username__status ' + (el.user.online ? ' username__online' : ' username__offline') + '">\n                            </div>\n                            <a href="' + el.user.link + '" class="username__name">\n                                ' + el.user.name + '\n                            </a>\n                        </div>\n                        <div class="ratings ratings__yellow">\n                            <div class="ratings__star">\n                                <i class="fas fa-star"></i>\n                            </div>\n                            <div class="ratings__mark">\n                                <span>' + el.rating.mark + '</span>\n                            </div>\n                            <div class="ratings__count">\n                                (<span>' + el.rating.count + '</span>)\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card__line"></div>\n                    <div class="card__info-row">\n                        <div class="bookmark">\n                            <a href="' + el.bookmark.href + '" class="js-bookmark' + (el.bookmark.active ? ' active' : '') + '" title="Add to loveis">\n                                <i class="fas fa-heart"></i>\n                            </a>\n                        </div>\n                        <div class="cost">\n                            <span class="cost__from">\n                                \u043E\u0442\n                            </span>\n                            <span class="cost__amount">\n                                ' + el.cost.amount + '\n                            </span>\n                            <span class="cost__currency">\n                                ' + el.cost.currency + '\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ' + (isSlider ? '</div>' : '');
}