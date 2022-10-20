$(document).ready(function () {

    new WOW().init();

    $(".tour-schedule-slider").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        swipe: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    variableWidth: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 436,
                settings: {
                    slidesToShow: 1.3,
                    swipe: true,
                }
            },
            {
                breakpoint: 377,
                settings: {
                    slidesToShow: 1.2,
                    swipe: true,
                }
            },
            {
                breakpoint: 326,
                settings: {
                    slidesToShow: 1.12,
                    swipe: true,
                }
            }
        ]
    });

    $(".photos-from-excursions-slider").slick({
        dots: true,
        slidesToScroll: 1,
        speed: 300,
        fade: true,
        swipe: false,
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

    function requestForm(hasError, name, phone) {
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
                    $('.form__block').css('visibility', 'hidden');
                    $('.form-success-message').css('display', 'flex');
                    popupPhoneCall.hide();
                }
            })
        }
    }

    formButtonSubmit.click(function () {
        $('.form-input-error').css('visibility', 'hidden');
        $('.form-input').css('border', '1px solid white');
        requestForm(checkForm(inputName, inputPhoneNumber), inputName, inputPhoneNumber);
    });

    formButtonPopup.click(function () {
        $('.input-error-popup').css('visibility', 'hidden');
        $('.popup-form-input').css('border', '1px solid white');
        requestForm(checkForm(popupInputName, popupInputPhone), popupInputName, popupInputPhone);
    })


    $('.call-request-button').click(function () {
        popupPhoneCall.css('display', 'flex');
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
});