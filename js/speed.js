let speed = ()=>{
    const port = chrome.runtime.connect({name: "video-speed"});
    if(document.getElementsByTagName("video").length <= 0)return
    console.log(document.getElementsByTagName("video")[0].playbackRate)
    port.postMessage({speed:`${document.getElementsByTagName("video")[0].playbackRate}`});
    port.onMessage.addListener(function(msg) {
        if (parseFloat(msg.value) || parseInt(msg.value) ){
            document.getElementsByTagName("video")[0].playbackRate = parseFloat(msg.value.toFixed(1));
            port.postMessage({speed:`${document.getElementsByTagName("video")[0].playbackRate}`});
        }
    });
}

window.onload=speed;

setInterval(speed,1000)