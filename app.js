//Boton de contacto y logo
const animateLogo = document.getElementById('logo');
const animateContact = document.getElementById('contacto');

animateContact.addEventListener('mouseover', () => {
    animateContact.classList.add('animate__animated', 'animate__flip');
});

animateContact.addEventListener('mouseout', () => {
    animateContact.classList.remove('animate__animated', 'animate__flip');
});

animateLogo.addEventListener('mouseover', () => {
    animateLogo.classList.add('animate__animated', 'animate__hinge');
});


document.addEventListener("DOMContentLoaded", () => {
    const toggleTextButtons = document.querySelectorAll("[id^='toggleText']");
    const accordionTexts = document.querySelectorAll("[id^='accordionText']");

    toggleTextButtons.forEach((toggleTextButton, index) => {
        toggleTextButton.addEventListener("click", () => {
            if (accordionTexts[index].classList.contains('max-h-0')) {
                accordionTexts[index].classList.remove('max-h-0');
                toggleTextButton.textContent = "Ocultar texto";
            } else {
                accordionTexts[index].classList.add('max-h-0');
                toggleTextButton.textContent = "Mostrar texto";
            }
        });
    });
});




