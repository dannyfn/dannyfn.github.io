(function () {
    "use strict";

    function initializeNavigation() {
        const toggle = document.querySelector(".menu-toggle");
        const navigation = document.querySelector(".site-nav");

        if (!toggle || !navigation) {
            return;
        }

        const closeDropdowns = [];
        navigation.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
            const trigger = dropdown.querySelector(".nav-dropdown-toggle");
            const menu = dropdown.querySelector(".nav-dropdown-menu");
            if (!trigger || !menu) {
                return;
            }

            let closeTimer;
            let pinned = false;

            function setOpen(isOpen) {
                window.clearTimeout(closeTimer);
                dropdown.classList.toggle("is-open", isOpen);
                trigger.setAttribute("aria-expanded", String(isOpen));
                if (!isOpen) {
                    pinned = false;
                }
            }

            closeDropdowns.push(function () { setOpen(false); });
            dropdown.classList.add("dropdown-enhanced");
            trigger.setAttribute("aria-expanded", "false");

            trigger.addEventListener("click", function (event) {
                event.preventDefault();
                pinned = !pinned;
                setOpen(pinned);
            });
            dropdown.addEventListener("pointerenter", function (event) {
                if (event.pointerType === "mouse") {
                    setOpen(true);
                }
            });
            dropdown.addEventListener("pointerleave", function (event) {
                if (event.pointerType === "mouse" && !pinned && !dropdown.contains(document.activeElement)) {
                    closeTimer = window.setTimeout(function () { setOpen(false); }, 220);
                }
            });
            dropdown.addEventListener("focusin", function () {
                window.clearTimeout(closeTimer);
            });
            dropdown.addEventListener("focusout", function (event) {
                if (!dropdown.contains(event.relatedTarget)) {
                    setOpen(false);
                }
            });
            dropdown.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    event.preventDefault();
                    setOpen(false);
                    trigger.focus();
                } else if (event.target === trigger && event.key === "ArrowDown") {
                    event.preventDefault();
                    setOpen(true);
                    menu.querySelector("a").focus();
                } else if (event.target === trigger && event.key === " ") {
                    event.preventDefault();
                    trigger.click();
                }
            });
            document.addEventListener("pointerdown", function (event) {
                if (!dropdown.contains(event.target)) {
                    setOpen(false);
                }
            });
        });

        toggle.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            if (!isOpen) {
                closeDropdowns.forEach(function (close) { close(); });
            }
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                if (link.matches(".nav-dropdown-toggle")) {
                    return;
                }
                closeDropdowns.forEach(function (close) { close(); });
                navigation.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });

        document.documentElement.classList.add("nav-enhanced");
    }

    function markCurrentProduct() {
        const currentProduct = document.body.dataset.product;
        if (!currentProduct) {
            return;
        }

        document.querySelectorAll("[data-product-switcher]").forEach(function (link) {
            if (link.dataset.productSwitcher === currentProduct) {
                link.classList.add("is-current");
                link.setAttribute("aria-current", "page");
            }
        });
    }

    function setCurrentYear() {
        document.querySelectorAll("[data-current-year]").forEach(function (element) {
            element.textContent = String(new Date().getFullYear());
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initializeNavigation();
        markCurrentProduct();
        setCurrentYear();
    });
})();
