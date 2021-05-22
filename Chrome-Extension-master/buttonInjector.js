var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("button.html");

document.body.append(iFrame, document.body.firstChild);