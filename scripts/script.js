$(document).ready(function () {

    new WOW().init();

    $(".tour-schedule-slider").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        swipe: false,
        prevArrow: $('.tour-schedule__button-prev'),
        nextArrow: $('.tour-schedule__button-next'),
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 775,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".photos-from-excursions-slider").slick({
        dots: true,
        slidesToScroll: 1,
        speed: 300,
        fade: true,
        swipe: false,
        prevArrow: $('.photos__navigation__button-prev'),
        nextArrow: $('.photos__navigation__button-next'),
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    swipe: true,
                }
            },
        ]
    });

    $(".reviews__items-slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        prevArrow: $('.reviews__navigation__button-prev'),
        nextArrow: $('.reviews__navigation__button-next'),
        swipe: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                }
            }
        ]
    });

    $('.photos-from-excursions__item').magnificPopup({
        delegate: 'div',
        type: 'image',
    });

    $('a[href^="#"]').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    let popupPhoneCall = $('.phone-call-popup');
    let formButtonSubmit = $('.form-button-submit');
    let formButtonPopup = $('.form-button-popup');
    let url = 'https://testologia.site/checkout';

    let popupInputName = $('.popup-input-name');
    let popupInputPhone = $('.popup-input-telephone');

    let inputPhoneNumber = $('.input-telephone');
    let inputName = $('.input-name');

    function checkForm(inputNameForm, inputPhoneForm) {
        let hasError = false;

        if (!inputNameForm.val().trim()) {
            inputNameForm.next().css('visibility', 'visible');
            inputNameForm.css('border', '1px solid red');
            hasError = true;
        }

        if (!inputPhoneForm.val().trim()) {
            inputPhoneForm.next().css('visibility', 'visible');
            inputPhoneForm.css('border', '1px solid red');
            hasError = true;
        }

        return hasError
    }

    function requestForm(hasError, name, phone, hideAndShowBlock) {
        if (!hasError) {
            $.ajax({
                url: url,
                method: 'POST',
                data: {
                    name: name.val(),
                    phone: phone.val()
                }
            }).done(function (message) {
                console.log(message.success);
                if (!message.success) {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                } else {
                    // $('.form__block').css('visibility', 'hidden');
                    // $('.form-success-message').css('display', 'flex');
                    // formBlockHidden.css('visibility', 'hidden');
                    // formSuccessShow.css('display', 'flex');
                    // popupPhoneCall.hide();
                    hideAndShowBlock();
                }
            })
        }
    }

    function showAndHideBlockFormPopup() {
        $('.form__block-inputs-info-popup').css('display', 'none');
        $('.form__block-text').css('visibility', 'hidden');
        $('.form-success-message-popup').css('display', 'block');
    }

    function showAndHideBlockForm() {
        $('.form__block').css('visibility', 'hidden');
        $('.form-success-message').css('display', 'flex');
    }

    formButtonSubmit.click(function () {
        $('.form-input-error').css('visibility', 'hidden');
        $('.form-input').css('border', '1px solid white');
        requestForm(
            checkForm(inputName, inputPhoneNumber),
            inputName, inputPhoneNumber,
            showAndHideBlockForm);
    });

    formButtonPopup.click(function () {
        $('.input-error-popup').css('visibility', 'hidden');
        $('.popup-form-input').css('border', '1px solid white');
        requestForm(
            checkForm(popupInputName, popupInputPhone),
            popupInputName,
            popupInputPhone,
            showAndHideBlockFormPopup);
    });

    $('.call-request-button').click(function () {
        popupPhoneCall.css('display', 'flex');
        $('.form-success-message-popup').css('display', 'none');
        $('.phone-call-popup__container .form__block-text').css('visibility', 'visible');
        $('.form__block-inputs-info-popup').css('display', 'flex').children().children().val("");
    });

    $('.close-button-popup').click(function () {
        popupPhoneCall.hide();
    })

    $('#burger-popup-button').click(function () {
        $('#burger-popup').css('display', 'flex');
    });

    $('#close-button-popup').click(function () {
        $('#burger-popup').hide();
    });

    $('.burger-popup-close-button').click(function () {
        $('#burger-popup').hide();
    });


    let heightItem;
    $('.program-tour__read-more-button').click(function () {
        let buttonTextShow = $(this).children()[0].textContent;
        if (buttonTextShow === 'Читать далее') {
            heightItem = $(this).parent().height;
            $(this).children()[0].textContent = 'Скрыть текст';
            $(this).parent().css('height', 'auto').css('max-height', 'fit-content').css('background-size', 'cover');
            $(this).prev().css('display', 'block').css('max-height', 'none').css('font-size', '11px');
        } else if (buttonTextShow === 'Скрыть текст') {
            $(this).children()[0].textContent = 'Читать далее';
            $(this).parent().css('height', '271px').css('max-height', '157px').css('background-size', 'contain');
            $(this).prev().css('display', '-webkit-box').css('max-height', '69px').css('font-size', '12px');
        }
    });

    $('.reviews__read-more-button').click(function () {
        let buttonTextShow = $(this).children()[0].textContent;
        if (buttonTextShow === 'Читать далее') {
            $(this).children()[0].textContent = 'Скрыть текст';
            $(this).parent().css('height', 'auto').css('background-size', 'cover');
            $(this).prev().css('display', 'block').css('max-height', 'none');
        } else if (buttonTextShow === 'Скрыть текст') {
            $(this).children()[0].textContent = 'Читать далее';
            $(this).parent().css('height', '270px').css('background-size', 'contain');
            $(this).prev().css('display', '-webkit-box').css('max-height', '230px');
        }
    });
});