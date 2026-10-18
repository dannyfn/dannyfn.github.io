(function () {
    "use strict";

    const storageKey = "qc-site-language";
    const english = window.QC_TRANSLATIONS_EN || {};
    const entries = [];
    let currentLanguage = "zh-CN";

    function remember(language) {
        try {
            window.localStorage.setItem(storageKey, language);
        } catch (_) {
            // Switching still works when browser storage is unavailable.
        }
    }

    function applyLanguage(language) {
        currentLanguage = language === "en" ? "en" : "zh-CN";
        entries.forEach(function (entry) {
            const value = currentLanguage === "en" ? entry.english : entry.original;
            if (entry.attribute) {
                entry.node.setAttribute(entry.attribute, value);
            } else {
                entry.node.nodeValue = value;
            }
        });
        document.documentElement.lang = currentLanguage;
        document.querySelectorAll("[data-language]").forEach(function (button) {
            button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
        });
    }

    function initializeLanguages() {
        // Snapshot individual text nodes to preserve links, icons, line breaks and counters.
        const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement.closest("script, style, noscript, .language-switch")) {
                continue;
            }
            const key = node.nodeValue.trim();
            if (Object.prototype.hasOwnProperty.call(english, key)) {
                entries.push({
                    node: node,
                    original: node.nodeValue,
                    english: node.nodeValue.replace(key, english[key])
                });
            }
        }
        document.querySelectorAll("[alt], [aria-label], [title], meta[name='description'], a[href^='mailto:']").forEach(function (element) {
            ["alt", "aria-label", "title", "content", "href"].forEach(function (attribute) {
                const original = element.getAttribute(attribute);
                if (original && Object.prototype.hasOwnProperty.call(english, original)) {
                    entries.push({node: element, attribute: attribute, original: original, english: english[original]});
                }
            });
        });
        try {
            currentLanguage = window.localStorage.getItem(storageKey) === "en" ? "en" : "zh-CN";
        } catch (_) {
            currentLanguage = "zh-CN";
        }
        applyLanguage(currentLanguage);
        document.querySelectorAll(".language-switch").forEach(function (control) {
            control.hidden = false;
            control.querySelectorAll("[data-language]").forEach(function (button) {
                button.addEventListener("click", function () {
                    applyLanguage(button.dataset.language);
                    remember(currentLanguage);
                });
            });
        });
        window.addEventListener("storage", function (event) {
            if (event.key === storageKey) {
                applyLanguage(event.newValue);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeLanguages);
    } else {
        initializeLanguages();
    }
})();
