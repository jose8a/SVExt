import browser from "webextension-polyfill";

const index = document.createElement('div');
index.id = 'extension-root';

const body = document.querySelector('body');
if (body) {
    body.prepend(index);
}

function handleClick () {
    browser.runtime.sendMessage({ action: 'Hi from content script 👋' });
}

