
// Variables
let mySwiper, 
    finalData = [], 
    cardList = $('#js-card-list'),
    cardSlider = $('#js-card-slider'),
    mockdata = {
        href: '#href1',
        title: 'title1',
        img: {
            src: 'dist/img/sample.jpg',
            title: 'Card sample image',
        },
        descr: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        user: {
            link: '#userName',
            name: 'userName',
            online: false,
        },
        bookmark: {
            href: '#lovethis',
            active: false,
        },
        rating: {
            mark: '5.0',
            count: 260,
        },
        cost: {
            amount: 500,
            currency: '₽',
        }
    };

// Add eventlistener
document.addEventListener('DOMContentLoaded', mainReady);

// On card click
$(document).on('click', '[data-href]', function(e) {
    window.location = $(this).data('href');

    // some actions
});
$(document).on('click', '.js-bookmark', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');

    // some actions
});

// On window rdy
function mainReady() {

    // Prepare data
    for (let i = 0; i < 20; i++) {
        finalData.push(mockdata);
    }

    // Add data to card list
    for (let i = 0; i < 10; i++) {
        cardList.append(constructCardEl(finalData[i]))
    }

    // Add data to card slider
    for (let i = 0; i < 20; i++) {
        cardSlider.append(constructCardEl(finalData[i], true))
    }


    // Slider
    mySwiper = new Swiper($('.swiper-container'), {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 5,
        //spaceBetween: 20,
        breakpoints: {
            560: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                //spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                //spaceBetween: 20
            },
            1279: {
                slidesPerView: 4,
                //spaceBetween: 30
            }
        }
    });
};


function constructCardEl(el, isSlider) {
    return `${isSlider ? '<div class="swiper-slide">' : ''}
            <div data-href="${el.href}" title="${el.title}" class="card${isSlider ? ' card__slider' : ''}">
                <div class="card__img">
                    <img src="${el.img.src}" alt="${el.img.title}">
                </div>
                <div class="card__text">
                    ${el.descr}
                </div>
                <div class="card__info">
                    <div class="card__info-row">
                        <div class="username">
                            <div class="username__status ${el.user.online ? ' username__online' : ' username__offline'}">
                            </div>
                            <a href="${el.user.link}" class="username__name">
                                ${el.user.name}
                            </a>
                        </div>
                        <div class="ratings ratings__yellow">
                            <div class="ratings__star">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="ratings__mark">
                                <span>${el.rating.mark}</span>
                            </div>
                            <div class="ratings__count">
                                (<span>${el.rating.count}</span>)
                            </div>
                        </div>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-row">
                        <div class="bookmark">
                            <a href="${el.bookmark.href}" class="js-bookmark${el.bookmark.active ? ' active' : ''}" title="Add to loveis">
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                        <div class="cost">
                            <span class="cost__from">
                                от
                            </span>
                            <span class="cost__amount">
                                ${el.cost.amount}
                            </span>
                            <span class="cost__currency">
                                ${el.cost.currency}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ${isSlider ? '</div>' : ''}`;
}