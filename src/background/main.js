console.log('running');

const main = () => {
    alert('extension clicked');
}

chrome.browserAction.onClicked.addListener(main);
