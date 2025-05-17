import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
    console.log("SVExt - Extension installed successfully!");

    // browser.storage.local.set({ myData: 'Initial data' });
});

browser.runtime.onMessage.addListener((msg, sender, response) => {
  console.log('message received from content script: ', msg);
  return true;
});
