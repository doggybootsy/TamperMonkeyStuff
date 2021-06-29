// ==UserScript==
// @name         Copy Usernames
// @namespace    https://github.com/doggybootsy/TamperMonkeyStuff
// @version      1
// @description  Copy Usernames from user popouts or modals
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
                if (document.querySelector('.nameTag-m8r81H')) {
                    document.querySelector('.nameTag-m8r81H').addEventListener("click", () => {
                        if(document.querySelector('.nameTag-m8r81H')){
                            const str = document.querySelector('.nameTag-m8r81H>*:nth-child(1)').innerHTML + document.querySelector('.nameTag-m8r81H>*:nth-child(2)').innerHTML
                            const el = document.createElement('textarea');
                            el.value = str;
                            el.setAttribute('readonly', '');
                            el.style.position = 'absolute';
                            el.style.left = '-9999px';
                            document.body.appendChild(el);
                            el.select();
                            document.execCommand('copy');
                            document.body.removeChild(el);
                        }
                    })
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();
