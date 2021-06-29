// ==UserScript==
// @name         Auto skip intro
// @namespace    https://github.com/doggybootsy/TamperMonkeyStuff
// @version      1
// @description  Automatically skips the intro
// @author       Doggybootsy#0001
// @match        *://www.disneyplus.com/video/*
// @icon         https://www.google.com/s2/favicons?domain=disneyplus.com
// ==/UserScript==

(function() {
    'use strict';
    const targetNode = document.getElementById('app_index');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if(document.querySelector('.skip__button')){
                    document.querySelector('.skip__button').click()
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();
