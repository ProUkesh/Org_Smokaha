'use strict';

// Ensure script only runs once
if (!window.isScriptLoaded) {
    window.isScriptLoaded = true;

    document.addEventListener("DOMContentLoaded", function () {
        console.log("✅ Script Loaded and DOM Fully Ready");

        // Wait for elements to be available
        setTimeout(() => {
            console.log("🔍 Checking for required elements...");

            /*** ✅ Mobile Menu Handling ***/
            const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
            const mobileMenu = document.querySelector('[data-mobile-menu]');
            const mobileMenuCloseBtn = document.querySelector('[data-mobile-menu-close-btn]');
            const overlay = document.querySelector('[data-overlay]');

            if (mobileMenu && overlay && mobileMenuOpenBtn.length > 0 && mobileMenuCloseBtn) {
                console.log("✅ Mobile Menu elements found. Attaching event listeners.");

                mobileMenuOpenBtn.forEach(btn => {
                    btn.addEventListener("click", function () {
                        mobileMenu.classList.add("active");
                        overlay.classList.add("active");
                    });
                });

                mobileMenuCloseBtn.addEventListener("click", function () {
                    mobileMenu.classList.remove("active");
                    overlay.classList.remove("active");
                });

                overlay.addEventListener("click", function () {
                    mobileMenu.classList.remove("active");
                    overlay.classList.remove("active");
                });

            } else {
                console.error("❌ Mobile menu elements not found. Make sure header.html is loaded.");
            }

            /*** ✅ Modal Handling ***/
            const modal = document.querySelector('[data-modal]');
            const modalCloseBtn = document.querySelector('[data-modal-close]');
            const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

            if (modal && modalCloseBtn && modalCloseOverlay) {
                console.log("✅ Modal elements found. Attaching event listeners.");

                const modalCloseFunc = function () {
                    modal.classList.add('closed');
                };

                modalCloseOverlay.addEventListener('click', modalCloseFunc);
                modalCloseBtn.addEventListener('click', modalCloseFunc);

            } else {
                console.error("❌ Modal elements not found.");
            }

            /*** ✅ Notification Toast Handling ***/
            const notificationToast = document.querySelector('[data-toast]');
            const toastCloseBtn = document.querySelector('[data-toast-close]');

            if (notificationToast && toastCloseBtn) {
                console.log("✅ Notification Toast elements found. Attaching event listeners.");
                
                toastCloseBtn.addEventListener('click', function () {
                    notificationToast.classList.add('closed');
                });
            } else {
                console.error("❌ Notification Toast elements not found.");
            }

            /*** ✅ Accordion Menu Handling ***/
            const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
            const accordion = document.querySelectorAll('[data-accordion]');

            if (accordionBtn.length > 0 && accordion.length > 0) {
                console.log("✅ Accordion elements found. Attaching event listeners.");

                accordionBtn.forEach((btn, index) => {
                    btn.addEventListener("click", function () {
                        const clickedBtn = this.nextElementSibling.classList.contains('active');

                        // Close all accordions
                        accordion.forEach((acc, i) => {
                            if (clickedBtn) return;
                            if (acc.classList.contains('active')) {
                                acc.classList.remove('active');
                                accordionBtn[i].classList.remove('active');
                            }
                        });

                        // Toggle the clicked accordion
                        this.nextElementSibling.classList.toggle('active');
                        this.classList.toggle('active');
                    });
                });
            } else {
                console.warn("⚠️ Accordion elements not found.");
            }

        }, 500); // Delay execution by 500ms to allow header.html to load
    });
}


function verifyAge(isOldEnough) {
    if (isOldEnough) {
      sessionStorage.setItem("ageVerified", "true"); // Save for this session
      document.getElementById("ageModal").style.display = "none";
    } else {
      window.location.href = "https://www.google.com"; // Redirect underage users
    }
  }

  // Show the modal only if age verification hasn't been done in this session
  document.addEventListener("DOMContentLoaded", function () {
    let ageModal = document.getElementById("ageModal");
    
    if (ageModal) { // Check if the element exists before modifying
      if (sessionStorage.getItem("ageVerified") === "true") {
        ageModal.style.display = "none";
      } else {
        ageModal.style.display = "flex";
      }
    } else {
      console.error("Error: #ageModal not found in the DOM.");
    }
  });