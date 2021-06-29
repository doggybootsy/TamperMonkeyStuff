// ==UserScript==
// @name         Remove No Role
// @namespace    https://github.com/doggybootsy/TamperMonkeyStuff
// @version      1
// @description  Remove "NO ROLE" from user popouts
// @author       You
// @match        *://discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// ==/UserScript==

(function() {
    'use strict';
    const targetNode = document.querySelector('.layerContainer-yqaFcK');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (document.body.contains(document.querySelector('.root-3-B5F3:empty'))) {
                    document.querySelector('.root-3-B5F3:empty').previousSibling.setAttribute('style','display: none !important')
                    document.querySelector('.root-3-B5F3:empty').setAttribute('style','display: none !important')
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();
