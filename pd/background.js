
function start(tab) {
  chrome.windows.getCurrent(getWindows);
}
function getWindows(win) {
  targetWindow = win;
  chrome.tabs.getAllInWindow(targetWindow.id, function (tabs){
	  tabCount = tabs.length;
	  alert(tabCount);
  });
}

chrome.browserAction.onClicked.addListener(start);


chrome.windows.getCurrent(function(win){
	targetWindow = win;
	//alert(targetWindow.id);
});
/*  chrome.runtime.onMessage.addListener(function(message, callback) {
   console.log(message.data);
  });
  */
  
    /*console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");*/
  
 /* var pages = [url: '', loadedDOMPage: '', onloadWindow: '', cookies: ''];
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  if (request.greeting == "contentScript"){
		sendResponse([farewell: "goodbye"]);
		//pages[]=request.pages;
		//sendResponse({pages: "as"});
	  }else if(request.greeting == "give-data"){
		sendResponse({pages: pages});
	  }
  });*/
  
 
	var pages=[{url: '', loadedDOMPage: '', onloadWindow: '', cookies: ''}];
	//pages[pages.length]={url: '', loadedDOMPage: '', onloadWindow: '', cookies: ''};
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting[0] == "hello"){
		pages[pages.length]=request.greeting[1];
		sendResponse({farewell: pages});
	}else if(request.greeting[0] == "give"){
		sendResponse({farewell: pages});
	}
  });
  
  