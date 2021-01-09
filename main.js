chrome.contextMenus.create ({
  "title": "Copy Markdown Link",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": generateMdLink ()
});

function generateMdLink(info, tab) {
  return function (info, tab) {
    var selection = info.selectionText;
    var mdLink = `[${selection}](${tab.url})`
    copyTextToClipboard(mdLink)
  }
}

//source - https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript
function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  document.body.removeChild(copyFrom);
  notify();
}

function notify() {
  new Notification('', {
    icon: 'icon128.png',
    body: 'Link is copied to the clipboard'
  });
}