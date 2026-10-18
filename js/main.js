(function () {
    "use strict";

    function initializeNavigation() {
        const toggle = document.querySelector(".menu-toggle");
        const navigation = document.querySelector(".site-nav");

        if (!toggle || !navigation) {
            return;
        }

        toggle.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
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
