console.log('hello')

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("스크립트에서 메시지 받음:", message.message , message);
  });

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "knockknock");
  port.onMessage.addListener(function(msg) {
    if (msg.joke === "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer === "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer === "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
      console.log("스크립트에서 메시지 받음:", msg);
  });
});

