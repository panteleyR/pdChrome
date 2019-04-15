/*chrome.windows.getCurrent(['true', 'normal'], function (windowW){
	alert(windowW.id);
	/*
chrome.tabs.create([windowW.id,0,'vk.com','true','true','false', 45], function(tab){
	alert(22);
});
});*/

let url = document.location.href;
let loadedDOMPage = 0;
let onloadWindow = 0;

  window.onload = function(){
  setTimeout(function(){
    var t = performance.timing;
	/*
    console.log(t);
	for( var prop in t){
		console.log(prop);
		console.log((t[prop] - t.connectStart)/1000);
	}
    console.log(t.loadEventEnd/1000 - t.responseEnd/1000);
	*/
	  onloadWindow= t['loadEventEnd']/1000 - t['connectStart']/1000;
	
	  loadedDOMPage= t['domContentLoadedEventEnd']/1000 - t['connectStart']/1000;
  
  console.log(loadedDOMPage, onloadWindow, url, document.cookie);
  }, 0);
}
/*
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});*/
/*let pages = [url, loadedDOMPage, onloadWindow, document.cookie];
function check(){
	chrome.runtime.sendMessage({greeting: "contentScript"}, function(response) {
	  console.log(response.farewell);
	});
}
check();
*/

	var pages=["hello", {url: url, loadedDOMPage: loadedDOMPage, onloadWindow: onloadWindow, cookies: document.cookie}];

	//var pages=[{url: '', loadedDOMPage: '', onloadWindow: '', cookies: ''}];
chrome.runtime.sendMessage({greeting: pages}, function(response) {

  console.log(response.farewell);
});








