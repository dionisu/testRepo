(function() {
    const popupOverlay = document.querySelector('.js-overlay-popup');
    const popupLogin = document.querySelector('.popup');
    const loginButton = document.querySelector('.header__button');
    const accountButton = document.querySelector('.header__item-account');
    const body = document.querySelector('body');
    const signInButton = document.querySelector('.popup__input-submit');
    const itemsToHide = ['.facebook-button', '.google-button', '.popup__divider', '.popup__forgot'];
    const switchToLogin = {
        '.popup__title-text': 'Log in to your account',
        '.popup__input-submit': 'Sign In',
        '.popup__footer-text': 'Don\'t have an account?',
        '.popup__footer-link': 'Register',
    };
    const switchToSignUp = {
        '.popup__title-text': 'Create account',
        '.popup__input-submit': 'Sign Up',
        '.popup__footer-text': 'Already have an account?',
        '.popup__footer-link': 'Log in',
    };

    function handlePopup() {
        popupLogin.classList.toggle('popup_active');
        popupOverlay.classList.toggle('js-overlay-popup_active');
        body.classList.toggle('stop-scrolling');
    }

    // Change login/register popup content
    function changePopup() {
        let switchTo = switchToSignUp;

        for (let item of itemsToHide) document.querySelector(item).classList.toggle('js-hide');

        if (!document.querySelector('.facebook-button').classList.contains('js-hide')) switchTo = switchToLogin;
        for (let element in switchTo) {
            let item = document.querySelector(element);
            item.textContent = switchTo[element];
        }
    }

    loginButton.addEventListener('click', handlePopup);
    accountButton.addEventListener('click', handlePopup);
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-overlay-popup_active')) handlePopup()
    });
    document.querySelector('.popup__footer-link').addEventListener('click', changePopup);

    //Input data alert
    document.querySelector('.popup__input-form').onsubmit = function() {
        alert(`Your e-mail: ${this['email'].value}\nYour password: ${this['password'].value}`);
        handlePopup();
    }
}());