chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "video-speed");
  port.onMessage.addListener(function(msg) {
      console.log("Speed msg:", msg.speed);
      console.log("Value msg:", msg.value);
      console.log("Infintiy value msg:",msg.Infintiy_value)
  });
});

