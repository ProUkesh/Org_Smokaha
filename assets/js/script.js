'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
if (modalCloseOverlay) {
  modalCloseOverlay.addEventListener('click', modalCloseFunc);
}
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', modalCloseFunc);
}

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
  });
}


/// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const accordionButtons = document.querySelectorAll('[data-accordion-btn]');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const accordionContent = this.nextElementSibling;
      const isActive = accordionContent.classList.contains('active');

      // Close all accordion contents
      document.querySelectorAll('.submenu-category-list').forEach(content => {
        content.classList.remove('active');
      });

      // Toggle the clicked accordion content
      if (!isActive) {
        accordionContent.classList.add('active');
      }
    });
  });

  // Accordion functionality for mobile menu
  const accordionButtonsMobile = document.querySelectorAll("[data-accordion-btn]");
  accordionButtonsMobile.forEach(button => {
    button.addEventListener("click", function () {
      const accordionContent = this.nextElementSibling;
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
      this.classList.toggle("active");
    });
  });
});

// Check if 'ethereum' property is already defined
if (!Object.getOwnPropertyDescriptor(window, 'ethereum')) {
  Object.defineProperty(window, 'ethereum', {
    // ...property definition...
  });
}

