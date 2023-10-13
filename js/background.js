console.log('hello')

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("스크립트에서 메시지 받음:", message.message , message);
  });

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "video-speed");
  port.onMessage.addListener(function(msg) {
      console.log("Speed msg:", msg.speed);
      console.log("Value msg:", msg.value);
  });
});

